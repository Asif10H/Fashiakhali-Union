import { Noto_Sans_Bengali, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-display",
  subsets: ["bengali"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ | চকরিয়া, কক্সবাজার",
    template: "%s | ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
  },
  description:
    "চকরিয়া উপজেলা, কক্সবাজার জেলার অন্তর্গত ফাঁসিয়াখালী ইউনিয়ন পরিষদের অফিসিয়াল ওয়েবসাইট। ই-সেবা, প্রশাসন, জনসংখ্যা তথ্য এবং উন্নয়ন প্রকল্প সম্পর্কিত তথ্য।",
  keywords: [
    "ফাঁসিয়াখালী",
    "ইউনিয়ন পরিষদ",
    "চকরিয়া",
    "কক্সবাজার",
    "স্থানীয় সরকার",
    "বাংলাদেশ",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${tiroBangla.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-bengali)] antialiased bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
