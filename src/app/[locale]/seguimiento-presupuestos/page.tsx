import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ContactLink from '@/components/ContactLink'
import BudgetDemo from '@/components/BudgetDemo'
import DemoLink from '@/components/DemoLink'
import styles from '@/styles/budgets.module.css'

const title = 'Seguimiento de presupuestos para instalación y mantenimiento | Criollo Labs'
const description =
  'Conectá consultas, presupuestos y coordinación de trabajos. Probá un ejemplo interactivo y conversemos sobre el seguimiento que hoy hacés entre chats y planillas.'
const url = 'https://criollo-labs.vercel.app/es/seguimiento-presupuestos'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    locale: 'es_AR',
    images: [{ url: '/logo.png', alt: 'Criollo Labs' }],
  },
  twitter: { card: 'summary', title, description },
}

export default function BudgetPage({ params }: { params: { locale: string } }) {
  if (params.locale !== 'es') notFound()
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className={`wrap ${styles.header}`}>
        <a className="brand" href="/es" aria-label="Criollo Labs, inicio">
          <Image src="/logo.svg" alt="" width={38} height={38} />
          <span>
            Criollo <b>Labs</b>
          </span>
        </a>
        <nav aria-label="Principal">
          <a href="#ejemplo">Ver el ejemplo</a>
          <a className="button small" href="#conversemos">
            Conversemos
          </a>
        </nav>
      </header>
      <main id="contenido" className={styles.main}>
        <section className={`wrap ${styles.hero}`}>
          <p className={styles.eyebrow}>Instalación y mantenimiento · Software a medida</p>
          <h1>
            Mandaste el presupuesto.
            <br />
            <span>¿Quién sigue la conversación?</span>
          </h1>
          <p className={styles.lead}>
            Si las consultas llegan por mensajes y el seguimiento vive en una planilla, es fácil
            perder el próximo paso. Diseñamos una herramienta para conectar consulta, presupuesto y
            coordinación del trabajo.
          </p>
          <div className="hero-actions">
            <a className="button" href="#ejemplo">
              Probá el recorrido <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#conversemos">
              Contanos cómo lo hacen hoy
            </a>
          </div>
          <p className={styles.small}>
            Para equipos que cotizan y coordinan servicios. Un ejemplo ilustrativo, no un caso de
            cliente.
          </p>
          <div className={styles.overview} aria-label="Flujo propuesto">
            <span>Consulta</span>
            <span aria-hidden="true">→</span>
            <span>Presupuesto</span>
            <span aria-hidden="true">→</span>
            <span>Seguimiento</span>
            <span aria-hidden="true">→</span>
            <span>Trabajo coordinado</span>
          </div>
        </section>
        <section className={`wrap ${styles.section}`} aria-labelledby="hoy">
          <p className={styles.eyebrow}>El punto de partida</p>
          <h2 id="hoy">
            El problema no es la planilla.
            <br />
            Es lo que queda entre herramientas.
          </h2>
          <div className={styles.comparison}>
            <article>
              <p className={styles.eyebrow}>Cómo puede funcionar hoy</p>
              <h3>La información se mueve a mano.</h3>
              <ul>
                <li>Una consulta llega por chat y se copia a una planilla.</li>
                <li>
                  El presupuesto sale por otro canal; el seguimiento queda en la memoria de alguien.
                </li>
                <li>Cuando se acepta, coordinación vuelve a pedir datos ya conversados.</li>
              </ul>
            </article>
            <article>
              <p className={styles.eyebrow}>Qué proponemos mejorar</p>
              <h3>Un responsable y un próximo paso.</h3>
              <ul>
                <li>Una ficha reúne los datos necesarios y lo que falta confirmar.</li>
                <li>El equipo ve presupuestos pendientes y decide cuándo retomar cada uno.</li>
                <li>El trabajo aprobado pasa a coordinación con su alcance e historial.</li>
              </ul>
            </article>
          </div>
          <p className={styles.note}>
            Primero revisamos tu proceso. Una integración automática depende de los accesos y las
            posibilidades de cada herramienta; no damos por hecho que todos los chats se pueden
            conectar.
          </p>
        </section>
        <section id="ejemplo" className={`wrap ${styles.section}`} aria-labelledby="demo-titulo">
          <p className={styles.eyebrow}>De la consulta al trabajo</p>
          <h2 id="demo-titulo">Probalo con un presupuesto ficticio.</h2>
          <p className={styles.sectionIntro}>
            Cuatro decisiones muestran dónde se puede ordenar el proceso. El precio, el contacto con
            el cliente y la fecha de trabajo siguen bajo control del equipo.
          </p>
          <BudgetDemo />
        </section>
        <section className={styles.requirements} aria-labelledby="empezar">
          <div className={`wrap ${styles.requirementsGrid}`}>
            <div>
              <p className={styles.eyebrow}>Para llevarlo a tu empresa</p>
              <h2 id="empezar">
                Empezamos con un proceso.
                <br />Y con lo que ya usan.
              </h2>
              <p>
                No hace falta llegar con una especificación técnica. Sí necesitamos entender quién
                hace cada paso y dónde se traba.
              </p>
            </div>
            <ol className={styles.inputs}>
              <li>
                <strong>Un ejemplo sin datos sensibles</strong>
                <p>Cómo entra una consulta, cómo cotizan y qué ocurre al aceptarse.</p>
              </li>
              <li>
                <strong>Las herramientas actuales</strong>
                <p>
                  Planillas, correo y sistemas de gestión. Revisamos compatibilidad y permisos antes
                  de proponer conexiones.
                </p>
              </li>
              <li>
                <strong>Una persona del equipo</strong>
                <p>Alguien que conozca el trabajo, valide el flujo y pruebe la primera mejora.</p>
              </li>
              <li>
                <strong>Un criterio para evaluar</strong>
                <p>
                  Por ejemplo: saber qué presupuestos no tienen próximo paso o cuántas veces se
                  carga el mismo dato. Lo medimos antes de prometer un resultado.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className={`wrap ${styles.section}`} aria-labelledby="alcance">
          <h2 id="alcance">Qué se acuerda antes de construir.</h2>
          <div className={styles.faq}>
            <details>
              <summary>¿Hay que reemplazar nuestros sistemas?</summary>
              <p>
                No necesariamente. Revisamos si conviene conectar lo existente, mejorar una parte o
                crear una herramienta interna. La elección depende de compatibilidad, control y
                mantenimiento.
              </p>
            </details>
            <details>
              <summary>¿Qué incluye y cuánto cuesta?</summary>
              <p>
                Después de entender el proceso proponemos alcance, precio y forma de validar la
                mejora. La implementación se cotiza aparte. El acompañamiento mensual se ofrece si
                hay una necesidad recurrente; no hay un precio o plazo universal.
              </p>
            </details>
            <details>
              <summary>¿El sistema contacta clientes automáticamente?</summary>
              <p>
                Esta demo no contacta a nadie. En una implementación se acuerdan responsables,
                permisos y reglas de seguimiento. El equipo debe poder revisar el estado y detener
                acciones ante un rechazo o baja.
              </p>
            </details>
          </div>
          <p className={styles.note}>
            ¿Tu cuello de botella está después de la venta?{' '}
            <DemoLink>Probá el ejemplo de recepción y seguimiento de mantenimiento.</DemoLink>
          </p>
        </section>
        <section id="conversemos" className={`contact-section ${styles.contact}`}>
          <div className="wrap contact-inner">
            <p className={styles.eyebrow}>El próximo paso es simple</p>
            <h2>
              Contanos dónde queda
              <br />
              un presupuesto sin seguir.
            </h2>
            <p>
              En una charla inicial de 20 minutos sin cargo revisamos cómo trabajan hoy y si tiene
              sentido una mejora concreta. No hace falta que compartas datos de tus clientes.
            </p>
            <ContactLink className="button" source="presupuestos-contacto">
              Conversar por Messenger <span aria-hidden="true">↗</span>
            </ContactLink>
            <p className="micro">
              Se abre el chat con Criollo Labs en Messenger. Puede pedirte iniciar sesión en
              Facebook. Contanos qué servicio ofrecen, cómo cotizan y dónde se pierde el
              seguimiento.
            </p>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <a className="brand" href="/es">
          Criollo Labs
        </a>
        <a href="/es#soluciones">Más procesos que podemos mejorar</a>
        <small>Ejemplo ilustrativo · Sin clientes ni resultados atribuidos</small>
      </footer>
    </>
  )
}
