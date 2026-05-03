interface LawLink { name: string; url: string; desc: string }

export default function LawLinks({ laws }: { laws: LawLink[] }) {
  if (!laws || laws.length === 0) return null
  return (
    <div className="mb-8">
      <p className="font-semibold uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "0.12em", color: "var(--color-subtle)" }}>
        Legislação do Módulo
      </p>
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        {laws.map((law) => (
          <a
            key={law.url}
            href={law.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 rounded-lg p-3 no-underline transition-all"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <span style={{ color: "var(--color-gold)", fontSize: "13px", flexShrink: 0, marginTop: "1px" }}>↗</span>
            <div>
              <p className="font-medium" style={{ fontSize: "12.5px", margin: 0, lineHeight: 1.3, color: "var(--color-navy)" }}>
                {law.name}
              </p>
              <p style={{ fontSize: "11px", color: "var(--color-subtle)", margin: 0, marginTop: "2px" }}>
                {law.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
