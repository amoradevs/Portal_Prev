'use client'

import { useOptimistic, startTransition } from 'react'
import { toggleItem } from '@/lib/actions/progress'

interface SectionItem { key: string; title: string }

interface Props {
  moduleSlug: string
  sections: SectionItem[]
  initialCompleted: string[]
}

export default function ModuleProgressPanel({ moduleSlug, sections, initialCompleted }: Props) {
  const [completedKeys, addOptimistic] = useOptimistic(
    new Set(initialCompleted),
    (current: Set<string>, { key, value }: { key: string; value: boolean }) => {
      const next = new Set(current)
      if (value) next.add(key)
      else next.delete(key)
      return next
    }
  )

  function handleToggle(key: string) {
    const newValue = !completedKeys.has(key)
    startTransition(async () => {
      addOptimistic({ key, value: newValue })
      await toggleItem(moduleSlug, key, newValue)
    })
  }

  const completedCount = completedKeys.size
  const total = sections.length

  return (
    <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-subtle font-semibold uppercase" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
          Progresso
        </p>
        <span className="font-semibold" style={{ fontSize: "12px", color: "var(--color-gold)" }}>
          {completedCount}/{total}
        </span>
      </div>
      <div className="rounded-full mb-3 overflow-hidden" style={{ height: "3px", backgroundColor: "var(--color-border)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${total > 0 ? (completedCount / total) * 100 : 0}%`,
            backgroundColor: "var(--color-gold)",
          }}
        />
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {sections.map((section) => {
          const done = completedKeys.has(section.key)
          return (
            <li key={section.key} className="flex items-start gap-2 py-1.5" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <button
                onClick={() => handleToggle(section.key)}
                className="flex-shrink-0 rounded-full border transition-all duration-200"
                style={{
                  width: "14px",
                  height: "14px",
                  marginTop: "2px",
                  backgroundColor: done ? "var(--color-gold)" : "transparent",
                  borderColor: done ? "var(--color-gold)" : "rgba(0,0,0,0.2)",
                  cursor: "pointer",
                }}
                aria-label={done ? "Desmarcar" : "Marcar como concluído"}
              />
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: 1.4,
                  color: done ? "var(--color-subtle)" : "var(--color-muted)",
                  textDecoration: done ? "line-through" : "none",
                }}
              >
                {section.title}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
