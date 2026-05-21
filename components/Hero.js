"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users, MapPin, Wheat, Waves, TreePine, Eye, ArrowRight
} from "lucide-react";
import homeData from "@/data/home.json";

export default function Hero() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const namespace = "fashiakhali-union-views";
    const key = "page-views";
    const url = `https://api.counterapi.dev/v1/${namespace}/${key}/up`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const currentViews = data.count !== undefined ? data.count : data.value;
        if (currentViews !== undefined) {
          setViews(currentViews);
        }
      })
      .catch((err) => console.error("Error fetching view count:", err));
  }, []);

  return (
    <section className="relative lg:min-h-[92vh] flex items-start lg:items-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-300/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:py-20 w-full z-10">
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

          {/* Right Side — Info Cards & Live Visitor Count */}
          <div className="flex flex-col gap-6 mt-12 lg:mt-0 w-full max-w-md sm:max-w-xl lg:max-w-none mx-auto">
            <div className="grid grid-cols-2 gap-4">
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

            {/* Live Visitor Count Row */}
            <div className="glass rounded-2xl p-4 flex items-center justify-between border border-white/10 hover:bg-white/12 transition-all duration-300 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-emerald-300" />
                </div>
                <span className="text-sm font-semibold text-emerald-100/80">মোট ভিজিটর (লাইভ)</span>
              </div>
              <span className="text-xl font-bold text-emerald-300 bg-emerald-500/10 px-4 py-1.5 rounded-xl border border-emerald-500/20 min-w-[70px] flex justify-center items-center">
                {views !== null ? (
                  views.toLocaleString()
                ) : (
                  <span className="inline-block w-4 h-4 border-2 border-emerald-300 border-t-transparent rounded-full animate-spin" />
                )}
              </span>
            </div>
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
  );
}
