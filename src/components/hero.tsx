import Link from "next/link";
import {topPhones,topPhonesUpdatedAt} from "@/data/content";
import {TopPhoneBoard} from "@/components/top-phones";

export function Hero(){
  return <section id="celulares-mais-vendidos" className="border-b border-line">
    <div className="container-site py-12 md:py-20">
      <h1 className="max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">Os celulares que mais vendem no Mercado Livre</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted">Ranking atualizado em {topPhonesUpdatedAt}. Preço e estoque mudam: vale o valor que aparece no anúncio.</p>
      <TopPhoneBoard phones={topPhones}/>
      <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">Os botões são links de afiliado: se você comprar por eles, o Garimpo Tech pode receber uma comissão, sem custo extra para você. <Link href="/transparencia" className="font-bold text-gold-ink underline">Saiba mais</Link>.</p>
    </div>
  </section>
}
