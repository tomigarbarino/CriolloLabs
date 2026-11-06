import Image from 'next/image'
import type { Metadata } from 'next'
import { budgetCopy } from '@/lib/budget-copy'
import { budgetPaths, type BudgetLocale } from '@/lib/contact'
import BudgetDemo from '@/components/BudgetDemo'
import BudgetLink from '@/components/BudgetLink'
import ContactLink from '@/components/ContactLink'
import DemoLink from '@/components/DemoLink'
import styles from '@/styles/budgets.module.css'

export function budgetMetadata(locale: BudgetLocale): Metadata {
  const { title, description } = budgetCopy[locale]
  const url = `https://criollo-labs.vercel.app${budgetPaths[locale]}`
  return {
    title,
    description,
    alternates: { canonical: url, languages: { 'es-AR': budgetPaths.es, 'en-GB': budgetPaths.en } },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: locale === 'en' ? 'en_GB' : 'es_AR',
      alternateLocale: locale === 'en' ? 'es_AR' : 'en_GB',
      images: [{ url: '/logo.png', alt: 'Criollo Labs' }],
    },
    twitter: { card: 'summary', title, description },
  }
}

export default function BudgetLanding({ locale }: { locale: BudgetLocale }) {
  const copy = budgetCopy[locale]
  const english = locale === 'en'
  const otherLocale = english ? 'es' : 'en'
  const home = english ? '#content' : '/es'
  const ids = english
    ? { content: 'content', example: 'example', contact: 'contact' }
    : { content: 'contenido', example: 'ejemplo', contact: 'conversemos' }
  return (
    <>
      <a className="skip-link" href={`#${ids.content}`}>
        {copy.skip}
      </a>
      <header className={`wrap ${styles.header}`}>
        <a className="brand" href={home} aria-label={copy.home}>
          <Image src="/logo.svg" alt="" width={38} height={38} />
          <span>
            Criollo <b>Labs</b>
          </span>
        </a>
        <nav aria-label={copy.nav}>
          <a href={`#${ids.example}`}>{copy.example}</a>
          <BudgetLink
            locale={otherLocale}
            className={styles.language}
            hrefLang={english ? 'es-AR' : 'en-GB'}
            lang={otherLocale}
            aria-label={copy.languageLabel}
          >
            {copy.language}
          </BudgetLink>
          <a className="button small" href={`#${ids.contact}`}>
            {copy.talk}
          </a>
        </nav>
      </header>
      <main id={ids.content} className={styles.main}>
        <section className={`wrap ${styles.hero}`}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>
            {copy.headline[0]}
            <br />
            <span>{copy.headline[1]}</span>
          </h1>
          <p className={styles.lead}>{copy.lead}</p>
          <div className="hero-actions">
            <a className="button" href={`#${ids.example}`}>
              {copy.try} <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={`#${ids.contact}`}>
              {copy.tell}
            </a>
          </div>
          <p className={styles.small}>{copy.illustrative}</p>
          <div className={styles.overview} aria-label={copy.flow}>
            {copy.flowSteps.map((label, i) => (
              <span className={styles.flowStep} key={label}>
                {i > 0 && <span aria-hidden="true">→</span>}
                {label}
              </span>
            ))}
          </div>
        </section>
        <section className={`wrap ${styles.section}`} aria-labelledby="starting-point">
          <p className={styles.eyebrow}>{copy.starting}</p>
          <h2 id="starting-point">
            {copy.problem[0]}
            <br />
            {copy.problem[1]}
          </h2>
          <div className={styles.comparison}>
            {[copy.before, copy.after].map((item) => (
              <article key={item.title}>
                <p className={styles.eyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={styles.note}>{copy.integration}</p>
        </section>
        <section id={ids.example} className={`wrap ${styles.section}`} aria-labelledby="demo-title">
          <p className={styles.eyebrow}>{copy.demoEyebrow}</p>
          <h2 id="demo-title">{copy.demoTitle}</h2>
          <p className={styles.sectionIntro}>{copy.demoIntro}</p>
          <BudgetDemo copy={copy.demo} contactHref={`#${ids.contact}`} />
        </section>
        <section className={`wrap ${styles.section}`} aria-labelledby="prototype-offer">
          <div className={styles.offerGrid}>
            <div>
              <h2 id="prototype-offer">{copy.offer.title}</h2>
              <p>{copy.offer.text}</p>
            </div>
            <div className={styles.offerDetails}>
              <p>{copy.offer.deliverable}</p>
              <p>{copy.offer.limit}</p>
              <p>{copy.offer.conditions}</p>
              <ContactLink
                className="button"
                source={english ? 'quote-follow-up-contact' : 'presupuestos-contacto'}
              >
                {copy.offer.action} <span aria-hidden="true">↗</span>
              </ContactLink>
            </div>
          </div>
        </section>
        <section className={styles.requirements} aria-labelledby="getting-started">
          <div className={`wrap ${styles.requirementsGrid}`}>
            <div>
              <p className={styles.eyebrow}>{copy.requirementsEyebrow}</p>
              <h2 id="getting-started">
                {copy.requirementsTitle[0]}
                <br />
                {copy.requirementsTitle[1]}
              </h2>
              <p>{copy.requirementsIntro}</p>
            </div>
            <ol className={styles.inputs}>
              {copy.inputs.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className={`wrap ${styles.section}`} aria-labelledby="scope">
          <h2 id="scope">{copy.scopeTitle}</h2>
          <div className={styles.faq}>
            {copy.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <p className={styles.note}>
            {copy.relatedIntro}{' '}
            {english ? copy.relatedLink : <DemoLink>{copy.relatedLink}</DemoLink>}
          </p>
        </section>
        <section id={ids.contact} className={`contact-section ${styles.contact}`}>
          <div className="wrap contact-inner">
            <p className={styles.eyebrow}>{copy.contactEyebrow}</p>
            <h2>
              {copy.contactTitle[0]}
              <br />
              {copy.contactTitle[1]}
            </h2>
            <p>{copy.contactIntro}</p>
            <ContactLink
              className="button"
              source={english ? 'quote-follow-up-contact' : 'presupuestos-contacto'}
            >
              {copy.contactAction} <span aria-hidden="true">↗</span>
            </ContactLink>
            <p className="micro">{copy.contactNote}</p>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <a className="brand" href={home}>
          Criollo Labs
        </a>
        <a href={english ? '#example' : '/es#soluciones'}>{copy.footerLink}</a>
        <small>{copy.footer}</small>
      </footer>
    </>
  )
}
