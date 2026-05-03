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
