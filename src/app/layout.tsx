import type {Metadata,Viewport} from "next";
import {Public_Sans,Archivo} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {InstallPrompt} from "@/components/install-prompt";

const publicSans=Public_Sans({subsets:["latin"],variable:"--font-public",display:"swap"});
const archivo=Archivo({subsets:["latin"],weight:["700","800","900"],variable:"--font-archivo",display:"swap"});

export const metadata:Metadata={title:{default:"Garimpo Tech | Tecnologia bem escolhida",template:"%s | Garimpo Tech"},description:"Guias e comparativos de tecnologia para ajudar você a escolher melhor.",robots:{index:false,follow:false},icons:{apple:"/apple-touch-icon.png"},appleWebApp:{capable:true,title:"Garimpo Tech",statusBarStyle:"default"}};

export const viewport:Viewport={themeColor:[{media:"(prefers-color-scheme: light)",color:"#eef1ee"},{media:"(prefers-color-scheme: dark)",color:"#0a1a16"}]};

const themeScript=`(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body className={`${publicSans.variable} ${archivo.variable} font-sans`}><a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-3 focus:font-bold focus:text-on-gold">Pular para o conteúdo</a><Header/><main id="conteudo">{children}</main><Footer/><InstallPrompt/></body></html>
}
