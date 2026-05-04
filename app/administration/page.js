import { Phone, Mail, Shield, UserCog, Users, Scale, ShieldCheck, GraduationCap, MapPin, Gavel } from "lucide-react";
import adminData from "@/data/administration.json";
import { PageHeader, SectionHeading, Card } from "@/components/ui";

export const metadata = {
  title: "প্রশাসন ও পরিষদ",
  description: "ফাঁসিয়াখালী ইউনিয়ন পরিষদের চেয়ারম্যান, সচিব, ওয়ার্ড সদস্য, গ্রাম পুলিশ এবং গ্রাম আদালতের তথ্য।",
};

export default function AdministrationPage() {
  return (
    <>
      <PageHeader
        title={adminData.title}
        description="ইউনিয়ন পরিষদের নির্বাহী, আমলাতান্ত্রিক ও নির্বাচিত প্রতিনিধিদের তথ্য"
        breadcrumb="প্রশাসন ও পরিষদ"
      />

      {/* Key Officials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="প্রধান কর্মকর্তাবৃন্দ"
            subtitle="ইউনিয়নের নির্বাহী ও প্রশাসনিক নেতৃত্ব"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Administrator */}
            <Card className="p-6 lg:p-8 relative overflow-hidden" hover={false}>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-emerald-500 to-teal-600" />
              <div className="relative pt-12">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-emerald-500/10 flex items-center justify-center mx-auto -mt-6 border-4 border-white">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    {adminData.administrator.title}
                  </p>
                  <h3 className="text-xl font-bold text-slate-800 mt-1 font-[family-name:var(--font-display)]">
                    {adminData.administrator.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {adminData.administrator.designation}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <GraduationCap className="w-4 h-4 text-emerald-500" />
                      {adminData.administrator.education}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <Phone className="w-4 h-4 text-emerald-500" />
                      {adminData.administrator.mobile}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <Mail className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs">{adminData.administrator.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Chairman */}
            <Card className="p-6 lg:p-8 relative overflow-hidden" hover={false}>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-blue-500 to-indigo-600" />
              <div className="relative pt-12">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-blue-500/10 flex items-center justify-center mx-auto -mt-6 border-4 border-white">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {adminData.chairman.title}
                  </p>
                  <h3 className="text-xl font-bold text-slate-800 mt-1 font-[family-name:var(--font-display)]">
                    {adminData.chairman.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {adminData.chairman.designation}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <Phone className="w-4 h-4 text-blue-500" />
                      {adminData.chairman.mobile}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Secretary */}
            <Card className="p-6 lg:p-8 relative overflow-hidden" hover={false}>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-teal-500 to-cyan-600" />
              <div className="relative pt-12">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-teal-500/10 flex items-center justify-center mx-auto -mt-6 border-4 border-white">
                  <UserCog className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                    {adminData.secretary.title}
                  </p>
                  <h3 className="text-xl font-bold text-slate-800 mt-1 font-[family-name:var(--font-display)]">
                    {adminData.secretary.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {adminData.secretary.designation}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <Phone className="w-4 h-4 text-teal-500" />
                      {adminData.secretary.mobile}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {adminData.secretary.role}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Council Members */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={adminData.councilMembers.title}
            subtitle="নির্বাচিত ইউনিয়ন পরিষদ সদস্যদের তথ্য"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {adminData.councilMembers.members.map((member, index) => (
              <Card key={index} className="p-5 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold text-sm">
                    {member.ward.includes("নং") ? member.ward.split("নং")[1]?.trim()?.slice(0,2) || "UP" : "UP"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-800 text-base leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">
                      {member.designation}
                    </p>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {member.ward} — {member.address}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                        {member.education}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        {member.mobile}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gram Police - 9 Ward Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={adminData.gramPolice.title}
            subtitle={adminData.gramPolice.description}
          />

          {/* Responsibilities strip */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 -mt-6">
            {adminData.gramPolice.responsibilities.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-xs font-medium text-blue-700 border border-blue-100"
              >
                <ShieldCheck className="w-3 h-3" />
                {item}
              </span>
            ))}
          </div>

          {/* Ward Cards Grid */}
          {(() => {
            const wardColors = [
              { gradient: "from-emerald-500 to-teal-600", bar: "from-emerald-400 via-teal-500 to-emerald-600", shadow: "shadow-emerald-500/20 group-hover:shadow-emerald-500/30", text: "text-emerald-600", icon: "text-emerald-400", light: "text-emerald-100" },
              { gradient: "from-blue-500 to-indigo-600", bar: "from-blue-400 via-indigo-500 to-blue-600", shadow: "shadow-blue-500/20 group-hover:shadow-blue-500/30", text: "text-blue-600", icon: "text-blue-400", light: "text-blue-100" },
              { gradient: "from-violet-500 to-purple-600", bar: "from-violet-400 via-purple-500 to-violet-600", shadow: "shadow-violet-500/20 group-hover:shadow-violet-500/30", text: "text-violet-600", icon: "text-violet-400", light: "text-violet-100" },
              { gradient: "from-amber-500 to-orange-600", bar: "from-amber-400 via-orange-500 to-amber-600", shadow: "shadow-amber-500/20 group-hover:shadow-amber-500/30", text: "text-amber-600", icon: "text-amber-400", light: "text-amber-100" },
              { gradient: "from-rose-500 to-pink-600", bar: "from-rose-400 via-pink-500 to-rose-600", shadow: "shadow-rose-500/20 group-hover:shadow-rose-500/30", text: "text-rose-600", icon: "text-rose-400", light: "text-rose-100" },
              { gradient: "from-teal-500 to-cyan-600", bar: "from-teal-400 via-cyan-500 to-teal-600", shadow: "shadow-teal-500/20 group-hover:shadow-teal-500/30", text: "text-teal-600", icon: "text-teal-400", light: "text-teal-100" },
              { gradient: "from-indigo-500 to-blue-600", bar: "from-indigo-400 via-blue-500 to-indigo-600", shadow: "shadow-indigo-500/20 group-hover:shadow-indigo-500/30", text: "text-indigo-600", icon: "text-indigo-400", light: "text-indigo-100" },
              { gradient: "from-orange-500 to-red-600", bar: "from-orange-400 via-red-500 to-orange-600", shadow: "shadow-orange-500/20 group-hover:shadow-orange-500/30", text: "text-orange-600", icon: "text-orange-400", light: "text-orange-100" },
              { gradient: "from-cyan-500 to-sky-600", bar: "from-cyan-400 via-sky-500 to-cyan-600", shadow: "shadow-cyan-500/20 group-hover:shadow-cyan-500/30", text: "text-cyan-600", icon: "text-cyan-400", light: "text-cyan-100" },
            ];
            return (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {adminData.gramPolice.wardPolice.map((officer, index) => {
                  const c = wardColors[index % wardColors.length];
                  return (
                    <Card key={index} className="relative overflow-hidden group">
                      {/* Top accent bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${c.bar}`} />

                      <div className="p-5 lg:p-6">
                        <div className="flex items-start gap-4">
                          {/* Ward number badge */}
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex flex-col items-center justify-center shrink-0 shadow-lg ${c.shadow} transition-shadow duration-300`}>
                            <span className={`text-[10px] ${c.light} font-medium leading-none`}>ওয়ার্ড</span>
                            <span className="text-xl font-bold text-white leading-none mt-0.5">
                              {officer.ward}
                            </span>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-slate-800 text-base leading-snug font-[family-name:var(--font-display)]">
                              {officer.name}
                            </h3>
                            <p className={`text-xs font-semibold ${c.text} mt-0.5`}>
                              {officer.designation}
                            </p>

                            <div className="mt-3 space-y-1.5">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Phone className={`w-3.5 h-3.5 ${c.icon}`} />
                                <a href={`tel:${officer.mobile}`} className={`hover:${c.text} transition-colors`}>
                                  {officer.mobile}
                                </a>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <MapPin className={`w-3.5 h-3.5 ${c.icon}`} />
                                {officer.area}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Village Court */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={adminData.villageCourt.title}
            subtitle={adminData.villageCourt.description}
          />

          <div className="max-w-3xl mx-auto">
            <Card className="p-6 lg:p-8" hover={false}>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <Gavel className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">
                    গ্রাম আদালত
                  </h3>
                  <p className="text-sm text-slate-500">
                    আধা-বিচারিক ফোরাম
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {adminData.villageCourt.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    {item}
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
