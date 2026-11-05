"use client";
import {useState} from "react";
import Link from "next/link";
import {Menu,Search,X} from "lucide-react";
import {Brand} from "./brand";

const links=[{href:"/",label:"Início"},{href:"/categorias",label:"Categorias"},{href:"/melhores",label:"Guias"},{href:"/ofertas",label:"Produtos"}];

export function Header(){
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
    <div className="container-site flex h-20 items-center justify-between gap-5">
      <Brand/>
      <nav aria-label="Menu principal" className="hidden items-center gap-2 md:flex">
        {links.map(l=><Link className="flex min-h-11 items-center rounded-lg px-4 text-sm font-semibold text-ink hover:bg-ink/5" key={l.href} href={l.href}>{l.label}</Link>)}
      </nav>
      <div className="flex items-center gap-1">
        <Link href="/buscar" aria-label="Buscar" className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-ink/5"><Search size={21}/></Link>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-ink/5 md:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
      </div>
    </div>
    {open&&<nav aria-label="Menu móvel" className="container-site flex flex-col pb-4 md:hidden">
      {links.map(l=><Link onClick={()=>setOpen(false)} key={l.href} href={l.href} className="flex min-h-12 items-center border-t border-line font-semibold">{l.label}</Link>)}
    </nav>}
  </header>
}
