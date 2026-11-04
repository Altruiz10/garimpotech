import Link from "next/link";
import type {Category,Guide,Product} from "@/data/content";
import {ArrowUpRight,BookOpen,Cpu,Headphones,Keyboard,Laptop,Monitor,Smartphone,type LucideIcon} from "lucide-react";

const icons:Record<string,LucideIcon>={celulares:Smartphone,notebooks:Laptop,audio:Headphones,monitores:Monitor,perifericos:Keyboard,hardware:Cpu};

export function iconFor(key:string):LucideIcon{
  const k=key.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  return icons[k]??Cpu;
}

export function CategoryCard({item}:{item:Category}){
  const Icon=iconFor(item.slug);
  return <Link className="card hover-lift flex flex-col items-center gap-3 px-3 py-7 text-center" href={`/categorias/${item.slug}`}>
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-soft text-gold-ink"><Icon size={28} aria-hidden/></span>
    <span className="font-bold">{item.name}</span>
  </Link>
}

export function GuideCard({item}:{item:Guide}){
  const Icon=iconFor(item.category);
  return <Link className="card hover-lift group block" href={`/guias/${item.slug}`}>
    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-gold-soft to-paper"><span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-surface text-ink shadow-sm"><Icon size={40} aria-hidden/></span></div>
    <div className="p-6">
      <span className="text-xs font-bold uppercase tracking-wide text-gold-ink">{item.category} · Guia</span>
      <h3 className="mt-2 text-xl font-bold leading-snug">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
      <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-gold-ink group-hover:underline">Ler guia <ArrowUpRight size={16}/></span>
    </div>
  </Link>
}

export function ProductCard({item}:{item:Product}){
  const Icon=iconFor(item.category);
  return <article className="card flex flex-col">
    <div className="flex h-36 items-center justify-center bg-paper"><span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-surface text-ink shadow-sm"><Icon size={40} aria-hidden/></span></div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.description}</p>
      <Link href={`/produtos/${item.slug}`} className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-4 text-sm font-bold text-ink hover:bg-gold-hover"><BookOpen size={17}/> Ver orientações</Link>
    </div>
  </article>
}
