import Link from "next/link";
import {
  Users, UserCheck, Home, MapPin, Wheat, LayoutGrid, Vote,
  FileText, Receipt, Baby, ScrollText, GraduationCap, Globe,
  Phone, Info, ShieldAlert, Flame, Scale, Landmark,
  ArrowRight, TreePine, Waves, ChevronRight, HeartPulse,
  Shield,
} from "lucide-react";
import homeData from "@/data/home.json";
import { SectionHeading, StatBox } from "@/components/ui";

const iconMap = {
  Users, UserCheck, Home, MapPin, Wheat, LayoutGrid, Vote,
  FileText, Receipt, Baby, ScrollText, GraduationCap, Globe,
  Phone, Info, ShieldAlert, Flame, Scale, Landmark, HeartPulse,
  Shield,
};

export const metadata = {
  title: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ | চকরিয়া, কক্সবাজার",
  description: "ফাঁসিয়াখালী ইউনিয়ন পরিষদের অফিসিয়াল ওয়েবসাইট। ই-সেবা, প্রশাসনিক তথ্য, জনসংখ্যা পরিসংখ্যান।",
};

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative lg:min-h-[92vh] flex items-start lg:items-center hero-gradient overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-300/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">



              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-[family-name:var(--font-display)] leading-[1.15] tracking-tight">
                  ফাঁসিয়াখালী
                  <span className="block text-emerald-200">ইউনিয়ন পরিষদ</span>
                </h1>
                <p className="mt-2 text-lg sm:text-xl text-emerald-100/70 font-light">
                  চকরিয়া উপজেলা • কক্সবাজার জেলা • চট্টগ্রাম বিভাগ
                </p>
              </div>

              <p className="text-base sm:text-lg text-emerald-100/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {homeData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-[1.02]"
                >
                  ই-সেবা সমূহ
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  যোগাযোগ করুন
                </Link>
              </div>
            </div>

            {/* Right Side — Info Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: TreePine, label: "বন্যপ্রাণী অভয়ারণ্য", value: "ফাঁসিয়াখালী", color: "from-emerald-400/20 to-teal-400/20" },
                { icon: Users, label: "মোট জনসংখ্যা", value: "৪০,১৯৭", color: "from-blue-400/20 to-cyan-400/20" },
                { icon: Waves, label: "প্রধান নদী", value: "মাতামুহুরী", color: "from-cyan-400/20 to-sky-400/20" },
                { icon: Wheat, label: "কৃষি জমি", value: "৫,৪৩৪ একর", color: "from-amber-400/20 to-yellow-400/20" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`glass rounded-2xl p-5 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-sm text-emerald-200/60 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ==================== AT A GLANCE ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={homeData.atAGlance.title}
            subtitle="ফাঁসিয়াখালী ইউনিয়নের গুরুত্বপূর্ণ পরিসংখ্যান সমূহ"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {homeData.atAGlance.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <StatBox
                  key={index}
                  icon={Icon}
                  label={stat.label}
                  value={stat.value}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== E-SERVICES ==================== */}
      <section className="py-16 lg:py-24 bg-slate-50/80 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={homeData.quickLinks.title}
            subtitle="গুরুত্বপূর্ণ সরকারি সেবা সমূহে দ্রুত প্রবেশ করুন"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {homeData.quickLinks.links.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== EMERGENCY HOTLINES ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={homeData.emergencyHotlines.title}
            subtitle="জরুরি প্রয়োজনে এই নম্বরগুলোতে কল করুন"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
            {homeData.emergencyHotlines.hotlines.map((hotline, index) => {
              const Icon = iconMap[hotline.icon];
              return (
                <div
                  key={index}
                  className={`hotline-${hotline.color} rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && <Icon className="w-5 h-5 opacity-70" />}
                    <span className="text-2xl font-bold tracking-tight">{hotline.number}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">{hotline.label}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{hotline.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-16 lg:py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
            নাগরিক সেবায় আমরা প্রতিশ্রুতিবদ্ধ
          </h2>
          <p className="mt-4 text-emerald-100/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            ফাঁসিয়াখালী ইউনিয়ন পরিষদ স্থানীয় জনগোষ্ঠীর সেবায় ডিজিটাল সুশাসন
            এবং স্বচ্ছ প্রশাসন নিশ্চিত করতে কাজ করে যাচ্ছে।
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/administration"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-emerald-800 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl"
            >
              প্রশাসন দেখুন
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              আমাদের সম্পর্কে
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
