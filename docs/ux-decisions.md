# Decisões de UX — Portal Prev

## Persona Principal

**Advogada em especialização**
- Já tem base jurídica sólida — não precisa de tutoriais básicos
- Consome conteúdo denso — precisa de boa tipografia e espaçamento
- Usa desktop em escritório — prioridade mobile é secundária inicialmente
- Valoriza aparência profissional — conteúdo de qualidade reforça credibilidade

## Decisões Estruturais

### Sidebar fixa
**Decisão:** Navegação lateral fixa, sempre visível.
**Por quê:** Advogados pulam entre módulos frequentemente durante estudo.
Sidebar fixa elimina o passo de "voltar ao menu".

### Homepage com grid 2 colunas
**Decisão:** Grid de 2 colunas para os cards de módulos.
**Por quê:** 7 módulos em coluna única seria uma lista. 2 colunas cria visão
de "mapa do conhecimento" sem necessitar scroll excessivo.

### Numeração monospace nos cards
**Decisão:** Números de módulo em `01`, `02`... com fonte monospace e cor gold/50.
**Por quê:** Cria ritmo visual e permite localização rápida. Sutil o suficiente
para não competir com o título.

### Barra de estatísticas
**Decisão:** Stats bar entre hero e grid (7 módulos / 71 aulas / 29h).
**Por quê:** Dá ao usuário uma âncora de escopo. Saber o tamanho do curso
reduz ansiedade e facilita planejamento de estudo.

### Página de tópico: aside de objetivos
**Decisão:** Sidebar lateral direita com objetivos de aprendizado.
**Por quê:** Advogados têm mindset orientado a resultados. Ver os objetivos
durante a leitura reforça o foco e facilita auto-avaliação.

### Blockquote com borda gold
**Decisão:** Citações e destaques de lei com borda gold e fundo neutro.
**Por quê:** Diferencia visualmente o texto normativo (lei, súmula) do texto
explicativo — reduz o esforço cognitivo de identificar fontes primárias.

## Próximas Iterações

- [ ] Barra de progresso por módulo (localStorage)
- [ ] Modo de busca (search por palavra-chave)
- [ ] Marcadores e anotações por seção
- [ ] Modo leitura (oculta sidebar, aumenta linha de texto)
- [ ] Versão mobile com drawer navigation
