'use client'

import { useState } from 'react'
import styles from '@/styles/demo.module.css'

const steps = ['Recibir', 'Asignar', 'Dar seguimiento', 'Cerrar']
const actions = ['Recibir solicitud', 'Asignar responsable', 'Registrar avance', 'Cerrar solicitud']
const statuses = ['Por recibir', 'Sin asignar', 'En curso', 'Listo para cerrar', 'Cerrado']
const guidance = [
  [
    'Un pedido que entra, sin perderse.',
    'Recibí una solicitud ficticia de mantenimiento. Queda identificada y lista para que alguien la tome.',
  ],
  [
    'Cada pendiente tiene un responsable.',
    'Elegí quién se ocupa del pedido. El equipo puede ver a quién consultar y qué sigue.',
  ],
  [
    'El avance queda a la vista.',
    'Registrá el parte de ejemplo: la revisión terminó y el portón quedó funcionando.',
  ],
  [
    'Un cierre con contexto.',
    'Confirmá la resolución. La solicitud conserva su responsable y el recorrido del trabajo.',
  ],
  [
    'Un recorrido completo.',
    'El pedido quedó cerrado con su historial. Podés reiniciar la demo y probar con otra persona.',
  ],
]

export default function ProcessDemo() {
  const [stage, setStage] = useState(0)
  const [assignee, setAssignee] = useState('Lucía')
  const [announcement, setAnnouncement] = useState(
    'Demo lista. Primer paso: recibir una solicitud ficticia.'
  )
  const history = [
    'Solicitud recibida y registrada como DEMO-014.',
    `Responsable asignado: ${assignee}. Próximo paso: revisar el portón.`,
    `${assignee} registró: revisión terminada; portón funcionando.`,
    'Resolución confirmada. Solicitud cerrada.',
  ]

  function advance() {
    if (stage >= steps.length) return
    setAnnouncement(`${history[stage]} Paso ${stage + 1} de 4 completado.`)
    setStage((current) => Math.min(current + 1, steps.length))
  }

  function reset() {
    setStage(0)
    setAssignee('Lucía')
    setAnnouncement('Demo reiniciada. Primer paso: recibir una solicitud ficticia.')
  }

  return (
    <section className={styles.demo} aria-labelledby="demo-title">
      <div className={styles.toolbar}>
        <div className={styles.demoLabel}>
          <span aria-hidden="true" /> Demo interactiva
        </div>
        <button className={styles.reset} type="button" onClick={reset}>
          Reiniciar <span aria-hidden="true">↺</span>
        </button>
      </div>
      <p className={styles.notice}>
        Datos ficticios. Tus acciones solo cambian esta demo: no se guardan datos ni se envían
        mensajes.
      </p>
      <ol className={styles.steps} aria-label="Progreso de la solicitud">
        {steps.map((step, index) => (
          <li
            key={step}
            className={index < stage ? styles.complete : index === stage ? styles.current : ''}
            aria-current={index === stage ? 'step' : undefined}
          >
            <span className={styles.stepNumber} aria-hidden="true">
              {index < stage ? '✓' : `0${index + 1}`}
            </span>
            <span>
              {step}
              {index < stage ? <span className={styles.srOnly}>: completado</span> : null}
            </span>
          </li>
        ))}
      </ol>
      <div className={styles.workspace}>
        <div className={styles.instruction}>
          <p className={styles.eyebrow}>
            {stage === 4 ? 'Recorrido completo' : `Paso 0${stage + 1} / 04`}
          </p>
          <h2 id="demo-title">{guidance[stage][0]}</h2>
          <p>{guidance[stage][1]}</p>
          {stage === 1 ? (
            <div className={styles.field}>
              <label htmlFor="demo-assignee">Responsable de ejemplo</label>
              <select
                id="demo-assignee"
                value={assignee}
                onChange={(event) => setAssignee(event.target.value)}
              >
                <option value="Lucía">Lucía · Mantenimiento</option>
                <option value="Martín">Martín · Mantenimiento</option>
              </select>
            </div>
          ) : null}
          <button className={styles.action} type="button" onClick={stage === 4 ? reset : advance}>
            {stage === 4 ? 'Probar de nuevo' : actions[stage]}{' '}
            <span aria-hidden="true">{stage === 4 ? '↺' : '→'}</span>
          </button>
          <p className={styles.hint}>
            {stage === 4
              ? 'El historial se borra al reiniciar o recargar.'
              : 'Usá el botón para avanzar. Nada sucede fuera de esta página.'}
          </p>
        </div>
        <article className={styles.ticket} aria-label="Vista de la solicitud ficticia">
          <div className={styles.ticketTop}>
            <span className={styles.ticketId}>DEMO-014</span>
            <span className={`${styles.status} ${stage === 4 ? styles.closed : ''}`}>
              {statuses[stage]}
            </span>
          </div>
          <p className={styles.ticketType}>Solicitud de mantenimiento · Ejemplo</p>
          <h3>Revisar portón del depósito</h3>
          <p className={styles.request}>
            “El portón del depósito se traba de forma intermitente. Necesitamos una revisión.”
          </p>
          <dl className={styles.details}>
            <div>
              <dt>Origen</dt>
              <dd>
                Depósito Norte <small>(ficticio)</small>
              </dd>
            </div>
            <div>
              <dt>Responsable</dt>
              <dd>{stage >= 2 ? assignee : 'Sin asignar'}</dd>
            </div>
            <div>
              <dt>Próximo paso</dt>
              <dd>
                {
                  [
                    'Recibir el pedido',
                    'Asignar responsable',
                    'Revisar el portón',
                    'Confirmar resolución',
                    'Sin pendientes',
                  ][stage]
                }
              </dd>
            </div>
          </dl>
          <div className={styles.history}>
            <h4>Historial de esta demo</h4>
            {stage === 0 ? (
              <p className={styles.empty}>El recorrido aparece acá a medida que avanzás.</p>
            ) : (
              <ol>
                {history.slice(0, stage).map((event, index) => (
                  <li key={index}>
                    <span aria-hidden="true">✓</span>
                    <p>{event}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </article>
      </div>
      <p className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </section>
  )
}
