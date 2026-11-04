import Link from "next/link";
import {ArrowRight,ShieldCheck,Scale,BookOpen} from "lucide-react";
import {Hero} from "@/components/hero";
import {CategoryCard,GuideCard,ProductCard} from "@/components/cards";
import {categories,guides,products} from "@/data/content";

function SectionHeading({title,href,label}:{title:string;href:string;label:string}){
  return <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
    <h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2>
    <Link href={href} className="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-gold-ink hover:underline">{label}<ArrowRight size={16}/></Link>
  </div>
}

export default function Home(){
  return <>
    <Hero/>
    <div className="container-site">
      <section className="py-14">
        <SectionHeading title="Explore por categoria" href="/categorias" label="Todas as categorias"/>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{categories.map(c=><CategoryCard key={c.slug} item={c}/>)}</div>
      </section>
      <section className="py-8">
        <SectionHeading title="Guias para comprar melhor" href="/melhores" label="Ver todos os guias"/>
        <div className="grid gap-5 md:grid-cols-3">{guides.map(g=><GuideCard key={g.slug} item={g}/>)}</div>
      </section>
      <section className="py-14">
        <SectionHeading title="Produtos para explorar" href="/ofertas" label="Explorar produtos"/>
        <p className="-mt-4 mb-6 text-sm text-muted">Seleção demonstrativa. Ofertas e links comerciais serão adicionados após verificação.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map(p=><ProductCard key={p.slug} item={p}/>)}</div>
      </section>
      <section className="on-dark mb-8 grid gap-6 rounded-3xl bg-night p-7 text-white md:grid-cols-[auto_1fr] md:items-center md:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-ink"><Scale size={32} aria-hidden/></div>
        <div>
          <h2 className="text-2xl font-extrabold">Como escolhemos o que recomendar?</h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-300">Consideramos especificações técnicas, adequação ao uso, limitações e custo-benefício. Não afirmamos ter testado produtos sem testes reais.</p>
          <Link href="/metodologia" className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-gold hover:underline">Conheça nossa metodologia <BookOpen size={17}/></Link>
        </div>
      </section>
      <div className="mb-10 flex items-center gap-2 text-sm text-muted"><ShieldCheck size={18} aria-hidden/> Conteúdo informativo e transparência sobre links comerciais.</div>
    </div>
  </>
}
