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
  return <li className="border-t border-line">
    <Link className="group flex min-h-20 items-center gap-4 py-4" href={`/categorias/${item.slug}`}>
      <Icon size={26} className="shrink-0 text-gold-ink" aria-hidden/>
      <span className="min-w-0 flex-1"><span className="block text-lg font-extrabold group-hover:underline">{item.name}</span><span className="block text-sm text-muted">{item.description}</span></span>
      <ArrowUpRight size={18} className="shrink-0 text-muted" aria-hidden/>
    </Link>
  </li>
}

export function GuideCard({item}:{item:Guide}){
  return <Link className="group block border-t-2 border-ink pt-5" href={`/guias/${item.slug}`}>
    <span className="text-sm font-semibold text-gold-ink">{item.category}</span>
    <h3 className="mt-2 text-2xl font-extrabold leading-tight group-hover:underline">{item.title}</h3>
    <p className="mt-3 leading-7 text-muted">{item.summary}</p>
    <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-gold-ink">Ler guia <ArrowUpRight size={16} aria-hidden/></span>
  </Link>
}

export function ProductCard({item}:{item:Product}){
  const Icon=iconFor(item.category);
  return <article className="card flex flex-col p-6">
    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold-soft text-gold-ink"><Icon size={22} aria-hidden/></span>
    <h3 className="mt-5 text-xl font-extrabold">{item.name}</h3>
    <p className="mt-2 flex-1 leading-7 text-muted">{item.description}</p>
    <Link href={`/produtos/${item.slug}`} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-4 text-sm font-bold text-ink hover:bg-gold-hover"><BookOpen size={17} aria-hidden/> Ver orientações</Link>
  </article>
}
