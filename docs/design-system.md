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
Card de módulo na homepage. Hover eleva sutilmente (+shadow, -1px translateY).
Limite de 2 linhas na descrição para grid uniforme.

### Sidebar
Fixa, 260px, fundo navy. Logo com acento gold. Numeração monospace em gold/50.

### Prose Legal
Classe `.prose-legal` para conteúdo editorial. Marcadores em `—` gold, blockquote com borda gold.

## Espaçamento

Sistema de 4px: 4, 8, 12, 16, 20, 24, 32, 40, 48...
Padding de página: `px-12` (48px) — generoso para conteúdo jurídico denso.

## Acessibilidade

- Contraste mínimo AA em todos os textos
- navy sobre canvas: ~7:1 (AAA)
- muted sobre canvas: ~4.8:1 (AA)
- Focus visible: padrão do browser + anel de foco explícito a implementar
