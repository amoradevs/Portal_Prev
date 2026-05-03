import { createClient } from "@supabase/supabase-js";
import TopicCard from "@/components/TopicCard";

const topics = [
  {
    slug: "fundamentos",
    number: "01",
    title: "Fundamentos da Previdência Social",
    description: "Princípios, estrutura e base constitucional do sistema previdenciário brasileiro. Regimes e sua abrangência.",
    href: "/topicos/fundamentos",
    lessonCount: 8,
    duration: "~40 min",
    tag: "Base",
  },
  {
    slug: "beneficios-incapacidade",
    number: "02",
    title: "Benefícios por Incapacidade",
    description: "Auxílio-doença, aposentadoria por invalidez e auxílio-acidente. Requisitos, carência e cálculo.",
    href: "/topicos/beneficios-incapacidade",
    lessonCount: 8,
    duration: "~40 min",
    tag: "Prático",
  },
  {
    slug: "aposentadorias",
    number: "03",
    title: "Aposentadorias",
    description: "Regras de transição, aposentadoria por idade, tempo de contribuição, especial e pontos progressivos.",
    href: "/topicos/aposentadorias",
    lessonCount: 7,
    duration: "~35 min",
    tag: "Essencial",
  },
  {
    slug: "pensao-morte",
    number: "04",
    title: "Pensão por Morte e Outros Benefícios",
    description: "Pensão por morte, auxílio-reclusão, salário-maternidade e salário-família. Dependentes e cotas.",
    href: "/topicos/pensao-morte",
    lessonCount: 8,
    duration: "~40 min",
  },
  {
    slug: "previdencia-complementar",
    number: "05",
    title: "Previdência Complementar",
    description: "PGBL, VGBL, fundos fechados e abertos. Portabilidade, resgate e tributação.",
    href: "/topicos/previdencia-complementar",
    lessonCount: 6,
    duration: "~30 min",
  },
  {
    slug: "processo-administrativo",
    number: "06",
    title: "Processo Administrativo",
    description: "Requerimentos, recursos no INSS, prazos e o processo judicial previdenciário.",
    href: "/topicos/processo-administrativo",
    lessonCount: 7,
    duration: "~35 min",
    tag: "Prático",
  },
  {
    slug: "jurisprudencia",
    number: "07",
    title: "Jurisprudência e Súmulas",
    description: "Principais súmulas do STJ e STF. Teses vinculantes e entendimentos dos TRFs sobre matéria previdenciária.",
    href: "/topicos/jurisprudencia",
    lessonCount: 7,
    duration: "~35 min",
  },
];

const totalSections = topics.reduce((acc, t) => acc + t.lessonCount, 0);

async function getProgressByModule(): Promise<Record<string, number>> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return {};
  const supabase = createClient(url, key);
  const { data } = await supabase.from("progress").select("module_slug");
  if (!data) return {};
  return data.reduce((acc: Record<string, number>, row: { module_slug: string }) => {
    acc[row.module_slug] = (acc[row.module_slug] || 0) + 1;
    return acc;
  }, {});
}

export default async function Home() {
  const progressByModule = await getProgressByModule();

  const stats = [
    { value: "7", label: "Módulos" },
    { value: String(totalSections), label: "Seções de conteúdo" },
    { value: "~4h", label: "de estudo estimado" },
  ];

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
          {topics.map((topic) => {
            const completed = progressByModule[topic.slug] ?? 0;
            const progress = topic.lessonCount > 0
              ? Math.round((completed / topic.lessonCount) * 100)
              : 0;
            return (
              <TopicCard
                key={topic.href}
                number={topic.number}
                title={topic.title}
                description={topic.description}
                href={topic.href}
                lessonCount={topic.lessonCount}
                duration={topic.duration}
                tag={topic.tag}
                progress={progress}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
