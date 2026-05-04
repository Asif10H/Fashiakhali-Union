import { TreePine, Waves, Mountain, MapPin, Compass, Leaf, Fish, Bird } from "lucide-react";
import aboutData from "@/data/about.json";
import { PageHeader, SectionHeading, Card } from "@/components/ui";

export const metadata = {
  title: "ইউনিয়ন সম্পর্কে",
  description: "ফাঁসিয়াখালী ইউনিয়নের ঐতিহাসিক প্রেক্ষাপট, ভূ-প্রাকৃতিক কাঠামো এবং পরিবেশগত বৈচিত্র্য সম্পর্কে বিস্তারিত তথ্য।",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={aboutData.title}
        description="ফাঁসিয়াখালী ইউনিয়নের ঐতিহাসিক পটভূমি, ভূ-প্রাকৃতিক বৈশিষ্ট্য এবং পরিবেশগত সম্পদ"
        breadcrumb="ইউনিয়ন সম্পর্কে"
      />

      {/* Historical Context */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                title={aboutData.historicalContext.title}
                centered={false}
              />
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {aboutData.historicalContext.content}
              </p>
              <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200/50">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-amber-800">
                  <strong>নামকরণ:</strong> হাসান রাজার কন্যা &quot;ফাঁসিয়া&quot;-র নামানুসারে এই অঞ্চলের নামকরণ করা হয়েছে &quot;ফাঁসিয়াখালী&quot;।
                </p>
              </div>
            </div>
            {/* Decorative visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50 overflow-hidden relative border border-emerald-200/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <Mountain className="w-12 h-12 text-emerald-600" />
                    </div>
                    <p className="text-lg font-bold text-emerald-800 font-[family-name:var(--font-display)]">
                      ঐতিহাসিক ফাঁসিয়াখালী
                    </p>
                    <p className="text-sm text-emerald-600 mt-1">সমৃদ্ধ ঐতিহ্য ও প্রকৃতি</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Leaf className="w-7 h-7 text-emerald-500" />
                </div>
                <div className="absolute bottom-8 left-6 w-14 h-14 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Waves className="w-6 h-6 text-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={aboutData.geography.title}
            subtitle="মাতামুহুরী নদী ও ইয়াংচা খাল দ্বারা সংজ্ঞায়িত ভূ-প্রকৃতি"
          />
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-4xl mx-auto text-center mb-12">
            {aboutData.geography.content}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.geography.keyFeatures.map((feature, i) => {
              const icons = [Waves, Fish, Mountain];
              const Icon = icons[i] || Waves;
              return (
                <Card key={i} className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wildlife Sanctuary */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={aboutData.environment.title}
            subtitle="ফাঁসিয়াখালী বন্যপ্রাণী অভয়ারণ্য ও এর জীববৈচিত্র্য"
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main info */}
            <div className="lg:col-span-3">
              <Card className="p-6 lg:p-8" hover={false}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {aboutData.environment.sanctuaryInfo.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {aboutData.environment.sanctuaryInfo.location}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {aboutData.environment.content}
                </p>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="text-sm text-emerald-800">
                    <strong>নির্ভরশীল জনসংখ্যা:</strong>{" "}
                    {aboutData.environment.sanctuaryInfo.dependentPopulation} — ইউনিয়নের প্রায় অর্ধেক জনসংখ্যা এই বনভূমির ইকোসিস্টেমের ওপর নির্ভরশীল।
                  </p>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <Card className="p-5" hover={false}>
                <h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  নিকটবর্তী গ্রাম সমূহ
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.environment.sanctuaryInfo.nearbyVillages.map((village, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100"
                    >
                      {village}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-5" hover={false}>
                <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">
                  ইকো-ট্যুরিজম সম্ভাবনা
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {aboutData.environment.sanctuaryInfo.ecoTourismPotential}
                </p>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100" hover={false}>
                <div className="flex items-center gap-3 mb-2">
                  <Bird className="w-5 h-5 text-blue-600" />
                  <h4 className="text-sm font-semibold text-blue-800">
                    পর্যটন সংযোগ
                  </h4>
                </div>
                <p className="text-xs text-blue-700 leading-relaxed">
                  ডুলাহাজারা সাফারি পার্ক ও মেধাকচ্ছপিয়া ন্যাশনাল পার্কের নিকটে অবস্থিত।
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upazila Context */}
      <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={aboutData.upazila.title}
            subtitle="ফাঁসিয়াখালী ইউনিয়নের বৃহত্তর প্রশাসনিক প্রেক্ষাপট"
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "মোট আয়তন", value: aboutData.upazila.area },
              { label: "জনসংখ্যা", value: aboutData.upazila.population },
              { label: "জনসংখ্যা ঘনত্ব", value: aboutData.upazila.density },
              { label: "সাক্ষরতার হার", value: aboutData.upazila.literacy },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-5 text-center">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-sm text-emerald-200/70 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(aboutData.upazila.boundaries).map(([dir, val]) => {
              const dirLabels = { north: "উত্তরে", south: "দক্ষিণে", east: "পূর্বে", west: "পশ্চিমে" };
              return (
                <div key={dir} className="glass rounded-xl p-4">
                  <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider mb-1">
                    {dirLabels[dir]}
                  </p>
                  <p className="text-sm text-white/80">{val}</p>
                </div>
              );
            })}
          </div>

          {/* Ethnic groups */}
          <div className="mt-10 text-center">
            <p className="text-sm text-emerald-200/60 mb-3">বৈচিত্র্যময় জাতিগোষ্ঠী</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {aboutData.upazila.ethnicGroups.map((group, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
