import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CK Data & Analytics — Evidence for Progress",
  description:
    "Professional research, data collection, and analytics solutions for organizations driving development in Malawi.",
  keywords: [
    "research",
    "data collection",
    "analytics",
    "Malawi",
    "surveys",
    "baseline studies",
    "data analysis",
  ],
  openGraph: {
    title: "CK Data & Analytics — Evidence for Progress",
    description:
      "Professional research and data solutions for government, NGOs, and private sector in Malawi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-paper text-charcoal">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}