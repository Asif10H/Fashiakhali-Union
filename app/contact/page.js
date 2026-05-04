import {
  Phone, Mail, MapPin, Clock, UserCog, Shield, Monitor,
  ShieldCheck, User, AlertCircle,
} from "lucide-react";
import contactData from "@/data/contact.json";
import { PageHeader, SectionHeading, Card } from "@/components/ui";

const iconMap = { UserCog, Shield, Monitor, ShieldCheck, User };

export const metadata = {
  title: "যোগাযোগ",
  description: "ফাঁসিয়াখালী ইউনিয়ন পরিষদের কর্মকর্তাদের যোগাযোগের তথ্য, অফিস সময় এবং জরুরি নম্বর।",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title={contactData.title}
        description="ইউনিয়ন পরিষদের কর্মকর্তা ও সেবা প্রদানকারীদের সাথে যোগাযোগ"
        breadcrumb="যোগাযোগ"
      />

      {/* Contact Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="কর্মকর্তাদের যোগাযোগ তথ্য"
            subtitle="ইউনিয়নের প্রধান কর্মকর্তা ও দায়িত্বশীলদের মোবাইল নম্বর"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {contactData.contacts.map((contact, i) => {
              const Icon = iconMap[contact.icon] || User;
              const colors = [
                "from-teal-500 to-cyan-600",
                "from-emerald-500 to-green-600",
                "from-blue-500 to-indigo-600",
                "from-indigo-500 to-violet-600",
                "from-slate-500 to-gray-600",
              ];
              return (
                <Card key={i} className="p-6 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${colors[i % colors.length]}`} />
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center shrink-0 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                        {contact.title}
                      </p>
                      <h3 className="text-base font-bold text-slate-800 mt-0.5">
                        {contact.name}
                      </h3>
                      <div className="mt-3 space-y-1.5">
                        <a
                          href={`tel:${contact.mobile}`}
                          className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-500" />
                          {contact.mobile}
                        </a>
                        {contact.email && (
                          <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="truncate">{contact.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office & Map */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Office Info */}
            <div>
              <SectionHeading
                title="অফিস তথ্য"
                centered={false}
              />

              <div className="space-y-5">
                <Card className="p-6" hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">ঠিকানা</h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {contactData.unionInfo.name}
                        <br />
                        {contactData.unionInfo.upazila}
                        <br />
                        {contactData.unionInfo.district}, {contactData.unionInfo.division}
                        <br />
                        {contactData.unionInfo.country}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6" hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">
                        {contactData.officeHours.title}
                      </h3>
                      <div className="mt-2 space-y-1 text-sm text-slate-600">
                        <p>
                          <strong>কার্যদিবস:</strong>{" "}
                          {contactData.officeHours.days}
                        </p>
                        <p>
                          <strong>সময়:</strong>{" "}
                          {contactData.officeHours.hours}
                        </p>
                        <p className="text-slate-400">
                          {contactData.officeHours.closed}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <SectionHeading
                title="মানচিত্র"
                centered={false}
              />
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-50 border border-emerald-200/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047857' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="text-center relative z-10">
                  <MapPin className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <p className="text-lg font-bold text-emerald-800 font-[family-name:var(--font-display)]">
                    ফাঁসিয়াখালী ইউনিয়ন
                  </p>
                  <p className="text-sm text-emerald-600 mt-1">
                    চকরিয়া, কক্সবাজার
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 lg:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="জরুরি যোগাযোগ নম্বর"
            subtitle="যেকোনো জরুরি পরিস্থিতিতে নিচের নম্বরগুলোতে কল করুন"
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {contactData.emergencyNumbers.map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300 hover:bg-white/15"
              >
                <p className="text-3xl font-bold text-white tracking-tight">
                  {item.number}
                </p>
                <p className="text-xs text-emerald-200/70 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 glass rounded-xl p-4 max-w-2xl mx-auto">
            <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              জরুরি পরিস্থিতিতে ৯৯৯ নম্বরে কল করলে পুলিশ, ফায়ার সার্ভিস বা
              অ্যাম্বুলেন্স সেবা পাওয়া যায়। এই সেবা সম্পূর্ণ বিনামূল্যে।
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
