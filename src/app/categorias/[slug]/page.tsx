import {notFound} from "next/navigation";
import Link from "next/link";
import type {Metadata} from "next";
import {categories,products,topPhonesUpdatedAt} from "@/data/content";
import {noIndex,rankingFor} from "@/lib/site";
import {ProductCard,iconFor} from "@/components/cards";
import {TopPhoneBoard} from "@/components/top-phones";

export function generateStaticParams(){return categories.map(c=>({slug:c.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const cat=categories.find(c=>c.slug===slug);
  if(!cat)return {};
  const ranked=rankingFor(slug).length>0;
  return {
    title:ranked?`${cat.name} mais vendidos no Mercado Livre`:cat.name,
    description:ranked?`Ranking dos ${cat.name.toLowerCase()} mais vendidos no Mercado Livre, atualizado em ${topPhonesUpdatedAt}.`:cat.description,
    alternates:{canonical:`/categorias/${slug}`},
    ...(ranked?{}:{robots:noIndex}),
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const cat=categories.find(c=>c.slug===slug);
  if(!cat)notFound();
  const items=products.filter(p=>p.category===slug);
  const phones=rankingFor(slug);
  const Icon=iconFor(slug);
  return <div className="container-site py-14">
    <Link href="/categorias" className="inline-flex min-h-11 items-center text-sm font-semibold text-gold-ink hover:underline">← Categorias</Link>
    <h1 className="mt-3 flex items-center gap-4 text-4xl font-extrabold md:text-5xl"><span className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold-soft text-gold-ink"><Icon size={28} aria-hidden/></span>{cat.name}</h1>
    <p className="mt-3 max-w-xl text-lg text-muted">{cat.description}</p>
    {phones.length>0&&<section aria-labelledby="ranking-celulares" className="mt-12">
      <h2 id="ranking-celulares" className="text-2xl font-extrabold md:text-3xl">Os 5 celulares mais vendidos no Mercado Livre</h2>
      <p className="mt-2 max-w-xl text-muted">Ranking atualizado em {topPhonesUpdatedAt}. Preço e estoque mudam: vale o valor que aparece no anúncio.</p>
      <TopPhoneBoard phones={phones}/>
      <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">Os botões são links de afiliado: se você comprar por eles, o Garimpo Tech pode receber uma comissão, sem custo extra para você. <Link href="/transparencia" className="font-bold text-gold-ink underline">Saiba mais</Link>.</p>
    </section>}
    {items.length>0&&<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(p=><ProductCard key={p.slug} item={p}/>)}</div>}
    {items.length===0&&phones.length===0&&<p className="mt-8 rounded-xl bg-surface p-6 text-muted">Novos conteúdos desta categoria serão publicados em breve.</p>}
  </div>
}
