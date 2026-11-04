import Link from "next/link";
import {CheckCircle2,Search,ShieldCheck} from "lucide-react";
import {categories} from "@/data/content";
import {iconFor} from "@/components/cards";

const criteria=["Especificações técnicas, sem achismo","Adequação ao seu uso do dia a dia","Limitações ditas com clareza","Custo-benefício, não só preço"];

export function Hero(){
  return <section className="border-b border-line bg-gradient-to-b from-gold-soft/60 to-paper">
    <div className="container-site grid gap-12 py-14 md:grid-cols-[1.25fr_.75fr] md:items-center md:py-24">
      <div>
        <p className="mb-5 text-sm font-bold uppercase tracking-widest text-gold-ink">Guias · Comparativos · Tecnologia</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">Escolha melhor.<br/><span className="underline decoration-gold decoration-8 underline-offset-[6px]">Compre com confiança.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Entenda as especificações, compare alternativas e encontre a tecnologia certa para o seu dia a dia.</p>
        <form action="/buscar" className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-line bg-surface p-2 shadow-sm focus-within:border-ink">
          <Search className="ml-3 shrink-0 text-muted" size={21} aria-hidden/>
          <input aria-label="Pesquisar no Garimpo Tech" name="q" className="min-h-12 min-w-0 flex-1 bg-transparent px-1 text-base outline-none" placeholder="Busque celulares, notebooks, fones..."/>
          <button type="submit" className="min-h-12 rounded-xl bg-gold px-6 text-sm font-bold text-ink hover:bg-gold-hover">Buscar</button>
        </form>
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map(c=>{const Icon=iconFor(c.slug);return <Link key={c.slug} href={`/categorias/${c.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold hover:border-ink"><Icon size={16} aria-hidden/>{c.name}</Link>})}
        </div>
      </div>
      <aside aria-labelledby="como-garimpamos" className="rounded-3xl border border-line bg-surface p-7 shadow-sm">
        <h2 id="como-garimpamos" className="text-xl font-extrabold">Como garimpamos</h2>
        <ul className="mt-5 space-y-4">
          {criteria.map(c=><li key={c} className="flex gap-3 text-sm font-medium leading-6"><CheckCircle2 className="mt-0.5 shrink-0 text-gold-ink" size={20} aria-hidden/>{c}</li>)}
        </ul>
        <Link href="/metodologia" className="mt-6 inline-flex min-h-11 items-center font-bold text-gold-ink hover:underline">Ver a metodologia completa →</Link>
        <p className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-xs text-muted"><ShieldCheck size={15} aria-hidden/> Sem preços fictícios. Sem links não verificados.</p>
      </aside>
    </div>
  </section>
}
