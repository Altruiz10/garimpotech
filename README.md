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
- Metadados básicos e bloqueio intencional de indexação enquanto o site é protótipo.

## Não implementado nesta sprint

- Banco de dados, Supabase, CMS, painel administrativo, analytics, integração Mercado Livre, preços e links de afiliado.
- Textos editoriais completos, testes reais de produtos, política de privacidade definitiva.

## Antes de publicar

Verifique nome e domínio, regras atuais do programa Mercado Livre, URLs comerciais e imagens licenciadas, conteúdos editoriais, LGPD e páginas legais. Remova `robots: {index:false,follow:false}` de `layout.tsx` e ajuste `robots.ts` **somente quando estiver pronto para indexação**. O site não deve ser considerado pronto para produção sem essas etapas.
