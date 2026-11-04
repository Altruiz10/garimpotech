import Link from "next/link";
import {Brand} from "./brand";

const linkClass="flex min-h-9 items-center text-slate-300 hover:text-gold";

export function Footer(){
  return <footer className="on-dark mt-20 bg-night text-slate-300">
    <div className="container-site grid gap-10 py-14 md:grid-cols-3">
      <div>
        <Brand light/>
        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">Tecnologia bem escolhida. Conteúdo educativo e recomendações transparentes.</p>
      </div>
      <div>
        <h2 className="font-bold text-white">Explore</h2>
        <div className="mt-3 flex flex-col text-sm">
          <Link className={linkClass} href="/categorias">Categorias</Link>
          <Link className={linkClass} href="/melhores">Guias de compra</Link>
          <Link className={linkClass} href="/ofertas">Produtos</Link>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-white">Institucional</h2>
        <div className="mt-3 flex flex-col text-sm">
          <Link className={linkClass} href="/sobre">Sobre</Link>
          <Link className={linkClass} href="/metodologia">Metodologia</Link>
          <Link className={linkClass} href="/transparencia">Transparência</Link>
          <Link className={linkClass} href="/privacidade">Privacidade</Link>
        </div>
      </div>
    </div>
    <div className="container-site border-t border-white/10 py-6 text-xs leading-5 text-slate-400">Garimpo Tech é uma marca provisória. Podemos receber comissões por compras realizadas através de links de afiliado, quando disponíveis. Nenhum preço ou oferta é anunciado sem verificação.</div>
  </footer>
}
