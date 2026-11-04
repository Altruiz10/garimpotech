"use client";
import {useState} from "react";
import Link from "next/link";
import {Menu,Search,X} from "lucide-react";
import {Brand} from "./brand";
const links=[{href:"/categorias",label:"Categorias"},{href:"/melhores",label:"Guias"},{href:"/ofertas",label:"Ofertas"}];
export function Header(){const [open,setOpen]=useState(false);return <header className="border-b border-white/10 bg-[#0b1220] text-white"><div className="container-site flex h-20 items-center justify-between gap-5"><Brand light/><nav aria-label="Menu principal" className="hidden items-center gap-8 md:flex">{links.map(l=><Link className="text-sm text-slate-300 hover:text-white" key={l.href} href={l.href}>{l.label}</Link>)}</nav><div className="flex items-center gap-3"><Link href="/buscar" aria-label="Buscar" className="rounded-lg p-2 hover:bg-white/10"><Search size={21}/></Link><button className="rounded-lg p-2 hover:bg-white/10 md:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></div>{open&&<nav aria-label="Menu móvel" className="container-site flex flex-col gap-4 pb-5 md:hidden">{links.map(l=><Link onClick={()=>setOpen(false)} key={l.href} href={l.href}>{l.label}</Link>)}</nav>}</header>}
