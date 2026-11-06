# Garimpo Tech — Sprint 1

Projeto Next.js 15 (App Router), TypeScript, Tailwind CSS 4 e Lucide React.

## Executar localmente

1. Instale Node.js 20+.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Acesse http://localhost:3000.

Para validar: `npm run typecheck`, `npm run lint` e `npm run build`.

## Entregue

- Home responsiva com hero, busca, categorias, guias e produtos demonstrativos.
- Componentes reutilizáveis de navegação, cards e rodapé.
- Rotas de categorias, guias, produtos, busca, ofertas e institucionais.
- Tipos TypeScript e conteúdo de demonstração centralizado em `src/data/content.ts`.
- Metadados, sitemap e indexação liberada para as páginas com conteúdo real.

## Não implementado nesta sprint

- Banco de dados, Supabase, CMS, painel administrativo e atualização automática de preços pela API do Mercado Livre.
- Textos editoriais completos, testes reais de produtos, política de privacidade definitiva.

## Indexação no Google

O site está liberado para indexação (`src/app/robots.ts`) e publica `/sitemap.xml` (`src/app/sitemap.ts`).

- Entram no Google só as páginas com conteúdo real: home, Celulares (ranking), Categorias e as institucionais.
- Ficam fora (`noindex`, definido em `src/lib/site.ts`) até serem preenchidas: guias, páginas de produto, categorias sem ranking, Ofertas, Guias de compra e Buscar. Ao preencher uma delas, remova o `robots:noIndex` dela e inclua no `sitemap.ts`.
- `NEXT_PUBLIC_SITE_URL` define o domínio do sitemap e dos links canônicos. Configure-o na Vercel ao ligar um domínio próprio.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` recebe o código do Google Search Console (método "Tag HTML").

## Analytics

Usa Vercel Web Analytics (sem cookies). Ative em Vercel → projeto → Analytics → Enable.

- Visitas e páginas mais vistas aparecem no painel da Vercel.
- Cada clique em link de afiliado gera o evento `Clique afiliado` com produto, posição, elemento (botão ou imagem), loja e página. Para rastrear um link novo, adicione `data-affiliate`, `data-position`, `data-placement` e `data-store` no `<a>` (veja `src/components/top-phones.tsx`).
- Eventos personalizados no painel da Vercel dependem do plano da conta. O painel do programa de afiliados do Mercado Livre mostra os cliques e as vendas por link.

## Pendências antes de divulgar

Domínio próprio, regras atuais do programa de afiliados do Mercado Livre, conteúdo dos guias, política de privacidade definitiva (LGPD) e imagens licenciadas.
