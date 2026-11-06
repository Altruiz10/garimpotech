import type {MetadataRoute} from "next";
import {categories} from "@/data/content";
import {rankingFor,rankingUpdatedAt,siteUrl} from "@/lib/site";

/** Só páginas com conteúdo real. Guias, produtos e categorias vazias entram quando forem preenchidos. */
export default function sitemap():MetadataRoute.Sitemap{
  const ranked=categories.filter(c=>rankingFor(c.slug).length>0);
  return [
    {url:`${siteUrl}/`,lastModified:rankingUpdatedAt,changeFrequency:"daily",priority:1},
    ...ranked.map(c=>({url:`${siteUrl}/categorias/${c.slug}`,lastModified:rankingUpdatedAt,changeFrequency:"daily" as const,priority:0.9})),
    {url:`${siteUrl}/categorias`,changeFrequency:"weekly",priority:0.5},
    ...["sobre","metodologia","transparencia","privacidade"].map(p=>({url:`${siteUrl}/${p}`,changeFrequency:"yearly" as const,priority:0.3})),
  ];
}
