# Guia de Conteúdo — Portal Prev

Como adicionar, editar e expandir o conteúdo dos módulos.

## Onde fica o conteúdo

Todo o conteúdo dos módulos está em um único arquivo:

```
app/topicos/[slug]/page.tsx
```

O objeto `topicsData` contém um item por módulo, indexado pelo slug da URL.

## Estrutura de um módulo

```typescript
"slug-do-modulo": {
  title: "Título completo do módulo",
  subtitle: "Subtítulo descritivo — aparece abaixo do título",
  tag: "01 · Categoria",          // número + rótulo — exibido em dourado
  highlight: "Frase de destaque em blockquote no topo da página.",
  objectives: [
    "Objetivo de aprendizado 1",
    "Objetivo de aprendizado 2",
  ],
  sections: [
    {
      title: "Título da seção",
      content: "Parágrafo introdutório da seção.",
      items: [                     // opcional — lista com marcadores
        "Item da lista 1",
        "Item da lista 2",
      ],
      type: "default",             // opcional: "default" | "pratico" | "alerta"
    },
  ],
  references: [
    {
      label: "Texto do link",
      url: "https://url-da-fonte.gov.br",
      note: "Nota de contexto — ex: 'Confirmar versão vigente'",  // opcional
    },
  ],
  lawLinks: [                      // cards de legislação com link direto ao Planalto
    {
      name: "Lei 8.213/91 — Planos de Benefícios do RGPS",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
      desc: "Planalto.gov.br — versão consolidada",
    },
  ],
},
```

### Tipos de seção (`type`)

| Tipo | Visual | Uso |
|------|--------|-----|
| `"default"` (omitido) | Seção normal | Conteúdo expositivo |
| `"pratico"` | Fundo cinza, borda navy, badge "Caso Prático" | Exercícios e exemplos práticos |
| `"alerta"` | Fundo amarelo suave, borda gold | Avisos e armadilhas comuns |

## Como adicionar um novo módulo

### 1. Adicionar o conteúdo em `topicsData`

Abra `app/topicos/[slug]/page.tsx` e insira um novo item no objeto `topicsData`.
O slug deve usar apenas letras minúsculas, números e hífens — sem acentos.

Exemplo:
```typescript
"salario-minimo": {
  title: "Salário Mínimo e Reajuste de Benefícios",
  slug: "salario-minimo",
  ...
}
```

### 2. Adicionar o card na homepage

Abra `app/page.tsx` e adicione um item ao array `topics`:

```typescript
{
  number: "08",
  title: "Salário Mínimo e Reajuste de Benefícios",
  description: "Descrição breve — máx. 2 linhas no card.",
  href: "/topicos/salario-minimo",
  lessonCount: 6,
  duration: "2h 30min",
  tag: "Atualização",     // opcional
  progress: 0,            // opcional — 0 a 100
},
```

### 3. Adicionar na sidebar

Abra `components/Sidebar.tsx` e adicione ao array `topics`:

```typescript
{ href: "/topicos/salario-minimo", label: "Salário Mínimo", number: "08" },
```

### 4. Atualizar as estatísticas

Em `app/page.tsx`, atualize o array `stats` com os novos totais:

```typescript
const stats = [
  { value: "8", label: "Módulos" },
  { value: "77", label: "Aulas" },
  { value: "31h", label: "de conteúdo" },
];
```

## Slugs dos módulos existentes

| Slug | URL |
|---|---|
| `fundamentos` | `/topicos/fundamentos` |
| `beneficios-incapacidade` | `/topicos/beneficios-incapacidade` |
| `aposentadorias` | `/topicos/aposentadorias` |
| `pensao-morte` | `/topicos/pensao-morte` |
| `previdencia-complementar` | `/topicos/previdencia-complementar` |
| `processo-administrativo` | `/topicos/processo-administrativo` |
| `jurisprudencia` | `/topicos/jurisprudencia` |

## Checklist de progresso (Supabase)

Cada seção de módulo aparece automaticamente no painel "Progresso" da sidebar direita como um item marcável. A chave de cada item é `section-{índice}` (ex: `section-0`, `section-1`).

O progresso é salvo na tabela `progress` do Supabase:
- `module_slug` — slug do módulo (ex: `fundamentos`)
- `item_key` — identificador da seção (ex: `section-0`)
- `completed` — boolean

Não é necessário nenhum código adicional para incluir novas seções no checklist — elas aparecem automaticamente.

## Boas práticas de conteúdo

- **`highlight`:** Use para a norma legal mais importante do módulo ou a tese jurídica central.
- **`objectives`:** 4 a 5 itens — correspondem a competências verificáveis.
- **`sections`:** 6 a 8 seções por módulo, incluindo sempre uma seção `type: "pratico"` ao final.
- **`items`:** Use para listas de requisitos, incisos legais, critérios — não para texto corrido.
- **`references`:** Sempre incluir pelo menos a lei principal e uma fonte jurisprudencial. Adicionar `note` quando o conteúdo pode estar desatualizado.
- **`lawLinks`:** 4 leis por módulo — priorizar a legislação mais consultada na prática diária.

## Fontes de referência primárias

| Fonte | URL | Uso |
|---|---|---|
| Legislação federal | planalto.gov.br | Leis, decretos, emendas |
| Jurisprudência STJ | scon.stj.jus.br | Súmulas e acórdãos |
| Repercussão Geral STF | portal.stf.jus.br/repercussao | Temas vinculantes |
| Repetitivos STJ | processo.stj.jus.br/repetitivos | Teses obrigatórias |
| Previc | gov.br/previc | Previdência complementar fechada |
| Susep | gov.br/susep | Previdência complementar aberta |

## Fluxo de publicação

```bash
# 1. Editar o conteúdo localmente
npm run dev   # testar em http://localhost:3000

# 2. Verificar o build
npm run build

# 3. Commitar e publicar
git add .
git commit -m "feat: adiciona módulo X"
git push origin main
# → Vercel publica automaticamente em portal-prev.vercel.app
```
