import { Noto_Sans_Bengali, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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

const siteUrl = "https://fashiakhaliunion.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ | চকরিয়া, কক্সবাজার",
    template: "%s | ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
  },
  description:
    "চকরিয়া উপজেলা, কক্সবাজার জেলার অন্তর্গত ফাঁসিয়াখালী ইউনিয়ন পরিষদের অফিসিয়াল ওয়েবসাইট। ই-সেবা, প্রশাসন, জনসংখ্যা তথ্য এবং উন্নয়ন প্রকল্প সম্পর্কিত তথ্য।",
  keywords: [
    "ফাঁসিয়াখালী",
    "ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
    "ইউনিয়ন পরিষদ",
    "চকরিয়া",
    "কক্সবাজার",
    "স্থানীয় সরকার",
    "বাংলাদেশ",
    "ই-সেবা",
    "গ্রাম পুলিশ",
    "ইউনিয়ন ডিজিটাল সেন্টার",
    "ফাঁসিয়াখালী বন্যপ্রাণী অভয়ারণ্য",
    "Fashiakhali Union Parishad",
    "Chakaria",
    "Cox's Bazar",
  ],
  authors: [{ name: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ" }],
  creator: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
  publisher: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: siteUrl,
    siteName: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
    title: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ | চকরিয়া, কক্সবাজার",
    description:
      "চকরিয়া উপজেলা, কক্সবাজার জেলার অন্তর্গত ফাঁসিয়াখালী ইউনিয়ন পরিষদের অফিসিয়াল ওয়েবসাইট। ই-সেবা, প্রশাসন, জনসংখ্যা তথ্য।",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ | চকরিয়া, কক্সবাজার",
    description:
      "চকরিয়া উপজেলা, কক্সবাজার জেলার অন্তর্গত ফাঁসিয়াখালী ইউনিয়ন পরিষদের অফিসিয়াল ওয়েবসাইট।",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
  category: "government",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "ফাঁসিয়াখালী ইউনিয়ন পরিষদ",
  alternateName: "Fashiakhali Union Parishad",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "চকরিয়া উপজেলা, কক্সবাজার জেলার অন্তর্গত ফাঁসিয়াখালী ইউনিয়ন পরিষদের অফিসিয়াল ওয়েবসাইট।",
  address: {
    "@type": "PostalAddress",
    addressLocality: "ফাঁসিয়াখালী",
    addressRegion: "চট্টগ্রাম বিভাগ",
    addressCountry: "BD",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "ফাঁসিয়াখালী ইউনিয়ন, চকরিয়া উপজেলা, কক্সবাজার জেলা",
  },
  parentOrganization: {
    "@type": "GovernmentOrganization",
    name: "স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} ${tiroBangla.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-bengali)] antialiased bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
