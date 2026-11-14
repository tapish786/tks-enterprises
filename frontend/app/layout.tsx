
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  title: {
    default: "TKS Enterprises | Web Development, SEO & Digital Solutions",
    template: "%s | TKS Enterprises",
  },

  description:
    "TKS Enterprises delivers professional web development, SEO, UI/UX design and digital solutions to help businesses grow online.",

  applicationName: "TKS Enterprises",

  keywords: [
    "TKS Enterprises",
    "Web Development",
    "SEO Services",
    "UI UX Design",
    "Digital Agency",
    "WordPress Development",
  ],

  authors: [{ name: "TKS Enterprises" }],
  creator: "TKS Enterprises",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "TKS Enterprises",
    title: "TKS Enterprises | Digital Solutions. Designed for Growth.",
    description:
      "Professional web development, SEO and digital solutions for growing businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "TKS Enterprises | Digital Solutions",
    description:
      "Web development, SEO and UI/UX solutions for your business.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
