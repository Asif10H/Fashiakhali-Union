"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50/50">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center">
            <SearchX className="w-12 h-12 text-emerald-600" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-7xl font-bold text-slate-200 font-[family-name:var(--font-display)]">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-[family-name:var(--font-display)]">
            পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
          </h2>
          <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ আছে।
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            পেছনে যান
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-600/25"
          >
            <Home className="w-5 h-5" />
            হোম পেজে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
