import Link from "next/link";
import {ArrowRight,ShieldCheck,Scale,BookOpen,Search} from "lucide-react";
import {Hero} from "@/components/hero";
import {CategoryCard,GuideCard,ProductCard} from "@/components/cards";
import {categories,guides,products} from "@/data/content";

function SectionHeading({title,href,label}:{title:string;href:string;label:string}){
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
    <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
    <Link href={href} className="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-gold-ink hover:underline">{label}<ArrowRight size={16} aria-hidden/></Link>
  </div>
}

export default function Home(){
  return <>
    <Hero/>
    <div className="container-site">
      <section className="grid gap-10 py-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Procurando outra coisa?</h2>
          <p className="mt-3 max-w-md leading-7 text-muted">Busque por produto ou assunto, ou escolha uma categoria ao lado.</p>
          <form action="/buscar" className="mt-6 flex max-w-md items-center gap-2 rounded-lg border border-line bg-surface p-1.5 focus-within:border-ink">
            <Search className="ml-3 shrink-0 text-muted" size={20} aria-hidden/>
            <input aria-label="Pesquisar no Garimpo Tech" name="q" className="min-h-11 min-w-0 flex-1 bg-transparent px-1 text-base outline-none" placeholder="Fones, notebooks, monitores"/>
            <button type="submit" className="min-h-11 rounded-md bg-gold px-5 text-sm font-bold text-on-gold hover:bg-gold-hover">Buscar</button>
          </form>
        </div>
        <ul className="grid list-none gap-x-10 border-b border-line sm:grid-cols-2">{categories.map(c=><CategoryCard key={c.slug} item={c}/>)}</ul>
      </section>
      <section className="py-10">
        <SectionHeading title="Guias para comprar melhor" href="/melhores" label="Ver todos os guias"/>
        <div className="grid gap-10 md:grid-cols-3">{guides.map(g=><GuideCard key={g.slug} item={g}/>)}</div>
      </section>
      <section className="py-16">
        <SectionHeading title="Produtos para explorar" href="/ofertas" label="Explorar produtos"/>
        <p className="-mt-4 mb-8 text-sm text-muted">Seleção demonstrativa. Ofertas e links comerciais serão adicionados após verificação.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map(p=><ProductCard key={p.slug} item={p}/>)}</div>
      </section>
      <section className="on-dark mb-8 grid gap-6 rounded-xl bg-night p-7 text-white md:grid-cols-[auto_1fr] md:items-center md:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gold text-on-gold"><Scale size={32} aria-hidden/></div>
        <div>
          <h2 className="text-2xl font-extrabold">Como escolhemos o que recomendar?</h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-300">Consideramos especificações técnicas, adequação ao uso, limitações e custo-benefício. Não afirmamos ter testado produtos sem testes reais.</p>
          <Link href="/metodologia" className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-gold hover:underline">Conheça nossa metodologia <BookOpen size={17} aria-hidden/></Link>
        </div>
      </section>
      <div className="mb-10 flex items-center gap-2 text-sm text-muted"><ShieldCheck size={18} aria-hidden/> Conteúdo informativo e transparência sobre links comerciais.</div>
    </div>
  </>
}
