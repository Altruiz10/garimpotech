import type {Metadata} from "next";import "./globals.css";import {Header} from "@/components/header";import {Footer} from "@/components/footer";
export const metadata:Metadata={title:{default:"Garimpo Tech | Tecnologia bem escolhida",template:"%s | Garimpo Tech"},description:"Guias e comparativos de tecnologia para ajudar você a escolher melhor.",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Header/><main id="conteudo">{children}</main><Footer/></body></html>}
