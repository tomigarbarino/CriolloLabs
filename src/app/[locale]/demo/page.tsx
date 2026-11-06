import type { Metadata } from 'next'
import Image from 'next/image'
import ProcessDemo from '@/components/ProcessDemo'
import ContactLink from '@/components/ContactLink'
import BudgetLink from '@/components/BudgetLink'
import styles from '@/styles/demo.module.css'

export const metadata: Metadata = {
  title: 'Probá un proceso más simple | Criollo Labs',
  description:
    'Una demo interactiva con datos ficticios: recibí una solicitud, asignala, registrá un avance y cerrala.',
  alternates: { canonical: 'https://criollo-labs.vercel.app/es/demo' },
}

export default function DemoPage({ params }: { params: { locale: string } }) {
  const home = `/${params.locale}`

  return (
    <>
      <a className="skip-link" href="#demo-contenido">
        Saltar al contenido
      </a>
      <header className={`wrap ${styles.header}`}>
        <a className="brand" href={home} aria-label="Criollo Labs, inicio">
          <Image src="/logo.svg" alt="" width={38} height={38} />
          <span>
            Criollo <b>Labs</b>
          </span>
        </a>
        <a className={styles.back} href={home}>
          ← Volver al inicio
        </a>
      </header>
      <main id="demo-contenido" className={`wrap ${styles.main}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Un proceso, de punta a punta</p>
          <h1>
            Del pedido suelto
            <br />
            al trabajo <span>resuelto.</span>
          </h1>
          <p>
            Probá cómo una solicitud puede tener un responsable, un próximo paso y un cierre claro.
            Cuatro acciones, en un mismo lugar.
          </p>
        </div>
        <ProcessDemo />
        <p className={styles.back}>
          <BudgetLink>
            ¿Tu problema empieza al cotizar? Mirá el ejemplo de seguimiento de presupuestos →
          </BudgetLink>
        </p>
        <section className={styles.contact} aria-labelledby="demo-contacto">
          <div>
            <p className={styles.eyebrow}>Ahora, tu operación</p>
            <h2 id="demo-contacto">¿Dónde se traba tu proceso?</h2>
            <p>
              Esta es una muestra de interacción. La herramienta para tu equipo se diseña según su
              forma de trabajar.
            </p>
          </div>
          <div>
            <ContactLink className="button" source="demo-proceso">
              Hablemos de tu proceso <span aria-hidden="true">↗</span>
            </ContactLink>
            <p className="micro">
              Se abre Messenger de Criollo Labs. Puede pedirte iniciar sesión en Facebook.
            </p>
          </div>
        </section>
      </main>
      <footer className={`wrap ${styles.footer}`}>
        <span>Criollo Labs · Software para mejorar tu operación.</span>
        <span>Demo ilustrativa · Sin datos reales</span>
      </footer>
    </>
  )
}
