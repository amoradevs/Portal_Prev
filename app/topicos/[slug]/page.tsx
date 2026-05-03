import Link from "next/link";

interface Reference { label: string; url: string; note?: string; }
interface Section { title: string; content: string; items?: string[]; type?: "default" | "pratico" | "alerta"; }

interface TopicData {
  title: string;
  subtitle: string;
  tag: string;
  objectives: string[];
  sections: Section[];
  highlight?: string;
  references: Reference[];
}

const topicsData: Record<string, TopicData> = {

  /* ─────────────────────────────────────────────────────────────────────
     01 · FUNDAMENTOS
  ───────────────────────────────────────────────────────────────────── */
  fundamentos: {
    title: "Fundamentos da Previdência Social",
    subtitle: "Base constitucional, princípios, regimes e qualidade de segurado",
    tag: "01 · Base",
    objectives: [
      "Compreender os princípios constitucionais da Seguridade Social",
      "Distinguir os três regimes previdenciários e sua abrangência",
      "Dominar os conceitos de filiação, inscrição e qualidade de segurado",
      "Calcular o período de graça e identificar sua relevância prática",
      "Entender as regras de carência e as hipóteses de dispensa",
    ],
    highlight: "A Previdência Social é um direito social fundamental (CF/88, art. 6º). Sua lógica central é a solidariedade — quem contribui hoje financia quem precisa hoje, e será financiado no futuro.",
    sections: [
      {
        title: "O que é a Seguridade Social",
        content: "A Seguridade Social (CF/88, arts. 194–204) é o sistema pelo qual o Estado garante proteção contra riscos sociais: doença, velhice, desemprego, morte e maternidade. Ela se divide em três pilares distintos, com lógicas e fontes de custeio diferentes:",
        items: [
          "Saúde: acesso universal e igualitário, independente de contribuição (SUS — art. 196)",
          "Previdência Social: regime contributivo e compulsório — só protege quem contribui",
          "Assistência Social: proteção a quem dela necessitar, sem contrapartida contributiva (LOAS — Lei 8.742/93)",
        ],
      },
      {
        title: "Princípios Constitucionais (art. 194, CF)",
        content: "Os princípios da Seguridade não são meras diretrizes — têm força normativa e são utilizados pelo STJ e STF para interpretar lacunas e conflitos. Conhecê-los é fundamental para a argumentação jurídica:",
        items: [
          "Universalidade da cobertura: o sistema deve proteger todos os riscos sociais relevantes",
          "Universalidade do atendimento: a proteção deve alcançar o maior número de pessoas",
          "Uniformidade e equivalência: benefícios iguais para trabalhadores urbanos e rurais",
          "Seletividade e distributividade: o legislador escolhe quais riscos proteger e como distribuir os recursos",
          "Irredutibilidade do valor dos benefícios: proibição de redução nominal — STF garante também a irredutibilidade real em alguns contextos",
          "Equidade no custeio: quem tem mais capacidade contributiva deve contribuir mais",
          "Diversidade da base de financiamento: receitas do sistema não dependem de uma única fonte",
          "Caráter democrático e descentralizado da administração",
        ],
      },
      {
        title: "Os Três Regimes Previdenciários",
        content: "O Brasil tem três regimes previdenciários estruturados, cada um com regras, clientela e fonte de custeio específicas. A advogada previdenciária precisa identificar corretamente o regime aplicável ao cliente antes de qualquer análise:",
        items: [
          "RGPS — Regime Geral da Previdência Social: gerido pelo INSS, cobre trabalhadores da iniciativa privada, autônomos, domésticos e rurais. Lei 8.213/91 e Lei 8.212/91",
          "RPPS — Regime Próprio de Previdência Social: para servidores públicos efetivos da União, Estados e Municípios que tenham instituído o regime. Lei 9.717/98",
          "Previdência Complementar (RVPC): facultativa, gerida por EFPC (fechada) ou EAPC (aberta). LC 109/2001",
          "Militares das Forças Armadas têm regime próprio distinto, não abrangido pelo RPPS comum",
        ],
      },
      {
        title: "Filiação, Inscrição e Qualidade de Segurado",
        content: "A filiação ao RGPS é automática — decorre do exercício de atividade remunerada. A inscrição é o ato formal de cadastro (CNIS). Ambas são conceitos distintos e têm efeitos jurídicos diferentes. A qualidade de segurado é o status que garante ao trabalhador e à sua família o direito aos benefícios:",
        items: [
          "Segurado obrigatório: empregado, empregado doméstico, trabalhador avulso, contribuinte individual (autônomo, empresário) e segurado especial (trabalhador rural)",
          "Segurado facultativo: maior de 16 anos sem renda própria que se filia voluntariamente (donas de casa, estudantes, desempregados)",
          "A qualidade de segurado se mantém enquanto houver contribuições em dia — e durante o período de graça após o término das contribuições",
          "Perda da qualidade de segurado: ocorre com o fim do período de graça sem retomada de contribuições",
        ],
      },
      {
        title: "Período de Graça",
        content: "O período de graça é o intervalo em que o segurado, mesmo sem contribuir, mantém a qualidade de segurado e o direito aos benefícios. Seu prazo varia conforme a situação do segurado (art. 15, Lei 8.213/91):",
        items: [
          "12 meses: regra geral, após cessação das contribuições",
          "12 meses (prorrogável para 24): se o segurado tiver mais de 120 contribuições mensais",
          "24 meses: se o segurado estiver recebendo seguro-desemprego",
          "6 meses: para o segurado facultativo",
          "O período de graça é suspenso se o segurado retomar contribuições e volta a correr do zero se as cessar novamente",
          "Importância prática: doença que se manifesta durante o período de graça dá direito ao auxílio-doença",
        ],
      },
      {
        title: "Carência",
        content: "Carência é o número mínimo de contribuições mensais necessárias para que o segurado faça jus ao benefício (art. 24, Lei 8.213/91). Não se confunde com tempo de contribuição — é um requisito de acesso independente:",
        items: [
          "Auxílio-doença e aposentadoria por invalidez: 12 contribuições (com exceções)",
          "Aposentadoria por idade: 180 contribuições (15 anos)",
          "Aposentadoria por tempo de contribuição: 180 contribuições",
          "Salário-maternidade (contribuinte individual/facultativa): 10 contribuições",
          "Dispensas de carência: acidente de qualquer natureza, doenças da lista MPS, situação de emergência reconhecida pelo governo",
          "Segurado especial: computa meses de atividade rural em vez de contribuições mensais",
        ],
      },
      {
        title: "Financiamento da Seguridade Social",
        content: "A Seguridade Social é financiada por toda a sociedade, por meio de contribuições sociais e receitas fiscais, conforme o art. 195 da CF/88. Compreender o custeio é importante para calcular contribuições dos clientes e identificar vínculos:",
        items: [
          "Contribuição do empregado: alíquota progressiva sobre o salário (tabela INSS, atualizada anualmente)",
          "Contribuição do empregador: 20% sobre a folha de salários (RGPS geral) — com exceções para MEI, Simples, etc.",
          "Contribuição sobre a receita bruta (CPRB): alternativa à folha para setores específicos",
          "COFINS e PIS/PASEP: contribuições sobre faturamento, destinadas à Seguridade",
          "CSLL: contribuição sobre o lucro líquido das pessoas jurídicas",
          "Contribuição rural: 2,3% sobre a receita bruta da comercialização da produção rural",
        ],
      },
      {
        title: "Caso Prático: Identificando o Regime e a Qualidade de Segurado",
        type: "pratico",
        content: "João trabalhou como empregado registrado por 8 anos. Foi demitido sem justa causa em março/2024 e está recebendo seguro-desemprego. Em setembro/2024 foi diagnosticado com doença grave. Ele tem direito ao auxílio-doença?",
        items: [
          "Regime aplicável: RGPS — João era empregado da iniciativa privada",
          "Qualidade de segurado: SIM — demitido em março/2024, está recebendo seguro-desemprego, o que prorroga o período de graça para 24 meses",
          "Setembro/2024 está dentro do período de graça: qualidade de segurado mantida",
          "Carência: 8 anos de trabalho = ~96 meses de contribuição > 12 exigidas — carência cumprida",
          "Conclusão: João tem direito ao auxílio-doença. Protocolar requerimento com atestados e CNIS",
          "Atenção: verificar se a doença está na lista de dispensa de carência — se sim, mesmo segurado sem carência teria direito",
        ],
      },
    ],
    references: [
      { label: "CF/88 — Arts. 194 a 204 (Seguridade Social)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", note: "Planalto.gov.br" },
      { label: "Lei 8.213/91 — Planos de Benefícios do RGPS", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm", note: "Planalto.gov.br" },
      { label: "Lei 8.212/91 — Custeio da Seguridade Social", url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm", note: "Planalto.gov.br" },
      { label: "Decreto 3.048/99 — Regulamento da Previdência Social", url: "https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm", note: "Planalto.gov.br" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     02 · BENEFÍCIOS POR INCAPACIDADE
  ───────────────────────────────────────────────────────────────────── */
  "beneficios-incapacidade": {
    title: "Benefícios por Incapacidade",
    subtitle: "Auxílio-doença, aposentadoria por invalidez, auxílio-acidente e reabilitação",
    tag: "02 · Prático",
    objectives: [
      "Distinguir e aplicar os requisitos de cada benefício por incapacidade",
      "Compreender o papel da perícia médica e como contestar seus resultados",
      "Calcular salário de benefício e RMI com precisão",
      "Identificar doença preexistente, NTEP e suas consequências jurídicas",
      "Conduzir casos de reabilitação profissional e cessação indevida",
    ],
    highlight: "Os benefícios por incapacidade são os mais judicializados no RGPS. A perícia médica do INSS é o principal obstáculo — conhecer seus critérios e como contestá-los é essencial.",
    sections: [
      {
        title: "Auxílio-Doença (B31 / B91)",
        content: "Benefício temporário devido ao segurado que fica incapaz para o trabalho ou atividade habitual por mais de 15 dias consecutivos. Os primeiros 15 dias são de responsabilidade do empregador para o segurado empregado — o INSS paga a partir do 16º dia. Para as demais categorias, o INSS paga desde o início da incapacidade.",
        items: [
          "B31 — previdenciário: incapacidade por doença ou acidente de origem comum",
          "B91 — acidentário: incapacidade por acidente de trabalho ou doença ocupacional — garante estabilidade de 12 meses após alta",
          "Carência: 12 contribuições mensais (dispensada para acidente de qualquer natureza e doenças da lista MPS, como neoplasia maligna, tuberculose, HIV, cardiopatia grave)",
          "RMI: 91% do salário de benefício",
          "Prazo: o INSS fixa a DCB (Data de Cessação do Benefício); o segurado pode prorrogar com nova perícia",
          "Alta programada: o INSS pode fixar prazo de cessação sem nova perícia — há jurisprudência contra essa prática",
        ],
      },
      {
        title: "Doença Preexistente e Agravamento",
        content: "O INSS frequentemente indefere benefícios alegando que a doença é preexistente à filiação. O art. 59, §1º da Lei 8.213/91 veda o benefício para incapacidade derivada de doença preexistente — mas há exceções importantes que o advogado deve explorar:",
        items: [
          "Regra: doença preexistente à filiação não gera direito ao benefício",
          "Exceção 1 — agravamento: se a doença preexistente se agravou após a filiação, o benefício é devido pelo agravamento",
          "Exceção 2 — progressão: doenças progressivas (ex.: diabetes, hipertensão com complicações) geram direito mesmo que a doença já existisse",
          "Exceção 3 — ignorância: se o próprio segurado não sabia da doença na época da filiação, não há preexistência",
          "Estratégia: questionar laudos do INSS, produzir prova técnica contrária, requerer nova perícia judicial com quesitos sobre agravamento",
        ],
      },
      {
        title: "Nexo Técnico Epidemiológico Previdenciário (NTEP)",
        content: "O NTEP (introduzido pela Lei 11.430/2006 e regulamentado pelo Decreto 3.048/99) presume o nexo entre a doença e o trabalho quando há correlação estatística entre o CID da doença e a atividade econômica do empregador (CNAE). Isso inverte o ônus da prova:",
        items: [
          "Como funciona: o INSS cruza o CID do segurado com o CNAE do empregador usando tabela NTEP",
          "Se houver correlação: presume-se doença ocupacional — o benefício passa a ser B91 (acidentário) automaticamente",
          "Empregador pode contestar o NTEP via Comunicação de Discordância no e-Social",
          "Importância para o segurado: B91 garante estabilidade de 12 meses, deposição do FGTS durante afastamento e acesso à reabilitação profissional custeada pelo INSS",
          "Importância para o advogado: sempre verificar se o caso do cliente configura NTEP antes de aceitar B31 do INSS",
        ],
      },
      {
        title: "Aposentadoria por Invalidez (B32)",
        content: "Devida ao segurado declarado total e permanentemente incapaz, e insuscetível de reabilitação. A incapacidade deve ser definitiva — não apenas temporária. A perícia do INSS deve analisar não só a limitação física, mas a possibilidade de reabilitação para outra função.",
        items: [
          "Carência: 12 contribuições (dispensada nas mesmas hipóteses do auxílio-doença)",
          "RMI: 100% do salário de benefício — sem aplicação do fator previdenciário",
          "Acréscimo de 25%: quando o segurado precisa de assistência permanente (paralisia, cegueira, perda de membros, alienação mental — lista do art. 45 do Dec. 3.048/99). STJ admite interpretação extensiva por analogia — REsp 1.648.305",
          "Conversão de auxílio-doença: após 2 anos no B31, o INSS deve reavaliar e, se a incapacidade for permanente, converter para B32",
          "Revisão bienal obrigatória (art. 101 da Lei 8.213/91): omissão do INSS não gera caducidade automática do benefício",
          "Suspensão vs. cessação: o retorno ao trabalho suspende o benefício por 6 meses (período de experiência) — se houver recidiva, o B32 é restaurado",
        ],
      },
      {
        title: "Auxílio-Acidente (B94)",
        content: "Benefício indenizatório e permanente, pago ao segurado que, após a consolidação das lesões decorrentes de acidente de qualquer natureza, fica com sequela que reduz sua capacidade laborativa. Não exige incapacidade total — basta a redução da capacidade:",
        items: [
          "Não exige carência — só qualidade de segurado no momento do acidente",
          "Beneficiários: apenas empregado (inclusive doméstico), trabalhador avulso e segurado especial",
          "Contribuinte individual e facultativo NÃO têm direito ao auxílio-acidente",
          "Valor: 50% do salário de benefício",
          "Cumulável com salário e com auxílio-doença — NÃO cumulável com aposentadoria",
          "Cessa com a concessão de aposentadoria ou com a morte",
          "Discussão: cumulação com aposentadoria concedida antes de 11/11/1997 — Tema 1.182 STJ (conferir status atual)",
        ],
      },
      {
        title: "Cálculo do Salário de Benefício",
        content: "O salário de benefício (SB) é a base de cálculo dos benefícios por incapacidade. Seu cálculo correto impacta diretamente no valor que o cliente receberá:",
        items: [
          "Regra geral: média aritmética simples dos 80% maiores salários de contribuição desde julho/1994 (ou desde a filiação, se posterior)",
          "Os salários de contribuição são corrigidos monetariamente pelo INPC até o mês anterior ao benefício",
          "Limite mínimo: 1 salário mínimo; limite máximo: teto do RGPS (atualizado anualmente)",
          "Para benefícios acidentários (B91): computa-se a média sem excluir os 20% menores, pois o acidente não pode prejudicar o segurado",
          "Fator previdenciário: NÃO se aplica a benefícios por incapacidade",
          "Dica prática: extrair o CNIS do cliente antes do requerimento para verificar se há divergências e corrigi-las previamente",
        ],
      },
      {
        title: "Reabilitação Profissional e Cessação Indevida",
        content: "O INSS tem o dever de oferecer reabilitação profissional antes de cessar o benefício de segurado que ainda não recuperou plena capacidade. A cessação sem reabilitação é ilegal e pode ser revertida judicialmente:",
        items: [
          "Reabilitação: programa de readaptação do segurado para exercer nova função compatível com suas limitações",
          "O INSS não pode cessar o B32 sem antes declarar formalmente que o segurado está apto para uma função específica após reabilitação",
          "Cessação indevida do B31: prática comum do INSS de cessar o benefício pela alta programada sem nova perícia — atacar via ação com tutela de urgência",
          "Benefício de prestação continuada (BPC/LOAS): alternativa para segurados que perderam a qualidade de segurado e têm renda familiar per capita ≤ 1/4 do salário mínimo",
          "Honorários no JEF: em causas até 60 SM, honorários são de 10% sobre o valor da condenação (art. 55 da Lei 9.099/95 c/c art. 1º da Lei 10.259/01)",
        ],
      },
      {
        title: "Caso Prático: Contestando Cessação de Auxílio-Doença",
        type: "pratico",
        content: "Maria, costureira, teve seu B31 cessado pela alta programada do INSS após 8 meses, sem nova perícia. Ela continua com dores crônicas no ombro e não consegue trabalhar. Como proceder?",
        items: [
          "1. Verificar se o INSS enviou carta de notificação da DCB e se o prazo foi cumprido",
          "2. Protocolar imediatamente pedido de prorrogação no Meu INSS com novos laudos médicos — isso suspende a cessação durante a análise",
          "3. Se negado: ingressar com ação no JEF (causa ≤ 60 SM geralmente) com pedido de tutela de urgência para reimplantação imediata do benefício",
          "4. Na petição: alegar que a cessação por alta programada sem perícia prévia viola o art. 101 da Lei 8.213/91 e a dignidade da pessoa humana",
          "5. Verificar se a atividade de costureira + diagnóstico configura NTEP — se sim, requerer conversão para B91 com todos os direitos acidentários",
          "6. Resultado esperado: tutela deferida em 48-72h em casos bem documentados — reinstalação do benefício até sentença",
        ],
      },
    ],
    references: [
      { label: "Lei 8.213/91 — Arts. 59 a 86 (benefícios por incapacidade)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm", note: "Planalto.gov.br" },
      { label: "Decreto 3.048/99 — Arts. 71 a 112 e Tabela NTEP", url: "https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm", note: "Planalto.gov.br" },
      { label: "STJ — REsp 1.648.305/RS (acréscimo de 25% — repetitivo)", url: "https://processo.stj.jus.br/processo/revista/documento/mediado/?componente=ITA&sequencial=1625906&num_registro=201700015268&data=20180214", note: "Verificar íntegra no STJ" },
      { label: "IN INSS nº 128/2022 — procedimentos de benefícios", url: "https://www.in.gov.br/en/web/dou/-/instrucao-normativa-pres-inss-n-128-de-28-de-marco-de-2022-389275446", note: "Confirmar vigência e atualizações" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     03 · APOSENTADORIAS
  ───────────────────────────────────────────────────────────────────── */
  aposentadorias: {
    title: "Aposentadorias",
    subtitle: "Regras permanentes, transição, fator previdenciário e aposentadoria especial",
    tag: "03 · Essencial",
    objectives: [
      "Dominar as regras permanentes de aposentadoria pós-EC 103/2019",
      "Comparar as cinco regras de transição e identificar a mais vantajosa para cada cliente",
      "Calcular o fator previdenciário e entender quando ele se aplica",
      "Orientar sobre aposentadoria especial, rural e suas particularidades",
      "Calcular a Renda Mensal Inicial (RMI) com precisão",
    ],
    highlight: "A EC 103/2019 criou regras permanentes e cinco regras de transição. O dever do advogado é simular TODAS as regras aplicáveis ao cliente e escolher a mais vantajosa — os resultados podem ser muito diferentes.",
    sections: [
      {
        title: "Regras Permanentes pós-EC 103/2019",
        content: "As regras permanentes valem para quem ingressou no RGPS a partir de 14/11/2019 ou para quem não tinha contribuições antes dessa data. São as mais simples, pois eliminaram o fator previdenciário para as aposentadorias por tempo e introduziram requisitos fixos:",
        items: [
          "Aposentadoria por idade — Homens: 65 anos + 20 anos de contribuição",
          "Aposentadoria por idade — Mulheres: 62 anos + 15 anos de contribuição",
          "Cálculo: 60% do SB + 2% por ano que exceder 20 anos (H) ou 15 anos (M)",
          "100% do SB: exige 40 anos de contribuição (H) ou 35 anos (M)",
          "Exemplo: mulher com 35 anos de contribuição recebe 60% + (20 × 2%) = 100% do SB",
          "Não existe mais aposentadoria por tempo de contribuição pura nas regras permanentes",
        ],
      },
      {
        title: "As Cinco Regras de Transição",
        content: "Para quem já contribuía antes de 13/11/2019, existem cinco regras de transição que podem ser usadas de forma alternativa. O segurado escolhe a mais vantajosa. A simulação comparativa é obrigatória na prática:",
        items: [
          "Regra 1 — Pedágio de 50%: apenas para quem faltava ≤ 2 anos para se aposentar pelas regras antigas. Cumpre o tempo restante + 50% desse tempo como pedágio. Sem requisito de idade",
          "Regra 2 — Pedágio de 100%: sem restrição de tempo faltante. Cumpre o tempo restante + 100% desse tempo. Sem requisito de idade. Aplica-se fator previdenciário",
          "Regra 3 — Pontos progressivos: soma de idade + tempo de contribuição. Tabela anual (2024: H=99 pontos, M=89 pontos). Exige mínimo de 35 anos (H) ou 30 anos (M) de contribuição",
          "Regra 4 — Idade progressiva: redução gradual da exigência de tempo + aumento progressivo da idade mínima até chegar às regras permanentes em 2023 (já encerrada a transição de tempo — usar a permanente)",
          "Regra 5 — Aposentadoria por idade com tempo reduzido: H: 65 anos + tempo progressivo; M: redução gradual da idade de 60 para 62 anos até 2023 (já na regra permanente)",
        ],
      },
      {
        title: "Fator Previdenciário",
        content: "O fator previdenciário (FP) é um coeficiente que pondera a aposentadoria pela expectativa de sobrevida do segurado. Foi criado pela Lei 9.876/1999 para desestimular aposentadorias precoces. Aplica-se às regras de transição 2 e em situações específicas das regras permanentes:",
        items: [
          "Fórmula: FP = (Tc × a / Es) × [1 + (Id + Tc × a) / 100] — onde Tc = tempo de contribuição, a = alíquota INSS (0,31), Es = expectativa de sobrevida na data, Id = idade",
          "FP < 1: reduz o benefício — ocorre quando o segurado se aposenta com poucos anos de contribuição ou muita expectativa de vida",
          "FP > 1: aumenta o benefício — raro, ocorre quando o segurado trabalha muito além do mínimo exigido",
          "A tabela de expectativa de sobrevida é divulgada anualmente pelo IBGE",
          "A regra de pontos (Regra 3) foi criada exatamente para evitar o fator previdenciário — quem atinge a pontuação mínima não sofre redução",
          "Cálculo prático: use o simulador oficial do INSS ou planilhas atuariais para comparar cenários",
        ],
      },
      {
        title: "Aposentadoria Especial",
        content: "A aposentadoria especial é devida ao segurado que trabalha por 15, 20 ou 25 anos em condições que prejudiquem sua saúde ou integridade física (exposição habitual e permanente a agentes nocivos). É um dos temas mais técnicos e litigados do direito previdenciário:",
        items: [
          "Prazos: 15 anos (agentes biológicos graves, radiação ionizante), 20 anos (agentes químicos e ruído acima de 100dB), 25 anos (demais — ruído entre 85-100dB, calor, etc.)",
          "Documentação obrigatória: PPP (Perfil Profissiográfico Previdenciário) + LTCAT (Laudo Técnico das Condições Ambientais de Trabalho)",
          "Exposição ao ruído: o STJ pacificou que 80dB é o limite pré-1997, 85dB de 1997 a 2003, e 85dB após 2003 — verificar a época de trabalho",
          "Conversão de tempo especial em comum: ainda possível mesmo após a EC 103/2019, usando os fatores multiplicadores (1,4 para 15 anos, 1,2 para 20 anos, para converter em 35 anos)",
          "Incompatibilidade: a concessão da aposentadoria especial é incompatível com o retorno ao trabalho em atividade especial — gera cassação",
          "EPI eficaz: a neutralização do agente nocivo por EPI eficaz elimina o direito à aposentadoria especial? STF decidiu que NÃO para ruído (RE 664.335) — verificar outros agentes",
        ],
      },
      {
        title: "Aposentadoria Rural (Segurado Especial)",
        content: "O segurado especial — trabalhador rural que produz em regime de economia familiar — tem regras diferenciadas de aposentadoria, reconhecendo a dificuldade de contribuição formal do campo:",
        items: [
          "Aposentadoria por idade rural: 60 anos (H) e 55 anos (M) + 180 meses de atividade rural",
          "Não exige contribuição — basta comprovar atividade rural pelo período exigido",
          "Prova: início de prova material (documentos como notas de produtor, carnê de sindicato, registros escolares dos filhos com endereço rural) + testemunhas",
          "Prova exclusivamente testemunhal NÃO basta — STJ, Súmula 149",
          "Trabalhador rural que eventualmente trabalhou na cidade pode perder a qualidade de segurado especial — analisar com cuidado os períodos",
          "Boia-fria (trabalhador rural avulso): segue as regras do trabalhador avulso, não as do segurado especial",
        ],
      },
      {
        title: "Cálculo da RMI — Renda Mensal Inicial",
        content: "A RMI é o valor do benefício na data de concessão. Seu cálculo envolve o salário de benefício (SB) e o coeficiente de cálculo, que varia conforme a regra de aposentadoria aplicada:",
        items: [
          "Salário de benefício: média dos 80% maiores SC desde jul/1994, corrigidos pelo INPC",
          "Regras permanentes: RMI = SB × (60% + 2% × anos excedentes ao mínimo)",
          "Regra de pontos (transição): RMI = SB sem fator previdenciário, se atingiu os pontos",
          "Regra do pedágio (transição): RMI pode ser afetada pelo fator previdenciário",
          "Aposentadoria especial: RMI = 100% do SB (sem fator previdenciário)",
          "Aposentadoria rural: RMI = 1 salário mínimo (segurado especial sem contribuições)",
          "Salário mínimo como piso: nenhum benefício de prestação continuada pode ser inferior a 1 SM",
        ],
      },
      {
        title: "Caso Prático: Qual Regra de Transição é Mais Vantajosa?",
        type: "pratico",
        content: "Carlos, 58 anos, tem 33 anos de contribuição (registro em carteira desde os 25 anos). Quer se aposentar em 2025. Qual regra usar?",
        items: [
          "Regras permanentes: precisa de 65 anos — ainda faltam 7 anos. Descartada por enquanto",
          "Regra 1 (Pedágio 50%): faltava 2 anos para completar 35 anos em 2019. 50% de 2 anos = 1 ano de pedágio. Precisaria de 35 + 1 = 36 anos. Tem 33 — ainda faltam 3 anos",
          "Regra 2 (Pedágio 100%): faltavam 2 anos em 2019. Pedágio = 2 anos. Precisa de 35 + 2 = 37 anos. Tem 33 — faltam 4 anos",
          "Regra 3 (Pontos): 2025 exige 100 pontos (H). Carlos tem 58 + 33 = 91 pontos — ainda não atingiu",
          "Simulação: em 2026 Carlos terá 59 + 34 = 93 pontos. Em 2027: 60 + 35 = 95. Em 2028: 61 + 36 = 97. Em 2029 (com 62 anos e 37 TC): 62 + 37 = 99 pontos — atingiu a meta de 2029!",
          "Conclusão: a Regra 3 (pontos) é a mais vantajosa — Carlos se aposenta em 2029 aos 62 anos com 37 anos de TC, sem fator previdenciário, com RMI mais alta",
        ],
      },
    ],
    references: [
      { label: "EC 103/2019 — Reforma da Previdência (texto integral)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm", note: "Planalto.gov.br" },
      { label: "Lei 8.213/91 — Arts. 29 a 57 (cálculo e espécies de aposentadoria)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm", note: "Planalto.gov.br" },
      { label: "STF — RE 664.335 (EPI eficaz e ruído — repercussão geral)", url: "https://portal.stf.jus.br/processos/detalhe.asp?incidente=4149988", note: "Confirmar tese final" },
      { label: "Simulador de aposentadoria — Meu INSS", url: "https://meu.inss.gov.br/central/index.html", note: "Usar para simular regras de transição do cliente" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     04 · PENSÃO POR MORTE E OUTROS BENEFÍCIOS
  ───────────────────────────────────────────────────────────────────── */
  "pensao-morte": {
    title: "Pensão por Morte e Outros Benefícios",
    subtitle: "Pensão, auxílio-reclusão, salário-maternidade e salário-família",
    tag: "04 · Prático",
    objectives: [
      "Identificar dependentes, ordem de preferência e regras de cotas na pensão",
      "Calcular o valor da pensão nas regras pré e pós-EC 103/2019",
      "Orientar sobre os requisitos do auxílio-reclusão e suas armadilhas",
      "Aplicar as regras do salário-maternidade para cada categoria de segurada",
      "Distinguir situações de cumulação e cessação de benefícios",
    ],
    highlight: "A EC 103/2019 mudou profundamente o cálculo da pensão por morte. É fundamental verificar a data do óbito para aplicar a regra correta — a regra nova ou a antiga pode ser muito mais favorável.",
    sections: [
      {
        title: "Dependentes e Ordem de Preferência",
        content: "O rol de dependentes do RGPS está no art. 16 da Lei 8.213/91. Ele é dividido em três classes, com preferência da mais alta sobre as demais. A existência de dependente de classe superior exclui os de classe inferior:",
        items: [
          "1ª classe (preferencial): cônjuge, companheiro(a) — inclusive união homoafetiva (STF, ADPF 132) — e filhos até 21 anos ou inválidos/com deficiência de qualquer idade",
          "2ª classe: pais — só têm direito se não houver nenhum dependente de 1ª classe",
          "3ª classe: irmãos não emancipados menores de 21 anos ou inválidos — só se não houver 1ª ou 2ª classe",
          "Dependência econômica: para cônjuge e filhos é presumida; para os demais, deve ser comprovada",
          "Ex-cônjuge com alimentos: tem direito à pensão proporcional aos alimentos recebidos — STJ, Súmula 336",
          "Dependente inválido ou com deficiência: recebe cota vitalícia (não cessa com a maioridade)",
        ],
      },
      {
        title: "Cálculo da Pensão — Regras Pré e Pós-EC 103/2019",
        content: "A data do óbito define qual regra de cálculo se aplica. Isso é crítico — a diferença de valor pode ser muito significativa:",
        items: [
          "Óbito antes de 13/11/2019 (regra anterior): pensão = 100% do salário de benefício ou da aposentadoria que o segurado recebia",
          "Óbito a partir de 13/11/2019 (EC 103): pensão = 50% (cota-base) + 10% por dependente (máx. 100%)",
          "Exemplo 1: cônjuge sem filhos → 50% + 10% = 60% do SB",
          "Exemplo 2: cônjuge + 3 filhos → 50% + 40% = 90% do SB",
          "Exemplo 3: cônjuge + 5 ou mais filhos → 50% + 50% = 100% do SB (teto)",
          "As cotas dos filhos cessam aos 21 anos e são redistribuídas para os demais dependentes",
          "A cota do cônjuge/companheiro é vitalícia (salvo novos casos de perda previstos em lei)",
        ],
      },
      {
        title: "Duração da Pensão do Cônjuge/Companheiro",
        content: "A EC 103/2019 também introduziu critérios de duração da pensão para cônjuges e companheiros, com regras progressivas baseadas na idade e no tempo de casamento. Situação muito nova e ainda com jurisprudência em formação:",
        items: [
          "Óbito do segurado não aposentado ou aposentado há menos de 18 meses + casamento/união com menos de 2 anos: pensão por 4 meses (salvo acidente, doença profissional ou doença grave incurável)",
          "Menos de 21 anos na data do óbito: 3 anos de pensão",
          "21 a 26 anos: 6 anos de pensão",
          "27 a 29 anos: 10 anos de pensão",
          "30 a 40 anos: 15 anos de pensão",
          "41 a 43 anos: 20 anos de pensão",
          "44 anos ou mais: pensão vitalícia",
          "Regras antigas se aplicam aos óbitos anteriores a 13/11/2019 — sempre verificar a data",
        ],
      },
      {
        title: "Auxílio-Reclusão",
        content: "Benefício devido aos dependentes do segurado de baixa renda que for preso. É um dos benefícios menos conhecidos mas frequentemente necessário. Exige atenção a vários detalhes práticos:",
        items: [
          "Renda do segurado: deve ser igual ou inferior ao limite estabelecido (verificar tabela vigente no INSS — atualizada periodicamente)",
          "Regimes: fechado e semiaberto — não cabe em regime aberto ou prisão domiciliar",
          "O segurado deve manter a qualidade de segurado na data da prisão",
          "Os dependentes não podem trabalhar? ERRADO — a lei não proíbe; a renda dos dependentes não interfere",
          "Cessa com: soltura, fuga, morte do segurado, perda da qualidade de segurado ou cessação da dependência econômica",
          "Valor: mesma fórmula da pensão por morte (50% + 10% por dependente para prisões após EC 103/2019)",
          "Cuidado: o INSS exige atualização bimestral do atestado de recolhimento emitido pela instituição penal",
        ],
      },
      {
        title: "Salário-Maternidade",
        content: "O salário-maternidade é pago pelo INSS a partir da competência da empregada (para empregadas, é adiantado pelo empregador e compensado com as contribuições). As regras variam muito conforme a categoria da segurada:",
        items: [
          "Empregada / trabalhadora avulsa: sem carência; 120 dias de licença; valor = salário real do mês anterior",
          "Empregada doméstica: sem carência; 120 dias; valor = último salário de contribuição",
          "Contribuinte individual / facultativa: carência de 10 contribuições; valor = 1/12 da soma dos 12 últimos SC",
          "Segurada especial: 10 meses de atividade rural; valor = 1 salário mínimo",
          "Aborto não criminoso / natimorto: 2 semanas de salário-maternidade",
          "Adoção: 120 dias independentemente da idade da criança — tanto para a mãe adotiva quanto para o pai adotivo em caso de adoção por casal homoafetivo",
          "Parto antecipado: o prazo de 120 dias começa a contar do parto, mesmo que prematuro",
        ],
      },
      {
        title: "Caso Prático: Pensão com Múltiplos Dependentes",
        type: "pratico",
        content: "Pedro faleceu em janeiro/2025, com 45 anos, empregado registrado. Deixou esposa (42 anos), dois filhos (16 e 18 anos) e seus pais. O salário de benefício era R$ 3.000. Quem tem direito e quanto recebe?",
        items: [
          "Dependentes habilitados: esposa (1ª classe) e filhos de 16 e 18 anos (1ª classe) — os pais são excluídos pela presença de dependentes de 1ª classe",
          "Aplicação da EC 103/2019 (óbito em 2025): cota-base 50% + 10% por cada um dos 3 dependentes = 80%",
          "Valor total da pensão: R$ 3.000 × 80% = R$ 2.400 por mês",
          "Distribuição das cotas: cada um dos 3 dependentes recebe 1/3 de R$ 2.400 = R$ 800",
          "Em 2 anos o filho de 18 anos faz 21 anos: sua cota (R$ 800) é redistribuída — esposa e filho menor passam a receber R$ 1.200 cada",
          "Quando o filho de 16 anos completar 21 anos: esposa fica com 60% (R$ 1.800), benefício da própria cota-base + cota do filho",
          "Duração da pensão da esposa: 42 anos na data do óbito → pensão vitalícia (≥ 44 anos na tabela EC 103)",
        ],
      },
    ],
    references: [
      { label: "Lei 8.213/91 — Arts. 16, 74 a 93 (dependentes e benefícios)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm", note: "Planalto.gov.br" },
      { label: "EC 103/2019 — Art. 23 (novo cálculo da pensão por morte)", url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm", note: "Planalto.gov.br" },
      { label: "STF — ADPF 132 (união homoafetiva como dependente previdenciário)", url: "https://portal.stf.jus.br/processos/detalhe.asp?incidente=2691371", note: "Ler tese vinculante" },
      { label: "STJ — Súmula 336 (ex-cônjuge com alimentos e pensão)", url: "https://sou.stj.jus.br/sou_internet/sumula.jsp", note: "Confirmar texto exato no portal STJ" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     05 · PREVIDÊNCIA COMPLEMENTAR
  ───────────────────────────────────────────────────────────────────── */
  "previdencia-complementar": {
    title: "Previdência Complementar",
    subtitle: "EFPC, PGBL, VGBL, portabilidade e estratégias de tributação",
    tag: "05 · Estratégico",
    objectives: [
      "Distinguir entidades fechadas (EFPC) e abertas (EAPC) e seus planos",
      "Indicar com segurança PGBL ou VGBL conforme o perfil tributário do cliente",
      "Explicar as regras de portabilidade, resgate e conversão em renda",
      "Orientar sobre as tabelas de tributação e sua otimização",
      "Identificar direitos dos participantes em caso de encerramento de plano ou saída da patrocinadora",
    ],
    highlight: "A previdência complementar é um instrumento jurídico e financeiro. O advogado que domina esse tema agrega valor imensurável ao planejamento patrimonial e sucessório do cliente.",
    sections: [
      {
        title: "Entidades Fechadas — EFPC (Fundos de Pensão)",
        content: "As EFPC são entidades sem fins lucrativos criadas por empresas (patrocinadores) ou associações/sindicatos (instituidores) para gerir planos de previdência exclusivos para seus participantes. São fiscalizadas pela Previc:",
        items: [
          "Acesso restrito: apenas empregados da patrocinadora ou membros do instituidor podem participar",
          "Plano de Benefício Definido (BD): o benefício futuro é predefinido; o risco atuarial é da entidade",
          "Plano de Contribuição Definida (CD): o benefício futuro depende do saldo acumulado; o risco é do participante",
          "Plano de Contribuição Variável (CV): híbrido — fase de acumulação em CD e fase de benefício em BD",
          "Contribuição da patrocinadora: geralmente igual ou proporcional à do participante — benefício empregatício valioso",
          "Superávit e déficit: superávit pode ser redistribuído; déficit exige plano de equacionamento que pode reduzir benefícios",
        ],
      },
      {
        title: "Direitos do Participante ao Sair do Plano (EFPC)",
        content: "Quando o participante sai da empresa antes de se aposentar, tem direitos sobre o saldo acumulado que dependem do tempo de participação — é o chamado vesting:",
        items: [
          "Resgate: devolução das próprias contribuições — sempre disponível, mas implica saída do plano",
          "Benefício Proporcional Diferido (BPD): após 3 anos de participação, o ex-participante tem direito a manter o benefício proporcional ao tempo e contribuições — não precisa sacar",
          "Portabilidade: transferência do saldo para outro plano sem incidência de IR — possível após 3 anos de participação",
          "Autopatrocínio: o participante desligado pode continuar contribuindo sozinho (sem a patrocinadora) para manter o plano ativo",
          "Aviso importante: resgate imediato tem incidência de IR sobre o ganho e pode ser desfavorável — comparar com BPD ou portabilidade",
        ],
      },
      {
        title: "PGBL — Plano Gerador de Benefício Livre",
        content: "O PGBL é o produto de previdência aberta mais indicado para quem usa a declaração completa do IRPF. Seu principal atrativo é o benefício fiscal na fase de acumulação:",
        items: [
          "Dedução fiscal: contribuições deduzem até 12% da renda bruta tributável anual na declaração completa",
          "Exemplo: renda anual de R$ 120.000 → pode deduzir até R$ 14.400 por ano em PGBL",
          "Na retirada: IR incide sobre o TOTAL resgatado (principal + rendimentos) — é um diferimento fiscal, não isenção",
          "Lógica: ao contribuir, você não paga IR agora (fica com mais dinheiro investido); ao resgatar, paga IR sobre o total, mas provavelmente com alíquota menor",
          "Ideal para: quem está na faixa de 27,5% agora e projeta renda menor na aposentadoria (< 27,5%)",
          "Limite: apenas quem contribui para o RGPS ou RPPS pode usar o PGBL com dedução",
        ],
      },
      {
        title: "VGBL — Vida Gerador de Benefício Livre",
        content: "O VGBL é tecnicamente um seguro de pessoas (regulado pela Susep), mas funciona como produto de acumulação previdenciária. Não tem o benefício fiscal na fase de acumulação, mas tem vantagens na fase de retirada e no planejamento sucessório:",
        items: [
          "Sem dedução fiscal: contribuições não são dedutíveis do IR",
          "Na retirada: IR incide APENAS sobre os rendimentos — o principal já tributado não é taxado de novo",
          "Vantagem sucessória: VGBL não entra no inventário — é transferido diretamente aos beneficiários indicados, sem ITCMD em muitos Estados e sem demora processual",
          "Indicado para: declaração simplificada, quem já esgotou o limite de 12% do PGBL, donas de casa, e como complemento ao PGBL",
          "Estratégia combinada: PGBL até o limite de 12% + VGBL para contribuições adicionais",
        ],
      },
      {
        title: "Tabelas de Tributação e Portabilidade",
        content: "A escolha da tabela de tributação é irretratável e tem impacto enorme no longo prazo. A portabilidade permite corrigir a escolha de instituição, mas não a tabela:",
        items: [
          "Tabela Progressiva: 0%, 7,5%, 15%, 22,5% ou 27,5% conforme o valor recebido. Melhor para renda pequena na aposentadoria ou resgates mensais baixos",
          "Tabela Regressiva: 35% (até 2 anos) → 30% (2-4 anos) → 25% (4-6 anos) → 20% (6-8 anos) → 15% (8-10 anos) → 10% (acima de 10 anos). Melhor para quem vai acumular por muito tempo",
          "Regra de ouro: prazo de acumulação > 10 anos → regressiva quase sempre mais vantajosa",
          "Portabilidade: transferência entre planos sem IR, mantendo a tabela original. Permite trocar de seguradora sem custo fiscal",
          "Portabilidade externa: de EFPC para EAPC ou vice-versa, após 3 anos de participação",
          "Portabilidade interna: entre fundos da mesma seguradora — sem prazo mínimo geralmente",
        ],
      },
      {
        title: "Caso Prático: PGBL ou VGBL?",
        type: "pratico",
        content: "Ana, 35 anos, advogada autônoma, renda tributável de R$ 200.000/ano, declara IR pelo modelo completo, contribui para o INSS como contribuinte individual. Quer investir R$ 3.000/mês em previdência. O que indicar?",
        items: [
          "12% de R$ 200.000 = R$ 24.000/ano de limite de dedução via PGBL",
          "R$ 3.000/mês = R$ 36.000/ano de aporte pretendido — excede o limite de dedução",
          "Estratégia ótima: R$ 24.000/ano (R$ 2.000/mês) em PGBL — usa todo o benefício fiscal",
          "Os R$ 1.000/mês restantes: investir em VGBL — sem dedução, mas IR só sobre os rendimentos na retirada",
          "Tabela indicada: regressiva — Ana tem 30 anos pela frente até os 65 anos. Após 10 anos, alíquota cai para 10%",
          "Benefício fiscal imediato do PGBL: Ana está na faixa de 27,5% de IR. Economiza R$ 6.600/ano (27,5% × R$ 24.000) só de IR diferido",
          "Planejamento sucessório: indicar beneficiários no VGBL para facilitar a transmissão sem inventário",
        ],
      },
    ],
    references: [
      { label: "LC 109/2001 — Regime de Previdência Complementar", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp109.htm", note: "Planalto.gov.br" },
      { label: "Previc — normas, resoluções e fiscalização das EFPC", url: "https://www.gov.br/previc/pt-br", note: "Confirmar resoluções vigentes" },
      { label: "Susep — regulação de PGBL e VGBL (planos abertos)", url: "https://www.gov.br/susep/pt-br", note: "Circulares e normas de seguros de pessoas" },
      { label: "Receita Federal — dedução de PGBL no IRPF", url: "https://www.gov.br/receitafederal/pt-br", note: "Confirmar limite e condições vigentes" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     06 · PROCESSO ADMINISTRATIVO E JUDICIAL
  ───────────────────────────────────────────────────────────────────── */
  "processo-administrativo": {
    title: "Processo Administrativo e Judicial",
    subtitle: "Do requerimento ao INSS à execução da sentença",
    tag: "06 · Prático",
    objectives: [
      "Conduzir o requerimento administrativo do início ao fim com segurança",
      "Interpor recursos no prazo certo perante JRPS e CRPS",
      "Definir competência, prescrição e propor a ação corretamente",
      "Manejar tutela de urgência em demandas previdenciárias",
      "Executar sentença condenatória contra o INSS e calcular honorários",
    ],
    highlight: "O prévio requerimento administrativo é condição de procedibilidade (STF, RE 631.240 — Tema 350). Sem ele, falta interesse de agir. Mas a recusa tácita por omissão do INSS já autoriza o ajuizamento.",
    sections: [
      {
        title: "Requerimento Administrativo — Passo a Passo",
        content: "O processo começa sempre no INSS. Uma condução técnica do requerimento pode poupar meses de litígio e garantir a DIB mais favorável ao cliente:",
        items: [
          "Canais de protocolo: Meu INSS (app/site), Central 135 ou agência presencial — o protocolo gera o NB (Número de Benefício) e registra a DER",
          "DER (Data de Entrada do Requerimento): define o marco de início do benefício quando deferido — nunca deixar passar sem registrar",
          "Documentação básica: CNIS atualizado, documentos de identidade, documentos específicos do benefício (laudos médicos, PPP, CTPS, etc.)",
          "Solicitar extrato do CNIS antes do requerimento: verificar se há vínculos faltantes, divergências salariais ou contribuições não computadas — corrigi-las antes aumenta o valor do benefício",
          "Prazo de análise: 45 dias para a maioria dos benefícios — esgotado sem resposta, considera-se indeferimento tácito",
          "Representação: procuração específica para assinar requerimentos em nome do cliente — registrar no Meu INSS pelo módulo de procuradores",
        ],
      },
      {
        title: "Recursos Administrativos — JRPS e CRPS",
        content: "O sistema recursal do INSS tem dois graus, disciplinados pelo Decreto 10.410/2020. Usar bem esses recursos pode resolver o caso sem precisar de ação judicial:",
        items: [
          "1ª instância — JRPS (Junta de Recursos da Previdência Social): prazo de 30 dias da ciência do indeferimento",
          "2ª instância — CRPS (Câmara de Recursos da Previdência Social): prazo de 30 dias da decisão da JRPS",
          "Recurso especial ao Conselho Pleno: para uniformização de jurisprudência administrativa — cabível quando há decisões divergentes entre câmaras do CRPS",
          "Efeito suspensivo: o recurso suspende os efeitos da decisão recorrida enquanto pendente",
          "Gratuidade: não há custas no recurso administrativo — o advogado pode atuar sem custos para o cliente",
          "Estratégia: o recurso bem fundamentado com documentação complementar pode reverter indeferimentos de perícia sem necessidade de perícia judicial",
        ],
      },
      {
        title: "Prescrição e Decadência",
        content: "Dominar os prazos extintivos é obrigação do advogado previdenciário — perder um prazo pode eliminar o direito do cliente ou parte expressiva do crédito:",
        items: [
          "Prescrição das parcelas vencidas: 5 anos — Decreto 20.910/1932 e STJ, Súmula 85. Parcelas anteriores ao quinquênio prescrevem",
          "Decadência do direito de revisão: 10 anos a partir do primeiro pagamento do benefício — art. 103 da Lei 8.213/91 (constitucional — STF, RE 626.489)",
          "Decadência não se confunde com prescrição: a decadência extingue o próprio direito; a prescrição apenas as parcelas vencidas",
          "Benefício negado e novo requerimento: não há prazo para requerer novamente — a prescrição corre apenas das parcelas, não do direito em si",
          "Ação rescisória previdenciária: 2 anos do trânsito em julgado (art. 975 CPC) — raramente cabível, mas importante conhecer",
        ],
      },
      {
        title: "Competência e Propositura da Ação",
        content: "A definição correta do juízo é essencial para a validade do processo e para a estratégia da causa:",
        items: [
          "Regra: Justiça Federal — litígios contra o INSS (autarquia federal) — art. 109, I da CF",
          "Juizado Especial Federal (JEF): causas até 60 salários mínimos — procedimento mais rápido, sem custas, sem recursos ordinários para o TRF nas causas do JEF",
          "Foro de eleição do autor: domicílio do segurado, local do acidente ou local do empregador — art. 109, §3º CF (vantagem estratégica importante)",
          "Vara Federal comum: causas acima de 60 SM ou nas quais o segurado opte por renunciar ao excedente para usar o JEF",
          "Litisconsórcio ativo: cônjuge e filhos com direito à pensão podem ser litisconsortes — não há restrição",
          "Gratuidade de justiça: presumida para o segurado — a renda é critério, mas o juiz concede amplamente em causas previdenciárias",
        ],
      },
      {
        title: "Tutela de Urgência — Pedido e Cumprimento",
        content: "A tutela antecipada é a ferramenta mais poderosa na advocacia previdenciária. Bem fundamentada, pode implantar o benefício em dias:",
        items: [
          "Requisitos (art. 300 CPC): probabilidade do direito (fumus boni iuris) + perigo de dano (periculum in mora)",
          "Probabilidade do direito: documentação médica robusta, CNIS sem pendências, laudo anterior favorável, alta programada contestada",
          "Perigo de dano: caráter alimentar do benefício + situação de vulnerabilidade econômica do autor — jurisprudência admite presunção em casos previdenciários",
          "Cumprimento: INSS tem 45 dias após intimação para implantar o benefício, sob pena de multa diária (astreintes)",
          "DIB na tutela: deve retroagir à DER — requerer expressamente na petição; tutela sem isso pode prejudicar o cliente",
          "Reversibilidade: o juiz pondera o caráter alimentar — a maioria dos TRFs defere tutela em casos de incapacidade bem documentados",
        ],
      },
      {
        title: "Execução e Honorários Advocatícios",
        content: "Após a sentença favorável, o processo de execução tem suas próprias regras, distintas da execução comum:",
        items: [
          "RPV (Requisição de Pequeno Valor): créditos até 60 SM — pagamento em até 60 dias após expedição",
          "Precatório: créditos acima de 60 SM — inscrito em ordem cronológica, pagamento no exercício seguinte (CF, art. 100)",
          "Atualização monetária: IPCA-E (RE 870.947/STF, Tema 810) — questionar a TR se o INSS tentar aplicá-la",
          "Juros de mora: 1% ao mês (juros simples) até a expedição do precatório/RPV",
          "Honorários advocatícios: 10% sobre a condenação no JEF (art. 55 Lei 9.099/95); nas varas comuns, conforme o CPC (sucumbência)",
          "Honorários na tutela parcial: se o cliente vence apenas em parte, os honorários são proporcionais — verificar o dispositivo da sentença",
        ],
      },
      {
        title: "Caso Prático: Do Requerimento à Tutela",
        type: "pratico",
        content: "Roberto, 52 anos, pedreiro, com dores crônicas na coluna por hérnia de disco, teve o auxílio-doença indeferido pelo INSS após perícia de 5 minutos. Como conduzir o caso?",
        items: [
          "1. Requerimento: verificar no CNIS se há 12 contribuições — Roberto tem 20 anos de CTPS registrada. Carência: OK",
          "2. Verificar se a hérnia de disco + atividade de pedreiro configura NTEP — provável que sim pelo CNAE de construção civil. Requerer B91",
          "3. Recurso à JRPS: protocolar em 30 dias com laudos detalhados (RMN, laudos ortopédico e neurocirúrgico) e declaração do empregador sobre limitação funcional",
          "4. Se negado na JRPS: ajuizar no JEF do domicílio de Roberto. Valor da causa: calcular 12 meses × valor estimado do benefício — provável < 60 SM",
          "5. Petição inicial: requerer tutela de urgência com base em: (a) probabilidade — perícia de 5min é insuficiente; (b) perigo — Roberto está sem renda e com família dependente",
          "6. Requerer na tutela que a DIB seja fixada na DER do requerimento original (não na data da tutela)",
          "7. Resultado esperado: tutela deferida em 48-72h com boa documentação — reimplantação imediata do benefício",
        ],
      },
    ],
    references: [
      { label: "Lei 9.784/99 — Processo Administrativo Federal", url: "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm", note: "Planalto.gov.br" },
      { label: "Decreto 10.410/2020 — Estrutura do CRPS/JRPS", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/decreto/D10410.htm", note: "Planalto.gov.br" },
      { label: "STF — RE 631.240 (Tema 350 — prévio requerimento administrativo)", url: "https://portal.stf.jus.br/processos/detalhe.asp?incidente=4803765", note: "Ler a tese fixada com atenção às exceções" },
      { label: "CPC/2015 — Arts. 300 a 311 (Tutela de Urgência)", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm", note: "Planalto.gov.br" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────
     07 · JURISPRUDÊNCIA E SÚMULAS
  ───────────────────────────────────────────────────────────────────── */
  jurisprudencia: {
    title: "Jurisprudência e Súmulas",
    subtitle: "Como pesquisar, interpretar e usar jurisprudência na prática",
    tag: "07 · Referência",
    objectives: [
      "Pesquisar jurisprudência com eficiência nos portais do STJ e STF",
      "Distinguir teses vinculantes, súmulas e obiter dicta",
      "Aplicar súmulas do STJ e teses do STF nas peças processuais",
      "Identificar recursos repetitivos vigentes e usá-los como argumento",
      "Reconhecer temas controvertidos e construir argumento de distinção",
    ],
    highlight: "Jurisprudência não é decoreba — é ferramenta. Saber onde buscar, o que é vinculante e como argumentar com ela é o que separa a advocacia técnica da genérica.",
    sections: [
      {
        title: "Hierarquia das Fontes Jurisprudenciais",
        content: "Nem toda decisão judicial tem o mesmo peso. Antes de citar jurisprudência, é preciso entender sua força vinculante e como ela se encaixa na argumentação:",
        items: [
          "Súmulas vinculantes do STF: força de lei — vinculam todos os órgãos públicos e juízes. Descumprimento abre reclamação ao STF",
          "Teses de repercussão geral (STF): vinculam todos os tribunais inferiores (art. 927 CPC) — citar o número do Tema e o RE",
          "Recursos repetitivos (STJ): vinculam os JEFs e TRFs — citar o número do Tema e o REsp paradigma",
          "Súmulas do STJ: forte influência, mas não são tecnicamente vinculantes como as do STF — ainda assim, o INSS e os juízes as seguem",
          "Acórdãos isolados: servem como argumento e fundamento, mas o juiz pode divergir. Usar quando não há tese vinculante",
          "Precedente do próprio tribunal: jurisprudência do TRF da região tem peso decisivo nos JEFs da sua circunscrição",
        ],
      },
      {
        title: "Como Pesquisar Jurisprudência com Eficiência",
        content: "Pesquisa mal feita gera citações erradas ou descontextualizadas — erro grave em peça processual. Use os portais corretos e aprenda a filtrar:",
        items: [
          "STJ (scon.stj.jus.br): filtrar por 'Previdenciário', usar operadores AND/OR nas palavras-chave, verificar se a decisão é de Turma ou de repetitivo",
          "STF (jurisprudencia.stf.jus.br): buscar por número do RE ou pelo Tema de repercussão geral — o portal mostra a tese fixada em destaque",
          "Repetitivos STJ (processo.stj.jus.br/repetitivos): lista todos os temas com status: pendente, julgado, suspenso. Sempre conferir o status antes de usar",
          "Repercussão Geral STF (portal.stf.jus.br/repercussao): mostra o status de cada tema — pendente, julgado, modulado. Verificar a tese exata e a modulação",
          "Armadilha comum: citar acórdão superado por repetitivo ou com entendimento modificado — sempre verificar a data e se houve julgamento posterior",
          "Dica: nos portais do STJ e STF, use a funcionalidade de 'acompanhar processo' para receber notificações de temas relevantes para sua prática",
        ],
      },
      {
        title: "Súmulas Essenciais do STJ em Matéria Previdenciária",
        content: "Confirmar sempre o texto exato no portal oficial (sou.stj.jus.br/sou_internet/sumula.jsp) antes de citar em peça:",
        items: [
          "Súmula 85: prescrição quinquenal das parcelas vencidas em obrigações de trato sucessivo contra a Fazenda Pública",
          "Súmula 149: prova exclusivamente testemunhal não basta para comprovar atividade rurícola para fins previdenciários",
          "Súmula 336: ex-cônjuge que renunciou aos alimentos na separação mantém direito à pensão por morte se comprovada necessidade econômica superveniente",
          "Súmula 340: a lei aplicável à concessão de pensão por morte é a vigente na data do óbito",
          "Súmula 490: dispensa de reexame necessário quando o valor da condenação ou do direito controvertido for inferior a 60 SM não se aplica a sentenças ilíquidas",
          "Súmula 568: o relator, monocraticamente, pode dar ou negar provimento ao recurso quando houver entendimento dominante no STJ",
        ],
      },
      {
        title: "Teses Vinculantes do STF — Repercussão Geral",
        content: "Confirmar status atual no portal do STF antes de usar — alguns temas podem ter sido modulados ou ter nova repercussão sobreposta:",
        items: [
          "Tema 350 (RE 631.240): exige prévio requerimento administrativo como condição para ação previdenciária — com exceções expressas (omissão, urgência, resistência)",
          "Tema 313 (RE 626.489): constitucionalidade do prazo decadencial de 10 anos para revisão de benefício (art. 103 da Lei 8.213)",
          "Tema 810 (RE 870.947): inconstitucionalidade da TR como índice de correção das condenações previdenciárias — aplicar IPCA-E",
          "Tema 704 (RE 791.961): segurado especial que exerce atividade urbana concomitante perde a qualidade de segurado especial",
          "RE 664.335: EPI eficaz não neutraliza o direito à aposentadoria especial por exposição ao ruído — confirmar modulação e extensão a outros agentes",
        ],
      },
      {
        title: "Temas Repetitivos Relevantes (STJ) — Verificar Status",
        content: "Os recursos repetitivos têm força vinculante sobre JEFs e TRFs. Verificar o status no portal antes de usar — temas pendentes podem ser usados como argumento, mas não como precedente vinculante:",
        items: [
          "Tema 995: benefícios por incapacidade devem ter prazo de cessação (DCB) fixado na concessão, a partir da Lei 13.457/2017",
          "Tema 1.012: o INSS não pode cancelar benefício concedido por decisão judicial sem prévia autorização judicial",
          "Tema 1.070: IPCA-E é o índice de correção das condenações da Fazenda Pública (alinha com Tema 810 do STF)",
          "Tema 1.124: direito adquirido à aposentadoria pelas regras anteriores à EC 103/2019 para quem completou os requisitos antes de 13/11/2019",
          "Tema 1.182: cumulação de auxílio-acidente com aposentadoria concedida antes de 11/11/1997 — verificar status atual no portal",
        ],
      },
      {
        title: "Como Usar Jurisprudência em Peças Processuais",
        content: "Citar jurisprudência errado é pior do que não citar. A técnica correta fortalece o argumento e demonstra domínio do tema ao juiz:",
        items: [
          "Identificação completa: número do processo + órgão julgador + data + relator. Ex.: 'STJ, REsp 1.648.305/RS, 3ª Seção, j. 14/02/2018, Rel. Min. Rogerio Schietti Cruz'",
          "Transcrição da tese, não do inteiro teor: cite apenas o trecho relevante (ementa ou parte do acórdão) — transcrições longas demais diluem o argumento",
          "Indicar a força vinculante: 'conforme tese fixada em recurso repetitivo, de observância obrigatória pelos termos do art. 927, III do CPC'",
          "Distinção (distinguishing): se a jurisprudência contrária ao seu cliente é vinculante, demonstre que o caso concreto tem fato diferenciador que justifica tratamento diverso",
          "Superação (overruling): se há precedente contra seu cliente mas o entendimento está em processo de mudança, argumente pela evolução e cite votos dissidentes recentes",
        ],
      },
      {
        title: "Caso Prático: Construindo Argumento com Jurisprudência",
        type: "pratico",
        content: "Seu cliente teve o benefício cessado pelo INSS com base em alta programada sem nova perícia. O juiz do JEF indeferiu a tutela de urgência por não ver urgência. Como recorrer e argumentar?",
        items: [
          "1. Interpor agravo de instrumento ao TRF (cabível contra decisão que nega tutela — art. 1.015, I CPC)",
          "2. Fundamentos: (a) o STJ no Tema 995 exige prazo de cessação, mas não dispensa a análise médica — a alta programada sem perícia viola o art. 101 da Lei 8.213",
          "3. Citar: 'A cessação de benefício por incapacidade sem perícia prévia é ilegal — precedentes dos TRFs 1, 3 e 4 nesse sentido' (pesquisar acórdãos específicos do TRF da sua região)",
          "4. Sobre a urgência: 'O caráter alimentar do benefício previdenciário presume o risco ao resultado útil do processo — STJ, AgInt no REsp 1.865.349' — pesquisar julgado mais recente no mesmo sentido",
          "5. Distinguir do caso do juiz: 'O magistrado considerou que não há urgência por o autor não estar hospitalizado; porém, a jurisprudência consolidada não exige esse nível de gravidade para benefícios alimentares'",
          "6. Resultado esperado: TRF defere a tutela no agravo — a alta programada sem perícia é amplamente rechaçada pelas cortes regionais",
        ],
      },
    ],
    references: [
      { label: "STJ — Pesquisa de Súmulas (texto oficial)", url: "https://sou.stj.jus.br/sou_internet/sumula.jsp", note: "Verificar SEMPRE o texto exato aqui antes de citar em peça" },
      { label: "STF — Repercussão Geral (teses vinculantes)", url: "https://portal.stf.jus.br/repercussao/", note: "Conferir status: pendente, julgado ou modulado" },
      { label: "STJ — Recursos Repetitivos e IAC", url: "https://processo.stj.jus.br/repetitivos/", note: "Verificar status antes de usar como precedente vinculante" },
      { label: "Pesquisa de Jurisprudência STJ", url: "https://scon.stj.jus.br/SCON/", note: "Filtrar por ramo 'Previdenciário' para maior precisão" },
      { label: "JurisSTF — Pesquisa de Jurisprudência", url: "https://jurisprudencia.stf.jus.br/pages/search", note: "Buscar por número do RE ou por assunto" },
    ],
  },
};

const fallbackTopic: TopicData = {
  title: "Módulo em Construção",
  subtitle: "Este conteúdo está sendo preparado",
  tag: "Em breve",
  objectives: ["Conteúdo disponível em breve"],
  sections: [{ title: "Em preparação", content: "Este módulo será disponibilizado em breve." }],
  references: [],
};

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topicsData[slug] ?? fallbackTopic;

  return (
    <div className="min-h-screen bg-canvas">
      <div className="px-12 pt-8">
        <div className="flex items-center gap-2 text-muted" style={{ fontSize: "12px" }}>
          <Link href="/" className="text-muted hover:text-navy transition-colors no-underline">Início</Link>
          <span className="text-border-strong">›</span>
          <span className="text-subtle">{topic.title}</span>
        </div>
      </div>

      <div className="flex gap-10 px-12 py-8" style={{ maxWidth: "1100px" }}>
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <span className="text-gold font-semibold uppercase" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
              {topic.tag}
            </span>
            <h1 className="font-display font-semibold text-navy" style={{ fontSize: "2rem", lineHeight: 1.25, marginTop: "8px", marginBottom: "8px" }}>
              {topic.title}
            </h1>
            <p className="text-muted" style={{ fontSize: "15px" }}>{topic.subtitle}</p>
          </div>

          {topic.highlight && (
            <blockquote className="mb-8" style={{ borderLeft: "3px solid var(--color-gold)", padding: "12px 16px", backgroundColor: "var(--color-surface-2)", borderRadius: "0 8px 8px 0" }}>
              <p className="font-display text-navy italic" style={{ fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                {topic.highlight}
              </p>
            </blockquote>
          )}

          <div className="prose-legal">
            {topic.sections.map((section, i) => (
              <div
                key={i}
                style={section.type === "pratico" ? {
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderLeft: "3px solid var(--color-navy)",
                  borderRadius: "0 8px 8px 0",
                  padding: "20px 20px 20px 20px",
                  margin: "24px 0",
                } : section.type === "alerta" ? {
                  backgroundColor: "#FFF8E6",
                  border: "1px solid #E8D08A",
                  borderLeft: "3px solid var(--color-gold)",
                  borderRadius: "0 8px 8px 0",
                  padding: "16px 20px",
                  margin: "16px 0",
                } : {}}
              >
                {section.type === "pratico" && (
                  <span style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-navy)",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    marginBottom: "10px",
                  }}>
                    Caso Prático
                  </span>
                )}
                <h2 style={section.type ? { marginTop: section.type === "pratico" ? "4px" : undefined } : {}}>{section.title}</h2>
                <p>{section.content}</p>
                {section.items && (
                  <ul>
                    {section.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {topic.references.length > 0 && (
            <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
              <p className="font-semibold uppercase mb-4" style={{ fontSize: "11px", letterSpacing: "0.12em", color: "var(--color-subtle)" }}>
                Fontes e Referências
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {topic.references.map((ref, i) => (
                  <li key={i} className="flex items-start gap-3 py-2.5" style={{ borderBottom: i < topic.references.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                    <span className="flex-shrink-0 mt-1" style={{ color: "var(--color-gold)", fontSize: "10px" }}>↗</span>
                    <div>
                      <a href={ref.url} target="_blank" rel="noopener noreferrer"
                        className="font-medium hover:text-navy transition-colors no-underline"
                        style={{ color: "var(--color-text)", fontSize: "13.5px" }}>
                        {ref.label}
                      </a>
                      {ref.note && (
                        <p className="mt-0.5" style={{ color: "var(--color-subtle)", fontSize: "12px", margin: 0 }}>
                          {ref.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside style={{ width: "260px", flexShrink: 0 }}>
          <div className="bg-surface border border-border rounded-xl p-5 sticky top-6">
            <p className="text-subtle font-semibold uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
              Objetivos de Aprendizado
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {topic.objectives.map((obj, i) => (
                <li key={i} className="flex gap-2.5 py-2" style={{ borderBottom: i < topic.objectives.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <span className="text-gold flex-shrink-0 mt-0.5" style={{ fontSize: "12px" }}>✦</span>
                  <span className="text-muted" style={{ fontSize: "13px", lineHeight: 1.55 }}>{obj}</span>
                </li>
              ))}
            </ul>
            <Link href="/"
              className="block text-center text-navy font-medium no-underline hover:opacity-70 transition-opacity mt-5 pt-4"
              style={{ fontSize: "13px", borderTop: "1px solid var(--color-border)" }}>
              ← Todos os módulos
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
