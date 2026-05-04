import { Users, UserCheck, Home, MapPin, BarChart3, TrendingUp, AlertTriangle } from "lucide-react";
import demoData from "@/data/demographics.json";
import { PageHeader, SectionHeading, StatBox, Card, DataTable } from "@/components/ui";

export const metadata = {
  title: "জনসংখ্যা ও ওয়ার্ড",
  description: "ফাঁসিয়াখালী ইউনিয়নের ওয়ার্ড-ভিত্তিক জনসংখ্যা, ভোটার পরিসংখ্যান এবং জনতাত্ত্বিক বিশ্লেষণ।",
};

export default function DemographicsPage() {
  const maxPop = Math.max(...demoData.wards.map((w) => w.populationNum));

  return (
    <>
      <PageHeader
        title={demoData.title}
        description="ওয়ার্ড-ভিত্তিক জনসংখ্যার বিন্যাস, ভোটার পরিসংখ্যান এবং জনতাত্ত্বিক বিশ্লেষণ"
        breadcrumb="জনসংখ্যা ও ওয়ার্ড"
      />

      {/* Overview Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="সামষ্টিক জনতাত্ত্বিক রূপরেখা"
            subtitle="ইউনিয়নের মোট জনসংখ্যা ও পরিবার সম্পর্কিত মূল পরিসংখ্যান"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Users, label: "মোট জনসংখ্যা", value: demoData.overview.totalPopulation },
              { icon: UserCheck, label: "পুরুষ", value: demoData.overview.malePopulation },
              { icon: UserCheck, label: "মহিলা", value: demoData.overview.femalePopulation },
              { icon: Home, label: "মোট পরিবার", value: demoData.overview.totalHouseholds },
            ].map((stat, i) => (
              <StatBox key={i} icon={stat.icon} label={stat.label} value={stat.value} />
            ))}
          </div>

          {/* Additional metrics */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "গড় পরিবার আকার", value: demoData.overview.avgFamilySize, note: "জাতীয় গড় ৪.০-৪.৫" },
              { label: "লিঙ্গ অনুপাত", value: demoData.overview.sexRatio, note: null },
              { label: "মোট আয়তন", value: demoData.overview.area, note: "দাপ্তরিক রেকর্ড" },
              { label: "কৃষি জমি", value: demoData.overview.agriculturalLand, note: null },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-lg font-bold text-slate-800">{item.value}</p>
                <p className="text-sm text-slate-500 mt-0.5">{item.label}</p>
                {item.note && (
                  <p className="text-xs text-slate-400 mt-1">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ward-wise Population */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="ওয়ার্ড-ভিত্তিক জনসংখ্যা"
            subtitle="নয়টি ওয়ার্ডের জনসংখ্যার বিন্যাস ও তারতম্য"
          />

          {/* Visual bar chart */}
          <div className="space-y-4 mb-12">
            {demoData.wards.map((ward) => {
              const percentage = (ward.populationNum / maxPop) * 100;
              const isLargest = ward.populationNum === maxPop;
              return (
                <Card key={ward.number} className="p-4 lg:p-5" hover={false}>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold ${
                      isLargest
                        ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
                        : "bg-emerald-50 text-emerald-700"
                    }`}>
                      {ward.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-slate-800 text-sm truncate">
                          {ward.name}
                        </h3>
                        <span className={`text-sm font-bold shrink-0 ml-3 ${
                          isLargest ? "text-emerald-600" : "text-slate-700"
                        }`}>
                          {ward.population}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isLargest
                              ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                              : "bg-gradient-to-r from-emerald-300 to-teal-300"
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1 truncate">
                        {ward.villages}
                      </p>
                    </div>
                  </div>
                  {ward.note && (
                    <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-1.5 mt-2 ml-14">
                      📝 {ward.note}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Disparity highlight */}
          <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200" hover={false}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-amber-900 text-base">স্থানিক ভারসাম্যহীনতা</h3>
                <p className="text-sm text-amber-800/80 mt-1 leading-relaxed">
                  ০৯ নম্বর ওয়ার্ডে ১০,১৩৫ জন বাস করে (মোট জনসংখ্যার ~২৫%), অথচ ০৪ নম্বর ওয়ার্ডে মাত্র ২,৫২৬ জন। এই চারগুণ ব্যবধান গণতান্ত্রিক প্রতিনিধিত্ব ও সম্পদ বন্টনের সমতাকে চ্যালেঞ্জ করে।
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Voter Demographics */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={demoData.voterDemographics.title}
            subtitle="নির্বাচনী ভোটাধিকার ও লিঙ্গ বৈষম্যের বিশ্লেষণ"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Voter stats */}
            <div className="space-y-4">
              {[
                { label: "মোট ভোটার", value: demoData.voterDemographics.totalVoters, percent: demoData.voterDemographics.totalVotersPercent, color: "emerald" },
                { label: "পুরুষ ভোটার", value: demoData.voterDemographics.maleVoters, percent: demoData.voterDemographics.maleVotersPercent, color: "blue" },
                { label: "নারী ভোটার", value: demoData.voterDemographics.femaleVoters, percent: demoData.voterDemographics.femaleVotersPercent, color: "pink" },
              ].map((item, i) => (
                <Card key={i} className="p-5" hover={false}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600">{item.label}</span>
                    <span className="text-sm font-bold text-slate-800">{item.percent}</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800 mb-2">{item.value}</p>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.color === "emerald"
                          ? "bg-emerald-500"
                          : item.color === "blue"
                          ? "bg-blue-500"
                          : "bg-pink-500"
                      }`}
                      style={{ width: item.percent }}
                    />
                  </div>
                </Card>
              ))}
            </div>

            {/* Gender gap analysis */}
            <Card className="p-6 lg:p-8" hover={false}>
              <h3 className="text-lg font-bold text-slate-800 mb-4">লিঙ্গ বৈষম্য বিশ্লেষণ</h3>

              <div className="p-4 rounded-xl bg-red-50 border border-red-100 mb-6">
                <p className="text-3xl font-bold text-red-700">{demoData.voterDemographics.genderGap}</p>
                <p className="text-sm text-red-600 mt-1">পুরুষ ভোটারের তুলনায় নারী ভোটার কম</p>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  পুরুষরা মোট জনসংখ্যার ৫২.৩৫% কিন্তু ভোটাধিকারপ্রাপ্তদের মধ্যে ৬০.৪৭%
                  প্রতিনিধিত্ব করে।
                </p>
                <p>
                  নারীরা জনসংখ্যার ৪৭.৬৫% হলেও নিবন্ধিত ভোটারদের মাত্র ৩৯.৫৩%।
                </p>
                <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-100">
                  <p className="text-xs text-amber-800">
                    <strong>কারণসমূহ:</strong> জাতীয় পরিচয়পত্র প্রাপ্তিতে আমলাতান্ত্রিক জটিলতা,
                    পিতৃতান্ত্রিক সীমাবদ্ধতা, এবং বাল্যবিবাহ-সংক্রান্ত সমস্যা।
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
