import TopicCard from "@/components/TopicCard";

const topics = [
  {
    number: "01",
    title: "Fundamentos da Previdência Social",
    description: "Princípios, estrutura e base constitucional do sistema previdenciário brasileiro. Regimes e sua abrangência.",
    href: "/topicos/fundamentos",
    lessonCount: 8,
    duration: "3h 20min",
    tag: "Base",
  },
  {
    number: "02",
    title: "Benefícios por Incapacidade",
    description: "Auxílio-doença, aposentadoria por invalidez e auxílio-acidente. Requisitos, carência e cálculo.",
    href: "/topicos/beneficios-incapacidade",
    lessonCount: 10,
    duration: "4h 10min",
    tag: "Prático",
  },
  {
    number: "03",
    title: "Aposentadorias",
    description: "Regras de transição, aposentadoria por idade, tempo de contribuição, especial e pontos progressivos.",
    href: "/topicos/aposentadorias",
    lessonCount: 14,
    duration: "5h 45min",
    tag: "Essencial",
    progress: 35,
  },
  {
    number: "04",
    title: "Pensão por Morte e Outros Benefícios",
    description: "Pensão por morte, auxílio-reclusão, salário-maternidade e salário-família. Dependentes e cotas.",
    href: "/topicos/pensao-morte",
    lessonCount: 9,
    duration: "3h 50min",
  },
  {
    number: "05",
    title: "Previdência Complementar",
    description: "PGBL, VGBL, fundos fechados e abertos. Portabilidade, resgate e tributação.",
    href: "/topicos/previdencia-complementar",
    lessonCount: 7,
    duration: "2h 55min",
  },
  {
    number: "06",
    title: "Processo Administrativo",
    description: "Requerimentos, recursos no INSS, prazos e o processo judicial previdenciário.",
    href: "/topicos/processo-administrativo",
    lessonCount: 11,
    duration: "4h 30min",
    tag: "Prático",
  },
  {
    number: "07",
    title: "Jurisprudência e Súmulas",
    description: "Principais súmulas do STJ e STF. Teses vinculantes e entendimentos dos TRFs sobre matéria previdenciária.",
    href: "/topicos/jurisprudencia",
    lessonCount: 12,
    duration: "5h 00min",
  },
];

const stats = [
  { value: "7", label: "Módulos" },
  { value: "71", label: "Aulas" },
  { value: "29h", label: "de conteúdo" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-canvas)" }}>

      {/* Hero */}
      <div
        className="px-12 py-16"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div style={{ maxWidth: "560px" }}>
          <span style={{
            display: "inline-block",
            color: "var(--color-gold)",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Direito Previdenciário
          </span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "var(--color-text)",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            Bem-vinda ao<br />
            <span style={{ color: "var(--color-navy)" }}>Portal Prev</span>
          </h1>
          <p style={{
            color: "var(--color-muted)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "440px",
          }}>
            Um espaço cuidadosamente organizado para aprofundar seus conhecimentos em Direito Previdenciário — da teoria à prática.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="px-12 py-5 flex gap-10"
        style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--color-navy)",
            }}>{s.value}</span>
            <span style={{ color: "var(--color-muted)", fontSize: "13px" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Topics grid */}
      <div className="px-12 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-subtle)",
          }}>
            Todos os Módulos
          </h2>
          <span style={{ fontSize: "12px", color: "var(--color-muted)" }}>
            {topics.length} módulos
          </span>
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {topics.map((topic) => (
            <TopicCard key={topic.href} {...topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
