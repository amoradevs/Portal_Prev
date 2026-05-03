import Link from "next/link";

interface TopicData {
  title: string;
  subtitle: string;
  tag: string;
  objectives: string[];
  sections: { title: string; content: string; items?: string[] }[];
  highlight?: string;
}

const topicsData: Record<string, TopicData> = {
  fundamentos: {
    title: "Fundamentos da Previdência Social",
    subtitle: "Base constitucional, princípios e estrutura do sistema",
    tag: "01 · Base",
    objectives: [
      "Compreender os princípios constitucionais da Seguridade Social",
      "Identificar os regimes previdenciários e sua abrangência",
      "Distinguir beneficiários obrigatórios e facultativos do RGPS",
      "Entender o conceito de filiação, inscrição e qualidade de segurado",
    ],
    highlight: "A Previdência Social é um direito social fundamental, previsto no Art. 6º da CF/88, com organização e custeio disciplinados nos Arts. 194 a 204.",
    sections: [
      {
        title: "Seguridade Social",
        content: "A Seguridade Social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.",
        items: [
          "Saúde: acesso universal e igualitário (SUS)",
          "Previdência Social: regime contributivo e obrigatório (RGPS, RPPS, RVPC)",
          "Assistência Social: para quem dela necessitar, independente de contribuição",
        ],
      },
      {
        title: "Princípios Constitucionais",
        content: "O Art. 194 da CF elenca os princípios que norteiam toda a Seguridade Social:",
        items: [
          "Universalidade da cobertura e do atendimento",
          "Uniformidade e equivalência dos benefícios",
          "Seletividade e distributividade na prestação dos benefícios",
          "Irredutibilidade do valor dos benefícios",
          "Equidade na forma de participação no custeio",
          "Diversidade da base de financiamento",
          "Caráter democrático e descentralizado da administração",
        ],
      },
      {
        title: "Regimes Previdenciários",
        content: "O sistema previdenciário brasileiro organiza-se em três regimes principais:",
        items: [
          "RGPS (Regime Geral) — gerido pelo INSS, para trabalhadores da iniciativa privada",
          "RPPS (Regime Próprio) — para servidores públicos efetivos da União, Estados e Municípios",
          "RVPC (Regime de Previdência Complementar) — voluntário, aberto ou fechado",
        ],
      },
    ],
  },
  aposentadorias: {
    title: "Aposentadorias",
    subtitle: "Regras vigentes, transição e cálculo de benefícios",
    tag: "03 · Essencial",
    objectives: [
      "Dominar as regras de aposentadoria pós-Reforma (EC 103/2019)",
      "Aplicar as regras de transição para segurados filiados antes de nov/2019",
      "Calcular o valor do benefício conforme as novas regras",
      "Identificar casos de aposentadoria especial e suas exigências",
    ],
    highlight: "A Emenda Constitucional 103/2019 (Reforma Previdenciária) alterou substancialmente as regras de aposentadoria, introduzindo idade mínima e progressividade de pontos.",
    sections: [
      {
        title: "Aposentadoria por Idade",
        content: "Após a EC 103/2019, a aposentadoria por idade exige:",
        items: [
          "65 anos (homens) / 62 anos (mulheres) — regra permanente",
          "15 anos de contribuição para mulheres e 20 anos para homens",
          "Valor: 60% do salário-de-benefício + 2% ao ano excedente a 20 anos (H) ou 15 anos (M)",
          "100% do SB exige 40 anos de contribuição (H) ou 35 anos (M)",
        ],
      },
      {
        title: "Regras de Transição",
        content: "Para segurados que já contribuíam antes de 13/11/2019, existem cinco regras alternativas:",
        items: [
          "Pedágio de 50% — apenas para quem faltava até 2 anos",
          "Pedágio de 100% — sem limite de idade, mas com fator",
          "Sistema de pontos progressivos — soma de idade + tempo de contribuição",
          "Aposentadoria por idade com tempo reduzido — transição progressiva",
          "Aposentadoria por tempo com redução de idade — comparação com regra anterior",
        ],
      },
      {
        title: "Aposentadoria Especial",
        content: "Destinada a segurados expostos a agentes nocivos (físicos, químicos ou biológicos):",
        items: [
          "15, 20 ou 25 anos de exposição, conforme o agente",
          "Exige PPP (Perfil Profissiográfico Previdenciário) e LTCAT",
          "Incompatível com retorno ao trabalho em ambiente insalubre",
          "Exposição deve ser habitual e permanente — não eventual",
        ],
      },
    ],
  },

  "beneficios-incapacidade": {
    title: "Benefícios por Incapacidade",
    subtitle: "Auxílio-doença, aposentadoria por invalidez e auxílio-acidente",
    tag: "02 · Prático",
    objectives: [
      "Distinguir auxílio-doença, aposentadoria por invalidez e auxílio-acidente",
      "Aplicar as regras de carência e qualidade de segurado a cada benefício",
      "Calcular o salário de benefício e a renda mensal inicial (RMI)",
      "Compreender o papel da perícia médica e o prazo de revisão do INSS",
    ],
    highlight: "Os benefícios por incapacidade são os mais litigados na Justiça Federal. Dominar seus requisitos é essencial para a atuação previdenciária.",
    sections: [
      {
        title: "Auxílio-Doença (B31 / B91)",
        content: "Benefício temporário devido ao segurado que fica incapaz para o trabalho ou atividade habitual por mais de 15 dias consecutivos. Espécies:",
        items: [
          "B31 — auxílio-doença previdenciário: decorre de doença ou acidente comum",
          "B91 — auxílio-doença acidentário: decorre de acidente de trabalho ou doença ocupacional",
          "Carência: 12 contribuições mensais (dispensada em acidente de qualquer natureza ou doença constante da lista MPS)",
          "Período de graça assegura manutenção da qualidade de segurado por 12 a 36 meses após última contribuição",
          "RMI: 91% do salário de benefício (média dos 80% maiores salários de contribuição desde jul/1994)",
          "Prazo fixado pelo INSS (DCB); ausência de fixação gera benefício por prazo indeterminado",
        ],
      },
      {
        title: "Aposentadoria por Invalidez (B32)",
        content: "Devida ao segurado considerado incapaz e insuscetível de reabilitação para exercício de atividade que lhe garanta subsistência. Pontos centrais:",
        items: [
          "Carência: 12 contribuições (mesmas exceções do auxílio-doença)",
          "RMI: 100% do salário de benefício",
          "Acréscimo de 25% quando o segurado necessitar de assistência permanente de outra pessoa (lista taxativa, mas STJ admite interpretação extensiva)",
          "Cessação: recuperação da capacidade, retorno ao trabalho ou morte",
          "Revisão obrigatória a cada 2 anos (art. 101 da Lei 8.213/91) — omissão do INSS não gera caducidade automática",
        ],
      },
      {
        title: "Auxílio-Acidente (B94)",
        content: "Benefício indenizatório, de caráter permanente, devido ao segurado que sofre acidente de qualquer natureza e fica com sequela que reduza sua capacidade laborativa:",
        items: [
          "Não exige carência — exige apenas qualidade de segurado no momento do acidente",
          "Valor: 50% do salário de benefício",
          "Cumulável com salário, mas NÃO cumulável com aposentadoria",
          "Cessa com a concessão de aposentadoria ou com a morte do segurado",
          "Apenas segurado empregado, trabalhador avulso e segurado especial têm direito",
        ],
      },
      {
        title: "Salário de Benefício e RMI",
        content: "O salário de benefício (SB) é a base de cálculo da maioria dos benefícios por incapacidade:",
        items: [
          "Regra geral: média aritmética de 80% dos maiores salários de contribuição desde julho/1994",
          "Limitado ao teto do RGPS — corrigidos pelo INPC",
          "Para acidentários (B91), computa-se sempre a média do período, sem possibilidade de redução por afastamentos",
          "Fator previdenciário NÃO se aplica aos benefícios por incapacidade",
        ],
      },
    ],
  },

  "pensao-morte": {
    title: "Pensão por Morte e Outros Benefícios",
    subtitle: "Pensão, auxílio-reclusão, salário-maternidade e salário-família",
    tag: "04 · Prático",
    objectives: [
      "Identificar os dependentes e a ordem de preferência na pensão por morte",
      "Calcular o valor da pensão conforme as regras pós-EC 103/2019",
      "Distinguir os requisitos do auxílio-reclusão, salário-maternidade e salário-família",
      "Aplicar as regras de cumulação e cessação de cada benefício",
    ],
    highlight: "A EC 103/2019 alterou profundamente o cálculo da pensão por morte, introduzindo cota-base de 50% + 10% por dependente, com teto de 100%.",
    sections: [
      {
        title: "Pensão por Morte",
        content: "Devida aos dependentes do segurado falecido, aposentado ou não. Requisito: qualidade de segurado na data do óbito (ou manutenção pelo período de graça).",
        items: [
          "Dependentes de 1ª classe: cônjuge/companheiro e filhos até 21 anos (ou inválidos/deficientes)",
          "Dependentes de 2ª classe: pais — concorrem apenas na ausência de 1ª classe",
          "Dependentes de 3ª classe: irmãos — concorrem apenas na ausência de 1ª e 2ª classes",
          "Cálculo pós-EC 103/2019: 50% + 10% por dependente (máx. 100%) do salário de benefício",
          "Cônjuge/companheiro perde a cota com novo casamento/união? NÃO — mantém a cota individual",
          "Cota de filho cessa aos 21 anos, salvo invalidez ou deficiência — redistribuída entre os demais dependentes",
          "Prazo para requerer: a pensão é devida a partir do óbito se requerida em até 90 dias; após, da data do requerimento",
        ],
      },
      {
        title: "Auxílio-Reclusão",
        content: "Benefício pago aos dependentes do segurado de baixa renda recolhido à prisão em regime fechado ou semiaberto. Pontos essenciais:",
        items: [
          "Exige que o segurado esteja preso — não se confunde com liberdade condicional ou prisão domiciliar",
          "Renda do segurado: deve ser igual ou inferior ao limite legal (art. 201, IV da CF e regulamento)",
          "Valor: calculado da mesma forma que a pensão por morte",
          "Cessa com a soltura, fuga, morte ou perda da qualidade de segurado",
          "Dependentes NÃO podem trabalhar — a renda dos dependentes não interfere no direito",
        ],
      },
      {
        title: "Salário-Maternidade",
        content: "Benefício pago à segurada gestante, adotante ou que obteve guarda judicial para fins de adoção. Carência varia conforme a categoria:",
        items: [
          "Empregada e trabalhadora avulsa: sem carência — basta a qualidade de segurada",
          "Empregada doméstica: sem carência — basta a qualidade de segurada",
          "Contribuinte individual e facultativa: 10 contribuições mensais",
          "Segurada especial: 10 meses de atividade rural",
          "Duração: 120 dias (parto), podendo ser de 60 dias em caso de aborto não criminoso ou natimorto",
          "Adoção: 120 dias independentemente da idade da criança (pós-Lei 12.873/2013)",
          "Valor: para empregada, igual ao salário real; para demais, média dos últimos 12 salários de contribuição",
        ],
      },
      {
        title: "Salário-Família",
        content: "Benefício pago ao segurado de baixa renda, proporcional ao número de filhos até 14 anos ou inválidos de qualquer idade:",
        items: [
          "Beneficiários: empregados, empregados domésticos e trabalhadores avulsos de baixa renda",
          "Contribuinte individual e segurado especial NÃO têm direito ao salário-família",
          "Valor: cota por filho, fixada em tabela anual pelo INSS",
          "Exige apresentação anual de certidão de nascimento e atestado de vacinação (até 7 anos) e frequência escolar (de 7 a 14 anos)",
          "Cessa aos 14 anos do filho ou com a cessação da qualidade de segurado",
        ],
      },
    ],
  },

  "previdencia-complementar": {
    title: "Previdência Complementar",
    subtitle: "Regimes fechados e abertos, PGBL, VGBL e tributação",
    tag: "05 · Estratégico",
    objectives: [
      "Distinguir a previdência complementar fechada (EFPC) da aberta (EAPC)",
      "Compreender as diferenças entre PGBL e VGBL e indicar o produto adequado",
      "Explicar as regras de portabilidade, resgate e benefício programado",
      "Orientar o cliente sobre as estratégias de tributação: tabela progressiva vs. regressiva",
    ],
    highlight: "A previdência complementar é facultativa e tem natureza contratual. Sua regulação é feita pela LC 109/2001, com supervisão da Previc (fechada) e da Susep (aberta).",
    sections: [
      {
        title: "Entidades Fechadas de Previdência Complementar (EFPC)",
        content: "Também chamadas de fundos de pensão, as EFPC são organizadas por patrocinadores (empresas) ou instituidores (associações, sindicatos). Características:",
        items: [
          "Acesso restrito a empregados da patrocinadora ou membros do instituidor",
          "Sem fins lucrativos — superávit reverte ao plano ou aos participantes",
          "Planos: Benefício Definido (BD), Contribuição Definida (CD) e Contribuição Variável (CV)",
          "Fiscalização: Previc (Superintendência Nacional de Previdência Complementar)",
          "Vesting: após 3 anos de participação, o segurado adquire direito ao benefício proporcional diferido",
          "Portabilidade para outra EFPC ou para EAPC autorizada",
        ],
      },
      {
        title: "PGBL — Plano Gerador de Benefício Livre",
        content: "Produto de previdência aberta indicado para quem faz declaração completa do IR. Características principais:",
        items: [
          "Dedução fiscal: contribuições deduzem até 12% da renda bruta tributável na declaração completa",
          "Na retirada, o IR incide sobre o TOTAL resgatado (principal + rendimentos)",
          "Indicado para: quem declara IR completo e quer diferir o imposto para a aposentadoria",
          "Plano de acumulação — o benefício pode ser renda vitalícia, por prazo certo ou pagamento único",
        ],
      },
      {
        title: "VGBL — Vida Gerador de Benefício Livre",
        content: "Tecnicamente é um seguro de pessoas (não previdência), mas funciona como produto de acumulação. Características:",
        items: [
          "Sem dedução fiscal na fase de acumulação",
          "Na retirada, o IR incide APENAS sobre os rendimentos (não sobre o principal)",
          "Indicado para: quem declara IR simplificado, já esgotou o limite de 12% do PGBL ou quer complementar",
          "Mais indicado para valores acima do limite de dedução do PGBL",
          "Em caso de morte, valores transferidos diretamente aos beneficiários sem inventário",
        ],
      },
      {
        title: "Tabelas de Tributação",
        content: "O participante escolhe o regime tributário na contratação — a escolha é irretratável:",
        items: [
          "Tabela Progressiva: alíquotas de 0% a 27,5% conforme o valor recebido — vantajosa para rendas menores na aposentadoria",
          "Tabela Regressiva: começa em 35% e reduz 5% a cada 2 anos de aplicação, chegando a 10% após 10 anos",
          "Estratégia: quanto mais longo o prazo de acumulação, mais vantajosa a tabela regressiva",
          "Portabilidade: é possível trocar de instituição sem resgatar (sem IR), mantendo o regime tributário",
        ],
      },
    ],
  },

  "processo-administrativo": {
    title: "Processo Administrativo e Judicial",
    subtitle: "Requerimentos, recursos no INSS e atuação em juízo",
    tag: "06 · Prático",
    objectives: [
      "Conduzir o requerimento administrativo no INSS com segurança",
      "Interpor recursos perante a JRPS e o CRPS dentro dos prazos",
      "Identificar a competência para as ações previdenciárias",
      "Manejar a tutela de urgência em demandas previdenciárias",
    ],
    highlight: "O prévio requerimento administrativo é condição para o ajuizamento da ação previdenciária — STF, RE 631.240/MG (repercussão geral). Sem negativa ou omissão do INSS, falta interesse de agir.",
    sections: [
      {
        title: "Requerimento Administrativo",
        content: "O primeiro passo é sempre o pedido ao INSS. Pontos críticos para o advogado:",
        items: [
          "Protocolo pelo Meu INSS (app/site), Central 135 ou agência — gera NB (Número de Benefício)",
          "Prazo de análise: 45 dias para a maioria dos benefícios (Lei 9.784/99 + IN INSS)",
          "Omissão por mais de 45 dias equivale a indeferimento tácito — já autoriza o ajuizamento",
          "DER (Data de Entrada do Requerimento) fixa o marco inicial do benefício quando deferido administrativamente",
          "Documentação: CNIS, PPP, exames médicos, laudos — requerer pelo art. 19-E da Lei 8.213 documentos em poder do empregador",
          "Representação: procuração específica para assinar requerimentos em nome do cliente",
        ],
      },
      {
        title: "Recursos Administrativos",
        content: "O sistema recursal do INSS tem dois níveis principais, disciplinados pelo Decreto 10.410/2020:",
        items: [
          "1ª instância: Junta de Recursos da Previdência Social (JRPS) — prazo de 30 dias da ciência da decisão",
          "2ª instância: Câmara de Recursos da Previdência Social (CRPS) — prazo de 30 dias da decisão da JRPS",
          "Recurso especial ao Conselho Pleno do CRPS: para uniformização de jurisprudência administrativa",
          "Efeito suspensivo: o recurso suspende os efeitos da decisão recorrida",
          "Recurso não exige advogado, mas a representação técnica qualifica o pedido",
          "Importante: o recurso interrompe a prescrição — STJ, REsp 1.381.403",
        ],
      },
      {
        title: "Competência e Ação Judicial",
        content: "Após esgotada (ou dispensada) a via administrativa, o advogado deve definir o foro:",
        items: [
          "Competência da Justiça Federal: litígios contra o INSS (autarquia federal) — art. 109, I da CF",
          "Exceção: Juizado Especial Federal (JEF) — causas até 60 salários mínimos, sem recurso ordinário para o TRF",
          "Foro de eleição do autor: domicílio do segurado, local do acidente ou local do empregador — art. 109, §3º CF",
          "Prescrição: 5 anos para parcelas vencidas — Decreto 20.910/32 (STJ, Súmula 85)",
          "Decadência: 10 anos para revisão de ato de concessão — art. 103 da Lei 8.213/91",
        ],
      },
      {
        title: "Tutela de Urgência em Matéria Previdenciária",
        content: "A antecipação de tutela é amplamente utilizada para implantar benefícios antes da sentença:",
        items: [
          "Requisitos: probabilidade do direito + perigo de dano ou risco ao resultado útil do processo (art. 300 CPC)",
          "Perigo de dano: o caráter alimentar do benefício e a situação de vulnerabilidade do segurado são fundamentos sólidos",
          "Cumprimento pelo INSS: 45 dias após a intimação, sob pena de multa (STJ, AgInt no REsp 1.865.349)",
          "DIB judicial: quando deferida a tutela, a DIB retroage à DER, salvo fundamento diverso do juiz",
          "Reversibilidade: o juiz deve ponderar — benefício previdenciário tem caráter alimentar, o que atenua a exigência",
        ],
      },
    ],
  },

  jurisprudencia: {
    title: "Jurisprudência e Súmulas",
    subtitle: "STF, STJ, TRFs e teses vinculantes em matéria previdenciária",
    tag: "07 · Referência",
    objectives: [
      "Localizar e aplicar as principais súmulas do STJ em matéria previdenciária",
      "Identificar as teses do STF com repercussão geral vinculante",
      "Usar a jurisprudência dos TRFs como argumento estratégico nas peças",
      "Distinguir temas já pacificados dos ainda controvertidos",
    ],
    highlight: "O domínio da jurisprudência é o diferencial da advocacia previdenciária. Súmulas vinculantes e temas de repercussão geral obrigam o INSS e os juízes — use-os estrategicamente.",
    sections: [
      {
        title: "Principais Súmulas do STJ",
        content: "O STJ uniformiza a interpretação da legislação federal. Súmulas essenciais para a prática previdenciária:",
        items: [
          "Súmula 85: Nas relações jurídicas de trato sucessivo em que a Fazenda Pública figure como devedora, quando não tiver sido negado o próprio direito reclamado, a prescrição atinge apenas as prestações vencidas antes do quinquênio anterior à propositura da ação.",
          "Súmula 149: A prova exclusivamente testemunhal não basta à comprovação da atividade rurícola, para efeito da obtenção de benefício previdenciário.",
          "Súmula 235: A conexão não determina a reunião dos processos, se um deles já foi julgado.",
          "Súmula 376: Compete à turma recursal processar e julgar o recurso interposto contra acórdão dos juizados especiais federais.",
          "Súmula 490: A dispensa de reexame necessário, quando o valor da condenação ou do direito controvertido for inferior a 60 salários mínimos, não se aplica a sentenças ilíquidas.",
          "Súmula 568: O relator, monocraticamente e no Superior Tribunal de Justiça, poderá dar ou negar provimento ao recurso quando houver entendimento dominante acerca do tema.",
        ],
      },
      {
        title: "Teses do STF com Repercussão Geral",
        content: "As teses fixadas em repercussão geral vinculam todos os tribunais e o próprio INSS (art. 927 CPC). Destaques:",
        items: [
          "RE 631.240 (Tema 350): Exige prévio requerimento administrativo para ajuizar ação previdenciária — exceções expressas (omissão, resistência, urgência).",
          "RE 626.489 (Tema 313): O prazo decadencial de 10 anos para revisão de benefício (art. 103 da Lei 8.213) é constitucional.",
          "RE 870.947 (Tema 810): Inconstitucionalidade da TR como índice de correção monetária dos benefícios — aplicar IPCA-E.",
          "RE 791.961 (Tema 704): O segurado especial que exerce atividade urbana concomitante perde a qualidade de segurado especial.",
          "RE 1.221.999 (Tema 1108): Possibilidade de cômputo de tempo de serviço especial após a Lei 9.032/1995 sem necessidade de laudo contemporâneo — STF ainda em julgamento.",
        ],
      },
      {
        title: "Entendimentos Relevantes dos TRFs",
        content: "Os Tribunais Regionais Federais (TRF 1ª a 6ª Regiões) têm jurisprudência consolidada em temas recorrentes:",
        items: [
          "Tempo rural: início de prova material + prova testemunhal — documento mais antigo do grupo familiar pode ser o início de prova",
          "Conversão de tempo especial: possível até hoje, mesmo após a Reforma; laudos contemporâneos têm maior peso probatório",
          "DIB em ação judicial: quando o benefício é negado administrativamente, a DIB é fixada na DER, não no ajuizamento",
          "Acréscimo de 25% na aposentadoria por invalidez: aplicável a todos os segurados do RGPS — STJ, REsp 1.648.305 (repetitivo)",
          "Soma de períodos descontínuos de trabalho rural: admitida para completar carência exigida",
        ],
      },
      {
        title: "Temas Repetitivos Relevantes (STJ)",
        content: "Os recursos repetitivos do STJ têm força vinculante sobre os JEFs e TRFs. Temas essenciais:",
        items: [
          "Tema 995: A partir de 11/08/2017 (Lei 13.457), os benefícios por incapacidade devem ter prazo de cessação fixado na concessão.",
          "Tema 1.012: O INSS não pode cancelar benefício concedido por decisão judicial sem prévia autorização judicial.",
          "Tema 1.070: O índice de correção monetária das condenações da Fazenda Pública é o IPCA-E, conforme RE 870.947 (STF).",
          "Tema 1.124: Análise do direito adquirido à aposentadoria pelas regras anteriores à EC 103/2019 para segurados que completaram os requisitos antes de 13/11/2019.",
          "Tema 1.182 (em julgamento): Possibilidade de cumulação de auxílio-acidente com aposentadoria concedida antes de 11/11/1997.",
        ],
      },
    ],
  },
};

const fallbackTopic: TopicData = {
  title: "Módulo em Construção",
  subtitle: "Este conteúdo está sendo preparado",
  tag: "Em breve",
  objectives: ["Conteúdo disponível em breve"],
  sections: [{ title: "Em preparação", content: "Este módulo será disponibilizado em breve." }],
};

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topicsData[slug] ?? fallbackTopic;

  return (
    <div className="min-h-screen bg-canvas">

      {/* Breadcrumb */}
      <div className="px-12 pt-8">
        <div className="flex items-center gap-2 text-muted" style={{ fontSize: "12px" }}>
          <Link href="/" className="text-muted hover:text-navy transition-colors no-underline">Início</Link>
          <span className="text-border-strong">›</span>
          <span className="text-subtle">{topic.title}</span>
        </div>
      </div>

      <div className="flex gap-10 px-12 py-8" style={{ maxWidth: "1100px" }}>

        {/* Main content */}
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
              <div key={i}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.items && (
                  <ul>
                    {section.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Objectives sidebar */}
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
            <Link
              href="/"
              className="block text-center text-navy font-medium no-underline hover:opacity-70 transition-opacity mt-5 pt-4"
              style={{ fontSize: "13px", borderTop: "1px solid var(--color-border)" }}
            >
              ← Todos os módulos
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
