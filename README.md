# Portal Prev

> Portal de aprendizado de **Direito Previdenciário** — interface moderna, minimalista e elegante para advogados.

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 16 | Framework React com App Router |
| React | 19 | UI |
| TypeScript | 5 | Tipagem |
| Tailwind CSS | 4 | Estilização via CSS vars |
| Playfair Display | — | Tipografia elegante (títulos) |
| Inter | — | Tipografia clara (corpo) |

## Design System

Paleta profissional: autoridade + elegância.

| Token | Valor | Uso |
|---|---|---|
| `--color-navy` | `#1B3A5C` | Cor primária, cabeçalhos |
| `--color-gold` | `#C9A84C` | Acento, badges, marcadores |
| `--color-canvas` | `#F8F7F4` | Fundo principal |
| `--color-surface` | `#FFFFFF` | Cards |
| `--color-text` | `#1A1A2E` | Texto principal |
| `--color-muted` | `#5A6577` | Texto secundário |
| `--color-border` | `#E2DDD6` | Bordas |

## Estrutura

```
app/
├── globals.css         # Design tokens (Tailwind v4 @theme)
├── layout.tsx          # Root layout — fontes + sidebar
├── page.tsx            # Homepage — hero + grid de módulos
└── topicos/[slug]/
    └── page.tsx        # Página de cada módulo

components/
├── Sidebar.tsx         # Navegação lateral fixa
└── TopicCard.tsx       # Card de módulo na homepage

docs/
├── design-system.md    # Decisões de design
└── ux-decisions.md     # Racional de UX
```

## Módulos disponíveis

1. Fundamentos da Previdência Social
2. Benefícios por Incapacidade
3. Aposentadorias ✦ (com regras de transição EC 103/2019)
4. Pensão por Morte e Outros Benefícios
5. Previdência Complementar
6. Processo Administrativo e Recursos
7. Jurisprudência e Súmulas

## Como rodar

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Documentação

Veja [`docs/`](./docs/) para decisões de design e UX.
