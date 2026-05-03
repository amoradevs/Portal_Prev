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
    },
  ],
  references: [
    {
      label: "Texto do link",
      url: "https://url-da-fonte.gov.br",
      note: "Nota de contexto — ex: 'Confirmar versão vigente'",  // opcional
    },
  ],
},
```

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

## Boas práticas de conteúdo

- **`highlight`:** Use para a norma legal mais importante do módulo ou a tese jurídica central.
- **`objectives`:** 4 itens é o ideal — correspondem a competências verificáveis.
- **`sections`:** 3 a 5 seções por módulo. Mais do que isso, considere dividir em dois módulos.
- **`items`:** Use para listas de requisitos, incisos legais, critérios — não para texto corrido.
- **`references`:** Sempre incluir pelo menos a lei principal e uma fonte jurisprudencial. Adicionar `note` quando o conteúdo pode estar desatualizado.

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
