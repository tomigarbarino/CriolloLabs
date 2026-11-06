'use client'

import { useEffect, useRef, useState } from 'react'
import type { BudgetDemoCopy } from '@/lib/budget-copy'
import styles from '@/styles/budgets.module.css'

export default function BudgetDemo({
  copy,
  contactHref,
}: {
  copy: BudgetDemoCopy
  contactHref: string
}) {
  const [step, setStep] = useState(0)
  const [events, setEvents] = useState<string[]>([])
  const current = copy.stages[Math.min(step, copy.stages.length - 1)]
  const done = step === copy.stages.length
  const nextLink = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    if (done) nextLink.current?.focus({ preventScroll: true })
  }, [done])
  function advance() {
    if (done) return
    setEvents([...events, current.event])
    setStep(step + 1)
  }
  return (
    <div className={styles.demo}>
      <div className={styles.demoTop}>
        <span>{copy.label}</span>
        <button
          className={styles.reset}
          onClick={() => {
            setStep(0)
            setEvents([])
          }}
        >
          {copy.reset}
        </button>
      </div>
      <p className={styles.disclaimer}>{copy.disclaimer}</p>
      <noscript>
        <p>{copy.noScript}</p>
      </noscript>
      <ol className={styles.progress} aria-label={copy.progressLabel}>
        {copy.progress.map((label, i) => (
          <li key={label} aria-current={i === step ? 'step' : undefined} data-complete={i < step}>
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {label}
            {i < step && <span className="sr-only">: {copy.complete}</span>}
          </li>
        ))}
      </ol>
      <div className={styles.demoGrid}>
        <div className={styles.demoAction}>
          <p className={styles.eyebrow}>
            {done
              ? copy.completeTitle
              : `${copy.step} ${step + 1} ${copy.of} ${copy.stages.length}`}
          </p>
          <h3>{done ? copy.finalTitle : current.title}</h3>
          <p>{done ? copy.finalText : current.explanation}</p>
          {!done ? (
            <button className="button" onClick={advance}>
              {current.action} <span aria-hidden="true">→</span>
            </button>
          ) : (
            <a ref={nextLink} className="button" href={contactHref}>
              {copy.finalAction} <span aria-hidden="true">↓</span>
            </a>
          )}
          <p className={styles.small}>{copy.control}</p>
        </div>
        <article className={styles.record} aria-label={copy.recordLabel}>
          <div className={styles.recordHeader}>
            <span>PRE-014</span>
            <span>{copy.example}</span>
          </div>
          <h3>{copy.job}</h3>
          <p>{copy.company}</p>
          <div key={step} className={styles.state}>
            <dl>
              <div>
                <dt>{copy.status}</dt>
                <dd>{done ? copy.finalStatus : current.status}</dd>
              </div>
              <div>
                <dt>{copy.owner}</dt>
                <dd>{done ? copy.finalOwner : current.owner}</dd>
              </div>
              <div>
                <dt>{copy.next}</dt>
                <dd>{done ? copy.finalNext : current.next}</dd>
              </div>
            </dl>
          </div>
          <h4>{copy.history}</h4>
          {events.length ? (
            <ol className={styles.history}>
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ol>
          ) : (
            <p className={styles.small}>{copy.emptyHistory}</p>
          )}
        </article>
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {done
          ? copy.finalAnnouncement
          : `${copy.step} ${step + 1} ${copy.of} ${copy.stages.length}. ${current.title}`}{' '}
        {events.at(-1)}
      </p>
    </div>
  )
}
