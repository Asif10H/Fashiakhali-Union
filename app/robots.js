export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://fashiakhali-union.vercel.app/sitemap.xml",
  };
}
