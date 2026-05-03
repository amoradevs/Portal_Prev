import Link from "next/link";

interface TopicCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  lessonCount: number;
  duration: string;
  progress?: number;
  tag?: string;
}

export default function TopicCard({ number, title, description, href, lessonCount, duration, progress = 0, tag }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border bg-surface p-6 hover:border-navy hover:shadow-lg hover:-translate-y-px transition-all duration-200 no-underline"
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-gold/60 font-semibold" style={{ fontSize: "12px" }}>{number}</span>
        {tag && (
          <span className="rounded-full bg-navy/8 text-navy font-semibold uppercase" style={{ fontSize: "10px", letterSpacing: "0.08em", padding: "3px 8px" }}>
            {tag}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="font-display font-semibold text-text group-hover:text-navy transition-colors mb-2"
        style={{ fontSize: "1.0625rem", lineHeight: 1.4 }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-muted mb-5"
        style={{
          fontSize: "13.5px",
          lineHeight: 1.65,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-subtle" style={{ fontSize: "12px" }}>{lessonCount} seções</span>
          <span className="text-border-strong" style={{ fontSize: "12px" }}>·</span>
          <span className="text-subtle" style={{ fontSize: "12px" }}>{duration}</span>
        </div>

        {progress > 0 && (
          <div className="flex items-center gap-2">
            <div className="rounded-full overflow-hidden bg-border" style={{ width: "64px", height: "3px" }}>
              <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-subtle" style={{ fontSize: "11px" }}>{progress}%</span>
          </div>
        )}
      </div>
    </Link>
  );
}
