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
**Decisão:** Stats bar entre hero e grid com números reais (7 módulos / 51 seções / ~4h de estudo).
**Por quê:** Dá ao usuário uma âncora de escopo. Saber o tamanho do curso reduz ansiedade e facilita planejamento de estudo.
**Detalhe:** `totalSections` calculado automaticamente somando `lessonCount` de todos os módulos — nunca desatualiza ao adicionar novos módulos.

### Página de tópico: aside de objetivos
**Decisão:** Sidebar lateral direita com objetivos de aprendizado.
**Por quê:** Advogados têm mindset orientado a resultados. Ver os objetivos
durante a leitura reforça o foco e facilita auto-avaliação.

### Blockquote com borda gold
**Decisão:** Citações e destaques de lei com borda gold e fundo neutro.
**Por quê:** Diferencia visualmente o texto normativo (lei, súmula) do texto
explicativo — reduz o esforço cognitivo de identificar fontes primárias.

### Seção de Fontes e Referências
**Decisão:** Rodapé de cada módulo com links diretos para fontes primárias oficiais.
**Por quê:** Advogados precisam citar fontes confiáveis. Ter os links integrados ao conteúdo
elimina o atrito de buscar a legislação separadamente e reforça a credibilidade do portal.
**Detalhe:** Notas de verificação (`note`) alertam itens que devem ser conferidos
antes do uso em peças, como texto exato de súmulas e status de temas repetitivos.

### Painel de Atalhos — Ferramentas na Sidebar
**Decisão:** Seção "Ferramentas" fixa na sidebar com links para Meu INSS, Cálculo Jurídico, STJ e STF.
**Por quê:** A advogada alterna constantemente entre estudo e prática. Centralizar os portais
mais usados na mesma tela elimina o atrito de abrir novas abas e fazer buscas repetidas.
**Detalhe:** Links com sublabel descritivo (ex: "Benefícios e requerimentos") para deixar
imediatamente claro o que cada ferramenta faz sem precisar memorizar.

### Links Diretos — Legislação do Módulo (One-Click Law)
**Decisão:** Grade de 4 cards clicáveis no topo de cada módulo, apontando para as leis
compiladas e oficiais no Planalto e portais equivalentes.
**Por quê:** A principal lei de cada matéria deve estar a um clique — sem precisar abrir
o Google, digitar o número da lei e encontrar a versão certa. Reduz o tempo entre
estudar o conceito e verificar o texto legal.
**Detalhe:** Posicionado antes das seções de conteúdo para que a advogada possa abrir
a lei em paralelo enquanto lê a explicação.

### Checklist de Progresso com Supabase
**Decisão:** Painel "Progresso" na sidebar direita com checkboxes por seção, persistido no Supabase.
**Por quê:** Estudar sem referência de onde está gera ansiedade e repetição desnecessária.
O checklist dá clareza imediata sobre o que foi coberto e o que falta, funcionando como
um mapa de progresso pessoal.
**Detalhe:** Feedback otimista instantâneo (`useOptimistic`, React 19) — o círculo vira gold
no clique, sem aguardar resposta do servidor. Persiste entre sessões e dispositivos via Supabase.

## Estado Atual do Projeto (v1.2)

- ✅ 7 módulos com conteúdo jurídico completo e casos práticos (51 seções reais)
- ✅ Seção de fontes com links para legislação e jurisprudência em todos os módulos
- ✅ Hub de Acesso Direto: Painel de Atalhos + Links Diretos + Checklist Supabase
- ✅ Stats e progresso reais na homepage (sem dados fabricados)
- ✅ Barra de progresso dos cards calculada dinamicamente do Supabase
- ✅ Build de produção sem erros (Next.js 15.5.15 + Webpack)
- ✅ Deploy em produção: [portal-prev.vercel.app](https://portal-prev.vercel.app)
- ✅ Repositório GitHub conectado ao Vercel (auto-deploy em todo push)
- ✅ Supabase configurado (projeto `portal_prev`, tabela `progress` com RLS)

## Próximas Iterações

- [ ] Modo de busca (search por palavra-chave dentro dos módulos)
- [ ] Marcadores e anotações pessoais por seção
- [ ] Modo leitura (oculta sidebar, aumenta linha de texto)
- [ ] Versão mobile com drawer navigation
- [ ] Quizzes de fixação ao final de cada módulo
- [ ] Destaque de texto (highlight) com cor gold para termos-chave
- [ ] Notificações de atualização quando uma lei referenciada for alterada
