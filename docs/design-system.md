# Design System — Portal Prev

## Princípios de Design

1. **Clareza sobre decoração** — cada elemento tem função, sem ornamentos vazios
2. **Tipografia como hierarquia** — Playfair Display âncora autoridade, Inter facilita leitura
3. **Cor como semântica** — navy = estrutura, gold = ênfase, muted = suporte
4. **Espaço como respiro** — padding generoso reduz carga cognitiva

## Paleta de Cores

### Primárias
- `navy` `#1B3A5C` — Deep professional blue. Usado em cabeçalhos, sidebar e CTAs
- `gold` `#C9A84C` — Warm gold accent. Usado em marcadores, badges e progressos

### Neutros
- `canvas` `#F8F7F4` — Fundo principal. Off-white quente, não asséptico
- `surface` `#FFFFFF` — Cards e superfícies elevadas
- `surface-2` `#F0EDE8` — Superfícies de suporte (blockquotes, hover states)

### Texto
- `text` `#1A1A2E` — Títulos e texto principal. Quase preto com toque de blue
- `muted` `#5A6577` — Texto secundário e descrições
- `subtle` `#8A95A3` — Metadados, timestamps, labels

### Bordas
- `border` `#E2DDD6` — Divisores e bordas de card
- `border-strong` `#C8C3BB` — Bordas ativas e separadores

## Tipografia

### Playfair Display (Display font)
- Uso: h1, h2, h3, logo, quotes
- Pesos: 400 (text), 600 (semibold), 700 (bold)
- Por quê: evoca prestígio e autoridade — adequado para direito

### Inter (Body font)
- Uso: parágrafos, labels, navegação, metadados
- Pesos: 400, 500, 600
- Por quê: máxima legibilidade em todas as densidades de texto

### Escala Tipográfica
| Elemento | Tamanho | Família | Peso |
|---|---|---|---|
| Hero H1 | 2.5rem | Playfair | 600 |
| Section H1 | 2rem | Playfair | 600 |
| H2 | 1.375rem | Playfair | 600 |
| H3 | 1.125rem | Playfair | 600 |
| Card title | 1.0625rem | Playfair | 600 |
| Body | 0.9375rem | Inter | 400 |
| Label | 0.6875rem–0.75rem | Inter | 500–600 |

## Componentes

### TopicCard
Card de módulo na homepage. Hover eleva sutilmente (`hover:-translate-y-px`, `hover:shadow-lg`, `hover:border-navy`).
Limite de 2 linhas na descrição (`-webkit-line-clamp: 2`) para grid uniforme.
Props: `number`, `title`, `description`, `href`, `lessonCount`, `duration`, `progress?`, `tag?`.

### Sidebar
Fixa, 260px, fundo navy. Três seções: Logo → Módulos (flex-1, scrollável) → Ferramentas → Footer.
Numeração monospace em gold/50. Hover nos itens: `group-hover:text-white`.

**Seção Ferramentas:** links externos com ícone `↗` gold, label e sublabel descritivo.
Links: Meu INSS, Cálculo Jurídico, Pesquisa STJ, Pesquisa STF.

### LawLinks
Grade 2 colunas de cards clicáveis, posicionada entre o `highlight` e as seções do módulo.
Cada card: ícone `↗` gold + nome da lei (navy, 12.5px) + descrição (subtle, 11px).
`target="_blank" rel="noopener noreferrer"`. Renderizado server-side (sem estado).
Props: `laws: { name, url, desc }[]`.

### ModuleProgressPanel
Componente client-side embutido na sidebar de objetivos (separado por borda).
Barra de progresso gold (height 3px, transition 500ms). Lista de seções com botões circulares.
Estado marcado: círculo gold preenchido + texto riscado (subtle). Estado vazio: círculo com borda.
Usa `useOptimistic` (React 19) para feedback instantâneo + Server Action para persistir no Supabase.
Props: `moduleSlug`, `sections: { key, title }[]`, `initialCompleted: string[]`.

### Prose Legal
Classe `.prose-legal` para conteúdo editorial nos módulos:
- Marcadores `<li>` com `—` em gold (pseudo-elemento `::before`)
- `<blockquote>` com borda esquerda gold + fundo `surface-2`
- `<h2>` com borda inferior `border` e cor navy
- `<p>` com `line-height: 1.8` e cor `muted`

### References (seção de fontes)
Rodapé de cada módulo. Lista de links externos com ícone `↗` em gold.
Campo `note` exibe aviso de verificação em cor `subtle`.
`target="_blank" rel="noopener noreferrer"` em todos os links.

## Espaçamento

Sistema de 4px: 4, 8, 12, 16, 20, 24, 32, 40, 48...
Padding de página: `px-12` (48px) — generoso para conteúdo jurídico denso.
Sidebar de objetivos: `width: 260px`, `sticky top-6`.

## Acessibilidade

- Contraste mínimo AA em todos os textos
- navy `#1B3A5C` sobre canvas `#F8F7F4`: ~7.2:1 (AAA)
- muted `#5A6577` sobre canvas `#F8F7F4`: ~4.9:1 (AA)
- gold `#C9A84C` usado apenas como decoração — não como único portador de informação
- Links externos com `rel="noopener noreferrer"` e abertura em nova aba
- Focus visible: padrão do browser (a implementar: anel de foco customizado)

## Notas de implementação

- Tailwind v4: sem `tailwind.config.ts` — tokens definidos via `@theme inline` no `globals.css`
- Fontes carregadas via `next/font/google` — sem flash de fonte (preload automático)
- Hover states com event handlers substituídos por classes Tailwind (componentes Server-side)
- Server Actions em `lib/actions/progress.ts` — `'use server'` no topo do arquivo
- Supabase client instanciado por chamada (não singleton) nos Server Actions
- `getModuleProgress` chamado diretamente pelo Server Component da página (não via RPC)
- `toggleItem` chamado via mecanismo de Server Action pelo Client Component
- Graceful degradation: sem env vars Supabase, portal funciona normalmente sem checklist persistente
