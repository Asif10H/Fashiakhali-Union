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

import Hero from "@/components/Hero";

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
      <Hero />

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
