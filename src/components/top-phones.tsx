/* eslint-disable @next/next/no-img-element */
import {ArrowUpRight} from "lucide-react";
import type {TopPhone} from "@/data/content";

const affiliateRel="sponsored nofollow noopener noreferrer";

function Cta({item,className=""}:{item:TopPhone;className?:string}){
  return <a href={item.href} target="_blank" rel={affiliateRel} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 text-sm font-bold text-on-gold hover:bg-gold-hover ${className}`}>Ver oferta no Mercado Livre <ArrowUpRight size={16} aria-hidden/></a>
}

function Price({item,dark=false,big=false}:{item:TopPhone;dark?:boolean;big?:boolean}){
  const soft=dark?"text-slate-300":"text-muted";
  return <div>
    <span className={`tabular block min-h-5 text-sm line-through ${soft}`}>{item.oldPrice}</span>
    <span className={`tabular block font-display font-black leading-none ${big?"text-5xl":"text-3xl"}`}>{item.price}{item.priceNote&&<small className={`ml-2 font-sans text-xs font-semibold ${soft}`}>{item.priceNote}</small>}</span>
    <span className={`mt-1 block text-xs ${soft}`}>{item.installments}</span>
  </div>
}

function Featured({item}:{item:TopPhone}){
  return <article aria-label={`1º mais vendido: ${item.name}`} className="on-dark flex flex-col rounded-xl bg-night p-6 text-white md:p-8">
    <div className="flex items-start justify-between gap-4">
      <span aria-hidden className="font-display text-8xl font-black leading-none text-gold">1</span>
      <span className="pt-2 text-sm font-semibold text-slate-300">{item.sold}</span>
    </div>
    <a href={item.href} target="_blank" rel={affiliateRel} aria-label={`Ver ${item.name} no Mercado Livre`} className="my-6 flex h-64 items-center justify-center rounded-lg bg-white p-4"><img src={item.image} alt={item.name} fetchPriority="high" referrerPolicy="no-referrer" className="h-full w-full object-contain"/></a>
    <span className="text-sm font-semibold text-slate-300">{item.brand}</span>
    <h2 className="mt-1 text-3xl font-extrabold leading-tight">{item.name}</h2>
    <ul className="mt-4 space-y-1.5 text-slate-200">{item.specs.map(s=><li key={s}>✓ {s}</li>)}</ul>
    <div className="mt-auto flex flex-wrap items-end justify-between gap-5 pt-8">
      <Price item={item} dark big/>
      <Cta item={item} className="w-full sm:w-auto"/>
    </div>
  </article>
}

function Row({item}:{item:TopPhone}){
  return <li className="grid grid-cols-[2.25rem_5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-4 py-6">
    <span aria-hidden className="font-display text-5xl font-black leading-none text-gold-ink">{item.rank}</span>
    <a href={item.href} target="_blank" rel={affiliateRel} aria-label={`Ver ${item.name} no Mercado Livre`} className="flex h-20 w-20 items-center justify-center rounded-md bg-white p-1"><img src={item.image} alt={item.name} loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-contain"/></a>
    <div className="min-w-0">
      <span className="text-sm font-semibold text-muted">{item.brand}</span>
      <h3 className="text-lg font-extrabold leading-snug">{item.name}</h3>
      <p className="mt-0.5 text-sm text-muted">{item.sold}</p>
    </div>
    <div className="col-span-3 flex flex-wrap items-end justify-between gap-4">
      <Price item={item}/>
      <Cta item={item} className="w-full sm:w-auto"/>
    </div>
  </li>
}

export function TopPhoneBoard({phones}:{phones:TopPhone[]}){
  const [first,...rest]=phones;
  if(!first)return null;
  return <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
    <Featured item={first}/>
    <ol className="list-none divide-y divide-line border-y border-line lg:-mt-6 lg:border-t-0">{rest.map(p=><Row key={p.rank} item={p}/>)}</ol>
  </div>
}
