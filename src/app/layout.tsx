import type {Metadata} from "next";
import {Inter,Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const bricolage=Bricolage_Grotesque({subsets:["latin"],variable:"--font-bricolage",display:"swap"});

export const metadata:Metadata={title:{default:"Garimpo Tech | Tecnologia bem escolhida",template:"%s | Garimpo Tech"},description:"Guias e comparativos de tecnologia para ajudar você a escolher melhor.",robots:{index:false,follow:false}};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR"><body className={`${inter.variable} ${bricolage.variable} font-sans`}><a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-3 focus:font-bold focus:text-ink">Pular para o conteúdo</a><Header/><main id="conteudo">{children}</main><Footer/></body></html>
}
