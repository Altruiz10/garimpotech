import {topPhones,topPhonesUpdatedAt,type TopPhone} from "@/data/content";

/** URL pública do site. Use NEXT_PUBLIC_SITE_URL para o domínio próprio; na Vercel cai no domínio de produção. */
export const siteUrl=(
  process.env.NEXT_PUBLIC_SITE_URL||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:"http://localhost:3000")
).replace(/\/$/,"");

/** Páginas ainda sem conteúdo real: fora do Google até serem preenchidas, mas os links seguem válidos. */
export const noIndex={index:false,follow:true} as const;

/** Ranking de cada categoria. Só categorias com ranking têm conteúdo próprio e entram no Google. */
export function rankingFor(categorySlug:string):TopPhone[]{
  return categorySlug==="celulares"?topPhones:[];
}

/** Data do ranking ("dd/mm/aaaa") como Date, para o sitemap. */
export const rankingUpdatedAt=(()=>{
  const [d,m,y]=topPhonesUpdatedAt.split("/").map(Number);
  return new Date(Date.UTC(y,m-1,d));
})();
