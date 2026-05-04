import {
  Monitor, Wheat, Building2, Banknote, Home, HeartHandshake,
  Pickaxe, Phone, CheckCircle, ArrowRight, Landmark, Shield,
  FileText, Users
} from "lucide-react";
import servicesData from "@/data/services.json";
import { PageHeader, SectionHeading, Card } from "@/components/ui";

const iconMap = {
  Building2, Wheat, Pickaxe, Banknote, Home, HeartHandshake,
  Monitor, Phone, Shield, FileText, Users, Landmark,
};

export const metadata = {
  title: "ই-সেবা ও উন্নয়ন",
  description: "ইউনিয়ন ডিজিটাল সেন্টার, কৃষি সহায়তা, ভূমি সেবা এবং উন্নয়ন প্রকল্প সম্পর্কিত তথ্য।",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title={servicesData.title}
        description="ডিজিটাল সেবা, কৃষি সহায়তা, উন্নয়ন প্রকল্প এবং সামাজিক নিরাপত্তা বেষ্টনী"
        breadcrumb="ই-সেবা ও উন্নয়ন"
      />

      {/* UDC Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={servicesData.udc.title}
            subtitle="রাষ্ট্রের সেবাকে সরাসরি গ্রামীণ জনগোষ্ঠীর কাছে নিয়ে আসা"
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* UDC Info */}
            <div className="lg:col-span-2">
              <Card className="p-6 lg:p-8 h-full" hover={false}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {servicesData.udc.description}
                </p>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-2">
                    ইউডিসি উদ্যোক্তা
                  </p>
                  <p className="text-base font-bold text-emerald-800">
                    {servicesData.udc.entrepreneur.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-emerald-700">
                    <Phone className="w-3.5 h-3.5" />
                    {servicesData.udc.entrepreneur.mobile}
                  </div>
                </div>
              </Card>
            </div>

            {/* UDC Services Grid */}
            <div className="lg:col-span-3">
              <Card className="p-6 lg:p-8 h-full" hover={false}>
                <h3 className="text-lg font-bold text-slate-800 mb-5">
                  ইউডিসি প্রদত্ত সেবাসমূহ
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {servicesData.udc.services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all duration-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Projects */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={servicesData.developmentProjects.title}
            subtitle="গ্রামীণ অবকাঠামো ও দারিদ্র্য বিমোচনের সরকারি কর্মসূচি"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {servicesData.developmentProjects.projects.map((project, i) => {
              const Icon = iconMap[project.icon] || Building2;
              const gradients = [
                "from-emerald-500 to-teal-600",
                "from-amber-500 to-orange-600",
                "from-blue-500 to-indigo-600",
                "from-rose-500 to-pink-600",
                "from-cyan-500 to-blue-600",
                "from-purple-500 to-violet-600",
              ];
              return (
                <Card key={i} className="p-6 group">
                  <div className={`w-13 h-13 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ width: "3.25rem", height: "3.25rem" }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agriculture & Land */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Agriculture */}
            <div>
              <SectionHeading
                title={servicesData.agriculture.title}
                centered={false}
              />
              <Card className="p-6 lg:p-8" hover={false}>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {servicesData.agriculture.description}
                </p>
                <ul className="space-y-3">
                  {servicesData.agriculture.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Land Services */}
            <div>
              <SectionHeading
                title={servicesData.landServices.title}
                centered={false}
              />
              <Card className="p-6 lg:p-8" hover={false}>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {servicesData.landServices.description}
                </p>
                <ul className="space-y-3">
                  {servicesData.landServices.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Landmark className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      {service}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Safety Net */}
      <section className="py-16 lg:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={servicesData.socialSafetyNet.title}
            subtitle="হতদরিদ্র ও সুবিধাবঞ্চিত জনগোষ্ঠীর জন্য সরকারি সহায়তা"
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {servicesData.socialSafetyNet.beneficiaries.map((item, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <HeartHandshake className="w-6 h-6 text-emerald-300 mx-auto mb-2" />
                <p className="text-sm text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
