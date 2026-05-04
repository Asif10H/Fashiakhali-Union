import { School, BookOpen, Building2, Flame, MapPin, Hospital, HeartPulse, CheckCircle } from "lucide-react";
import institutionsData from "@/data/institutions.json";
import { PageHeader, SectionHeading, Card } from "@/components/ui";

export const metadata = {
  title: "প্রতিষ্ঠান সমূহ",
  description: "ফাঁসিয়াখালী ইউনিয়নের শিক্ষা প্রতিষ্ঠান, ধর্মীয় প্রতিষ্ঠান এবং স্বাস্থ্য সেবা কেন্দ্র।",
};

export default function InstitutionsPage() {
  return (
    <>
      <PageHeader
        title={institutionsData.title}
        description="শিক্ষা, ধর্মীয় ও স্বাস্থ্য প্রতিষ্ঠান সমূহের বিস্তারিত তথ্য"
        breadcrumb="প্রতিষ্ঠান সমূহ"
      />

      {/* Educational Institutions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={institutionsData.educationalInstitutions.title}
            subtitle={institutionsData.educationalInstitutions.description}
          />

          {/* Schools */}
          <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
            <School className="w-5 h-5 text-emerald-600" />
            মাধ্যমিক বিদ্যালয় সমূহ
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {institutionsData.educationalInstitutions.schools.map((school, i) => (
              <Card key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <School className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">{school.name}</h4>
                <p className="text-sm text-slate-500 mt-1">{school.type}</p>
              </Card>
            ))}
          </div>

          {/* Madrasas */}
          <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            মাদ্রাসা সমূহ
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {institutionsData.educationalInstitutions.madrasas.map((madrasa, i) => (
              <Card key={i} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">{madrasa.name}</h4>
                <p className="text-sm text-slate-500 mt-1">{madrasa.type}</p>
                {madrasa.description && (
                  <p className="text-xs text-slate-400 mt-2">{madrasa.description}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Religious Institutions */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={institutionsData.religiousInstitutions.title}
            subtitle={`মোট ${institutionsData.religiousInstitutions.totalCount}টি আনুষ্ঠানিকভাবে স্বীকৃত ধর্মীয় প্রতিষ্ঠান`}
          />

          {/* Mosques */}
          <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600" />
            মসজিদ সমূহ
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {institutionsData.religiousInstitutions.mosques.map((mosque, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">{mosque.name}</p>
              </div>
            ))}
          </div>

          {/* Crematoriums & Graveyards */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-600" />
                শ্মশানঘাট সমূহ
              </h3>
              <div className="space-y-3">
                {institutionsData.religiousInstitutions.crematoriums.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-slate-100"
                  >
                    <p className="text-sm font-medium text-slate-700">{item.name}</p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-4">কবরস্থান সমূহ</h3>
              <div className="space-y-3">
                {institutionsData.religiousInstitutions.graveyards.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-slate-100"
                  >
                    <p className="text-sm font-medium text-slate-700">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diversity note */}
          <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>বহুমাত্রিক সম্প্রীতি:</strong>{" "}
              {institutionsData.religiousInstitutions.description}
            </p>
          </div>
        </div>
      </section>

      {/* Health Institutions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={institutionsData.healthInstitutions.title}
            subtitle={institutionsData.healthInstitutions.description}
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Facilities */}
            <div className="space-y-4">
              {institutionsData.healthInstitutions.facilities.map((facility, i) => {
                const icons = [Hospital, HeartPulse];
                const Icon = icons[i] || Hospital;
                const gradients = ["from-red-500 to-rose-600", "from-pink-500 to-fuchsia-600"];
                return (
                  <Card key={i} className="p-6" hover={false}>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">{facility.name}</h4>
                        <p className="text-sm text-slate-500 mt-0.5">{facility.type}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Programs */}
            <Card className="p-6 lg:p-8" hover={false}>
              <h3 className="text-lg font-bold text-slate-800 mb-5">
                স্বাস্থ্য কর্মসূচি সমূহ
              </h3>
              <ul className="space-y-3">
                {institutionsData.healthInstitutions.programs.map((program, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-6 h-6 rounded-md bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                    {program}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
