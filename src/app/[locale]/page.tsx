import Image from 'next/image'
import ScrollExperience from '@/components/ScrollExperience'
import SectionMotion from '@/components/SectionMotion'
import ContactLink from '@/components/ContactLink'
import DemoLink from '@/components/DemoLink'
import BudgetLink from '@/components/BudgetLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://criollo-labs.vercel.app/es' },
}

const problems = [
  [
    '01',
    'Menos carga manual',
    'Pedidos, documentos o reportes que hoy se vuelven a copiar. Conectamos herramientas y simplificamos el recorrido de la información.',
  ],
  [
    '02',
    'Más control de la operación',
    'Tareas y pendientes repartidos entre mensajes y planillas. Diseñamos una herramienta para saber qué falta, quién lo tiene y cómo avanza.',
  ],
  [
    '03',
    'Una experiencia más simple',
    'Procesos digitales que complican al equipo o al cliente. Mejoramos el producto para que completar una tarea requiera menos pasos.',
  ],
]
const steps = [
  ['Entender', 'Revisamos un proceso, sus usuarios y dónde se pierde tiempo.'],
  ['Priorizar', 'Acordamos una mejora concreta, su alcance, precio y forma de medirla.'],
  ['Implementar', 'Diseñamos, desarrollamos y validamos con las personas que lo usan.'],
  ['Acompañar', 'Si el proceso lo necesita, seguimos con mantenimiento y mejoras mensuales.'],
]

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header wrap">
        <a className="brand" href="/es" aria-label="Criollo Labs, inicio">
          <Image src="/logo.svg" alt="" width={42} height={42} />
          <span>
            Criollo <b>Labs</b>
          </span>
        </a>
        <nav aria-label="Principal">
          <a href="#soluciones">Soluciones</a>
          <BudgetLink>Presupuestos</BudgetLink>
          <a href="#proceso">Cómo trabajamos</a>
          <a className="button small" href="#contacto">
            Hablemos
          </a>
        </nav>
      </header>
      <main id="contenido">
        <ScrollExperience />
        <SectionMotion>
          <section id="soluciones" className="section wrap">
            <h2 data-enter>
              El trabajo que hoy te frena
              <br />
              puede funcionar mejor.
            </h2>
            <div className="cards">
              {problems.map(([n, title, description]) => (
                <article className="card service-row" key={n}>
                  <h3>
                    <span className="service-index" aria-hidden="true">
                      {n}
                    </span>
                    {title}
                  </h3>
                  <p className="service-copy">{description}</p>
                  <span className="row-trace" aria-hidden="true" />
                </article>
              ))}
            </div>
            <p className="section-note">
              <BudgetLink>
                ¿Quién sigue los presupuestos que enviás? Probá el recorrido de consulta a trabajo
                coordinado <span aria-hidden="true">↗</span>
              </BudgetLink>
            </p>
            <p className="section-note">
              Herramientas internas, integraciones, mejoras de producto y automatización con IA
              cuando aporta valor.
            </p>
            <p className="section-note">
              <DemoLink>
                Probá un ejemplo interactivo <span aria-hidden="true">↗</span>
              </DemoLink>
            </p>
          </section>
          <section id="proceso" className="section process">
            <div className="wrap">
              <h2 data-enter>
                Una mejora a la vez.
                <br />
                Con criterio de producto.
              </h2>
              <div className="steps">
                <div className="process-track" aria-hidden="true">
                  <span className="process-track-fill" />
                </div>
                {steps.map(([title, description], i) => (
                  <article data-enter key={title}>
                    <span className="number">0{i + 1}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section wrap monthly">
            <div>
              <h2 data-enter>
                La mejora continúa
                <br />
                cuando el negocio cambia.
              </h2>
              <figure className="improvement-cycle">
                <svg viewBox="0 0 240 240" role="presentation" aria-hidden="true">
                  <circle cx="120" cy="120" r="82" fill="none" stroke="#d3c0e6" strokeWidth="1" />
                  <g className="cycle-orbit">
                    <circle
                      cx="120"
                      cy="120"
                      r="82"
                      fill="none"
                      stroke="#6631a0"
                      strokeWidth="3"
                      strokeDasharray="140 32"
                    />
                    <circle cx="202" cy="120" r="9" fill="#ed793f" />
                    <circle cx="79" cy="191" r="6" fill="#6631a0" />
                    <circle cx="79" cy="49" r="6" fill="#6631a0" />
                  </g>
                  <g className="cycle-core">
                    <path
                      d="M95 120h50m-25-25v50"
                      stroke="#6631a0"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="120" cy="120" r="42" fill="none" stroke="#c8bdd3" />
                  </g>
                </svg>
                <figcaption>Observar · Priorizar · Mejorar</figcaption>
              </figure>
            </div>
            <div data-enter className="monthly-copy">
              <p className="intro">Un servicio mensual con trabajo concreto.</p>
              <p>
                Revisión del proceso, mantenimiento de lo implementado y mejoras priorizadas.
                Acordamos capacidad, canales y tiempos de atención antes de empezar.
              </p>
              <p>
                La implementación se cotiza por separado. El acompañamiento mensual se propone
                cuando existe una necesidad recurrente.
              </p>
            </div>
          </section>
          <section className="section wrap">
            <h2 data-enter>
              No necesitás saber de tecnología.
              <br />
              Necesitás conocer tu operación.
            </h2>
            <p data-enter className="body-copy">
              Podemos revisar procesos de distribución y comercio, servicios de instalación y
              mantenimiento, administración de alquileres, estudios contables o educación. La
              primera conversación sirve para entender si podemos ayudarte.
            </p>
            <div className="faq">
              <details data-enter>
                <summary>¿Qué incluye la charla gratuita?</summary>
                <p>
                  Veinte minutos para entender un proceso y evaluar una oportunidad concreta. No
                  incluye una auditoría completa ni una implementación gratuita.
                </p>
              </details>
              <details data-enter>
                <summary>¿Cuánto cuesta y cuánto tarda?</summary>
                <p>
                  Depende del alcance, las herramientas existentes y los accesos necesarios. Después
                  de revisar el proceso, presentamos una propuesta con entregables, precio y plazos.
                </p>
              </details>
              <details data-enter>
                <summary>¿Hace falta reemplazar todos nuestros sistemas?</summary>
                <p>
                  Primero evaluamos lo que ya usás. A veces alcanza con conectar herramientas o
                  simplificar un paso; otras veces conviene desarrollar una solución a medida.
                </p>
              </details>
            </div>
          </section>
          <section id="contacto" className="contact-section">
            <div className="wrap contact-inner">
              <h2 data-enter>
                ¿Qué tarea te gustaría
                <br />
                <span className="contact-emphasis">
                  dejar de repetir?
                  <span className="contact-stroke" aria-hidden="true" />
                </span>
              </h2>
              <p data-enter>
                Contanos qué hace tu empresa, qué proceso te consume tiempo y qué herramientas
                usás hoy.
              </p>
              <ContactLink data-enter className="button contact-action" source="web-contacto">
                Contanos por Messenger<span aria-hidden="true">↗</span>
              </ContactLink>
              <p className="micro">
                Se abre el chat con Criollo Labs en Messenger. Puede pedirte iniciar sesión en
                Facebook.
                <br />
                Charla de 20 minutos sin cargo. La implementación se cotiza aparte; el
                acompañamiento mensual se propone si hace falta.
              </p>
            </div>
          </section>
        </SectionMotion>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="/es">
          <Image src="/logo.svg" alt="" width={30} height={30} />
          <span>Criollo Labs</span>
        </a>
        <p>Software para mejorar tu operación.</p>
        <ContactLink source="web-footer">Messenger</ContactLink>
        <small>© {new Date().getFullYear()} Criollo Labs</small>
      </footer>
    </>
  )
}
