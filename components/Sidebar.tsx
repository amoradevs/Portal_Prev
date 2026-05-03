import Link from "next/link";

const quickLinks = [
  { label: "Meu INSS", href: "https://meu.inss.gov.br", note: "Benefícios e requerimentos" },
  { label: "Cálculo Jurídico", href: "https://calculojuridico.com.br", note: "Cálculos previdenciários" },
  { label: "Pesquisa STJ", href: "https://scon.stj.jus.br/SCON/", note: "Jurisprudência" },
  { label: "Pesquisa STF", href: "https://jurisprudencia.stf.jus.br/pages/search", note: "Repercussão geral" },
];

const topics = [
  { href: "/topicos/fundamentos", label: "Fundamentos", number: "01" },
  { href: "/topicos/beneficios-incapacidade", label: "Benefícios por Incapacidade", number: "02" },
  { href: "/topicos/aposentadorias", label: "Aposentadorias", number: "03" },
  { href: "/topicos/pensao-morte", label: "Pensão por Morte", number: "04" },
  { href: "/topicos/previdencia-complementar", label: "Prev. Complementar", number: "05" },
  { href: "/topicos/processo-administrativo", label: "Proc. Administrativo", number: "06" },
  { href: "/topicos/jurisprudencia", label: "Jurisprudência", number: "07" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen flex flex-col bg-navy" style={{ width: "260px" }}>
      {/* Logo */}
      <div className="px-6 py-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="flex items-center justify-center rounded-lg bg-gold" style={{ width: "36px", height: "36px", flexShrink: 0 }}>
            <span className="font-bold text-navy text-sm" style={{ fontFamily: "var(--font-display)" }}>P</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-display)", lineHeight: 1.2 }}>
              Portal
            </p>
            <p className="text-gold font-medium uppercase" style={{ fontSize: "10px", letterSpacing: "0.15em" }}>
              Prev
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <p className="font-semibold uppercase px-2 mb-3" style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "0.12em" }}>
          Módulos
        </p>
        <ul className="space-y-0.5">
          {topics.map((topic) => (
            <li key={topic.href}>
              <Link
                href={topic.href}
                className="group flex items-center gap-3 rounded-lg transition-all no-underline"
                style={{ padding: "10px 12px", color: "rgba(255,255,255,0.65)" }}
              >
                <span className="group-hover:opacity-100 font-mono text-gold transition-opacity" style={{ fontSize: "11px", opacity: 0.45, minWidth: "20px", flexShrink: 0 }}>
                  {topic.number}
                </span>
                <span className="group-hover:text-white transition-colors" style={{ fontSize: "13.5px" }}>{topic.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Quick Access */}
      <div className="px-4 pb-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="px-2 pt-4 pb-2 font-semibold uppercase" style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", letterSpacing: "0.12em" }}>
          Ferramentas
        </p>
        <ul className="space-y-0.5">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg no-underline transition-all"
                style={{ padding: "8px 12px", color: "rgba(255,255,255,0.55)" }}
              >
                <span className="group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-gold)", fontSize: "10px", opacity: 0.5 }}>↗</span>
                <div>
                  <span className="group-hover:text-white transition-colors" style={{ fontSize: "12.5px", display: "block" }}>{link.label}</span>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", display: "block", lineHeight: 1.2 }}>{link.note}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="px-6 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>Portal Prev · v1.0</p>
      </div>
    </aside>
  );
}
