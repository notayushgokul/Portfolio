import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// TODO: Replace with localFont once you upload the Suisse Intl .woff2 files to /public/fonts/
// import localFont from "next/font/local";
// const suisseIntl = localFont({
//   src: [
//     { path: "../public/fonts/SuisseIntl-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../public/fonts/SuisseIntl-Medium.woff2", weight: "500", style: "normal" },
//     { path: "../public/fonts/SuisseIntl-SemiBold.woff2", weight: "600", style: "normal" },
//   ],
//   variable: "--font-suisse-intl",
//   display: "swap",
// });
// const suisseMono = localFont({
//   src: "../public/fonts/SuisseIntlMono-Regular.woff2",
//   weight: "400",
//   style: "normal",
//   variable: "--font-suisse-mono",
//   display: "swap",
// });

// Using Google Fonts as placeholders mapped to the same CSS variables
const inter = Inter({ subsets: ["latin"], variable: "--font-suisse-intl", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-suisse-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Ayush Gokul — Landing Pages for Bootstrapped SaaS Founders",
  description: "I build fast, focused landing pages and portfolio sites for SaaS founders. Free mockup in 24 hours. Starting at ₹12,000.",
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans min-h-screen bg-bg text-text-primary selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
