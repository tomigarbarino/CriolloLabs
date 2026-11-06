'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/budgets.module.css'

const stages = [
  {
    title: 'Una consulta, un registro.',
    action: 'Registrar consulta',
    status: 'Consulta por registrar',
    owner: 'Sin asignar',
    next: 'Revisar medidas y alcance',
    explanation:
      'Hoy: el pedido queda en un chat y alguien vuelve a copiarlo. Propuesta: una ficha reúne el pedido y señala los datos que faltan.',
    event: 'Consulta registrada. Falta confirmar medidas antes de cotizar.',
  },
  {
    title: 'El presupuesto tiene un próximo paso.',
    action: 'Confirmar datos y simular envío',
    status: 'Consulta registrada · por revisar',
    owner: 'Comercial',
    next: 'Confirmar medidas, alcance y precio',
    explanation:
      'Una persona confirma los datos y el precio. Después del envío, el equipo puede ver quién sigue el presupuesto y cuándo retomarlo.',
    event: 'Presupuesto ficticio marcado como enviado. Seguimiento asignado a Comercial.',
  },
  {
    title: 'Recordar sin perseguir a ciegas.',
    action: 'Simular aceptación',
    status: 'Presupuesto enviado · seguimiento pendiente',
    owner: 'Comercial',
    next: 'Consultar si necesita aclaraciones',
    explanation:
      'El pendiente aparece en una vista compartida. El responsable decide si corresponde contactar; una baja o rechazo detiene el seguimiento.',
    event: 'Aceptación ficticia registrada. Coordinación recibe el trabajo con su historial.',
  },
  {
    title: 'De la aceptación a la coordinación.',
    action: 'Coordinar trabajo',
    status: 'Aceptado · por coordinar',
    owner: 'Coordinación',
    next: 'Acordar fecha y confirmar materiales',
    explanation:
      'La consulta, el alcance aprobado y el historial viajan con el trabajo. Coordinación verifica disponibilidad antes de comprometer una fecha.',
    event: 'Trabajo ficticio coordinado. El historial conserva el recorrido completo.',
  },
]

export default function BudgetDemo() {
  const [step, setStep] = useState(0)
  const [events, setEvents] = useState<string[]>([])
  const current = stages[Math.min(step, stages.length - 1)]
  const done = step === stages.length
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
        <span>Ejemplo interactivo · datos ficticios</span>
        <button
          className={styles.reset}
          onClick={() => {
            setStep(0)
            setEvents([])
          }}
        >
          Reiniciar demo
        </button>
      </div>
      <p className={styles.disclaimer}>
        No guarda datos ni envía mensajes. Las acciones sólo cambian este ejemplo.
      </p>
      <noscript>
        <p>
          Activá JavaScript para probar los botones. El proceso y la propuesta se pueden leer en
          esta página.
        </p>
      </noscript>
      <ol className={styles.progress} aria-label="Etapas del ejemplo">
        {['Consulta', 'Presupuesto', 'Seguimiento', 'Coordinación'].map((label, i) => (
          <li key={label} aria-current={i === step ? 'step' : undefined} data-complete={i < step}>
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {label}
            {i < step && <span className="sr-only">: completado</span>}
          </li>
        ))}
      </ol>
      <div className={styles.demoGrid}>
        <div className={styles.demoAction}>
          <p className={styles.eyebrow}>{done ? 'Recorrido completo' : `Paso ${step + 1} de 4`}</p>
          <h3>{done ? 'Un trabajo con contexto, de punta a punta.' : current.title}</h3>
          <p>
            {done
              ? 'La mejora propuesta es dar visibilidad al próximo paso y evitar volver a cargar lo que el equipo ya sabe. El diseño real depende de tu operación.'
              : current.explanation}
          </p>
          {!done ? (
            <button className="button" onClick={advance}>
              {current.action} <span aria-hidden="true">→</span>
            </button>
          ) : (
            <a ref={nextLink} className="button" href="#conversemos">
              Llevarlo a mi proceso <span aria-hidden="true">↓</span>
            </a>
          )}
          <p className={styles.small}>
            Vos decidís cuándo avanzar. No hay reproducción automática.
          </p>
        </div>
        <article className={styles.record} aria-label="Ficha del presupuesto ficticio">
          <div className={styles.recordHeader}>
            <span>PRE-014</span>
            <span>Ejemplo</span>
          </div>
          <h3>Instalación de portón</h3>
          <p>Depósito Norte · empresa ficticia</p>
          <div key={step} className={styles.state}>
            <dl>
              <div>
                <dt>Estado</dt>
                <dd>{done ? 'Coordinado · listo para ejecutar' : current.status}</dd>
              </div>
              <div>
                <dt>Responsable</dt>
                <dd>{done ? 'Coordinación' : current.owner}</dd>
              </div>
              <div>
                <dt>Próximo paso</dt>
                <dd>{done ? 'Ejecutar y registrar el cierre' : current.next}</dd>
              </div>
            </dl>
          </div>
          <h4>Historial compartido</h4>
          {events.length ? (
            <ol className={styles.history}>
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ol>
          ) : (
            <p className={styles.small}>Avanzá para ver cómo se conecta el trabajo.</p>
          )}
        </article>
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {done
          ? 'Recorrido completo. Trabajo coordinado.'
          : `Paso ${step + 1} de 4. ${current.title}`}{' '}
        {events.at(-1)}
      </p>
    </div>
  )
}
