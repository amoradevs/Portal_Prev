# Portal Prev

> Portal de aprendizado de **Direito Previdenciário** — interface moderna, minimalista e elegante para advogados.

**Produção:** [portal-prev.vercel.app](https://portal-prev.vercel.app)
**Repositório:** [github.com/amoradevs/Portal_Prev](https://github.com/amoradevs/Portal_Prev)

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 15.5.15 | Framework React com App Router |
| React | 19 | UI |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 4 | Estilização via CSS custom properties |
| Playfair Display | — | Tipografia elegante (títulos) |
| Inter | — | Tipografia clara (corpo) |

> **Nota:** O projeto usa Next.js 15.x (Webpack no build). O Next.js 16.x usa Turbopack por padrão no build, que tem um bug com caminhos contendo caracteres acentuados no macOS. Não atualizar para 16.x até correção upstream.

## Design System

Paleta profissional: autoridade + elegância.

| Token | Valor | Uso |
|---|---|---|
| `--color-navy` | `#1B3A5C` | Cor primária, cabeçalhos, sidebar |
| `--color-gold` | `#C9A84C` | Acento, badges, marcadores, progresso |
| `--color-canvas` | `#F8F7F4` | Fundo principal (off-white quente) |
| `--color-surface` | `#FFFFFF` | Cards e superfícies elevadas |
| `--color-text` | `#1A1A2E` | Texto principal |
| `--color-muted` | `#5A6577` | Texto secundário e descrições |
| `--color-subtle` | `#8A95A3` | Labels, metadados |
| `--color-border` | `#E2DDD6` | Bordas neutras |

## Estrutura do projeto

```
app/
├── globals.css              # Design tokens (Tailwind v4 @theme inline)
├── layout.tsx               # Root layout — fontes Google + sidebar
├── page.tsx                 # Homepage — hero, stats bar, grid de módulos
└── topicos/[slug]/
    └── page.tsx             # Página dinâmica de cada módulo

components/
├── Sidebar.tsx              # Navegação lateral fixa (260px, fundo navy)
└── TopicCard.tsx            # Card de módulo com hover, badge e progresso

docs/
├── design-system.md         # Tokens, tipografia, componentes e espaçamento
├── ux-decisions.md          # Persona, decisões estruturais e próximas iterações
└── content-guide.md         # Como adicionar e atualizar conteúdo dos módulos
```

## Módulos — todos com conteúdo completo

| # | Módulo | Seções | Referências |
|---|---|---|---|
| 01 | Fundamentos da Previdência Social | 3 | CF/88, Lei 8.213, Lei 8.212, Dec. 3.048 |
| 02 | Benefícios por Incapacidade | 4 | Lei 8.213, Dec. 3.048, STJ REsp 1.648.305 |
| 03 | Aposentadorias | 3 | EC 103/2019, Lei 8.213, STF repercussão geral |
| 04 | Pensão por Morte e Outros Benefícios | 4 | Lei 8.213, EC 103, Lei 12.873 |
| 05 | Previdência Complementar | 4 | LC 109/2001, Previc, Susep, Receita Federal |
| 06 | Processo Administrativo e Judicial | 4 | Lei 9.784, Dec. 10.410, STF RE 631.240, CPC |
| 07 | Jurisprudência e Súmulas | 4 | STJ súmulas, STF repercussão, repetitivos |

## Como rodar localmente

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

O projeto está integrado ao Vercel. Cada `git push origin main` publica automaticamente em produção.

```bash
# Deploy manual (se necessário)
vercel --prod
```

## Documentação

| Arquivo | Conteúdo |
|---|---|
| [`docs/design-system.md`](./docs/design-system.md) | Tokens de cor, tipografia, componentes, espaçamento |
| [`docs/ux-decisions.md`](./docs/ux-decisions.md) | Persona, decisões de UX, próximas iterações |
| [`docs/content-guide.md`](./docs/content-guide.md) | Como adicionar módulos e atualizar conteúdo |
