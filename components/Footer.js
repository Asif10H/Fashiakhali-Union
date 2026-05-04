import Link from "next/link";
import {
  Landmark,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Heart,
} from "lucide-react";

const footerLinks = [
  {
    title: "দ্রুত লিংক",
    links: [
      { href: "/about", label: "ইউনিয়ন সম্পর্কে" },
      { href: "/administration", label: "প্রশাসন" },
      { href: "/demographics", label: "জনসংখ্যা ও ওয়ার্ড" },
      { href: "/services", label: "ই-সেবা ও উন্নয়ন" },
    ],
  },
  {
    title: "গুরুত্বপূর্ণ লিংক",
    links: [
      { href: "https://bangladesh.gov.bd", label: "জাতীয় তথ্য বাতায়ন", external: true },
      { href: "https://land.gov.bd", label: "ভূমি মন্ত্রণালয়", external: true },
      { href: "https://bdris.gov.bd", label: "জন্ম-মৃত্যু নিবন্ধন", external: true },
      { href: "https://coxsbazar.gov.bd", label: "কক্সবাজার জেলা", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-14 lg:py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)]">
                  ফাঁসিয়াখালী ইউনিয়ন
                </h3>
                <p className="text-xs text-emerald-300/80">পরিষদ কার্যালয়</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              চকরিয়া উপজেলা, কক্সবাজার জেলা, চট্টগ্রাম বিভাগ। স্থানীয় সরকারের
              সর্বনিম্ন স্তর হিসেবে নাগরিক সেবা প্রদান।
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>01866913166</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>aclandchakaria@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>চকরিয়া, কক্সবাজার</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-1.5"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Emergency Column */}
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-5">
              জরুরি সেবা
            </h4>
            <div className="space-y-3">
              {[
                { number: "৯৯৯", label: "জরুরি সেবা" },
                { number: "৩৩৩", label: "তথ্য বাতায়ন" },
                { number: "১০৯", label: "নারী ও শিশু" },
                { number: "১৬১২২", label: "ভূমি সেবা" },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-center gap-3 group"
                >
                  <span className="inline-flex items-center justify-center min-w-[3.2rem] px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold">
                    {item.number}
                  </span>
                  <span className="text-sm text-slate-400 group-hover:text-emerald-300 transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ফাঁসিয়াখালী ইউনিয়ন পরিষদ। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
            <Heart className="w-3 h-3 text-emerald-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
