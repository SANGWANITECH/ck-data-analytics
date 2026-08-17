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
                if(document.readyState==="complete"){onLoad()}
                else{window.addEventListener("load",onLoad)}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}