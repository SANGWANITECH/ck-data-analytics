import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Preloader } from "@/components/site/preloader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ckdatamw.org"),

  title: {
    default: "CK Data & Analytics : Evidence for Progress",
    template: "%s : CK Data & Analytics",
  },

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

  authors: [{ name: "CK Data & Analytics" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  // Website favicon / browser tab icon
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "CK Data & Analytics : Evidence for Progress",
    description:
      "Professional research and data solutions for government, NGOs, and private sector in Malawi.",
    url: "https://ckdatamw.org",
    siteName: "CK Data & Analytics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CK Data & Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CK Data & Analytics : Evidence for Progress",
    description:
      "Professional research, data collection, and analytics solutions for organizations driving development in Malawi.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CK Data & Analytics",
  url: "https://ckdatamw.org",

  // Actual company logo
  logo: "https://ckdatamw.org/logo.png",

  description:
    "Professional research, data collection, and analytics solutions for organizations driving development in Malawi.",

  email: "ckdataanalytics@gmail.com",
  telephone: "+265991127401",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Blantyre",
    addressCountry: "MW",
  },

  sameAs: ["https://linkedin.com/company/ckdataanalytics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>

      <body className="font-sans antialiased bg-paper text-charcoal">
        <Preloader />

        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* Chatbase Widget */}
        <Script
          id="chatbase-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }

                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="nt21F7BuvHma3wYSibllA";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };

                if(document.readyState==="complete"){
                  onLoad()
                } else {
                  window.addEventListener("load",onLoad)
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}