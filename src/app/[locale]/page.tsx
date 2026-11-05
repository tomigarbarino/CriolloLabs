import Image from 'next/image'

const contact = 'https://www.facebook.com/61560108969186/'
const problems = [
  ['01', 'Menos carga manual', 'Pedidos, documentos o reportes que hoy se vuelven a copiar. Conectamos herramientas y simplificamos el recorrido de la información.'],
  ['02', 'Más control de la operación', 'Tareas y pendientes repartidos entre mensajes y planillas. Diseñamos una herramienta para saber qué falta, quién lo tiene y cómo avanza.'],
  ['03', 'Una experiencia más simple', 'Procesos digitales que complican al equipo o al cliente. Mejoramos el producto para que completar una tarea requiera menos pasos.'],
]
const steps = [
  ['Entender', 'Revisamos un proceso, sus usuarios y dónde se pierde tiempo.'],
  ['Priorizar', 'Acordamos una mejora concreta, su alcance, precio y forma de medirla.'],
  ['Implementar', 'Diseñamos, desarrollamos y validamos con las personas que lo usan.'],
  ['Acompañar', 'Si el proceso lo necesita, seguimos con mantenimiento y mejoras mensuales.'],
]

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header wrap">
      <a className="brand" href="/es" aria-label="Criollo Labs, inicio"><Image src="/logo.svg" alt="" width={42} height={42}/><span>Criollo <b>Labs</b></span></a>
      <nav aria-label="Principal"><a href="#soluciones">Soluciones</a><a href="#proceso">Cómo trabajamos</a><a className="button small" href="#contacto">Hablemos</a></nav>
    </header>
    <main id="contenido">
      <section className="hero wrap">
        <div><p className="eyebrow">PRODUCTO · SOFTWARE · IA</p><h1>Menos tareas repetidas.<br/><span>Más espacio para crecer.</span></h1><p className="intro">Tu operación creció. Hagamos que tus herramientas la acompañen.</p><p className="body-copy">En Criollo Labs entendemos el problema, diseñamos la solución y la llevamos a producción. Un proceso concreto, un alcance claro y una forma de medir si mejora.</p><div className="hero-actions"><a className="button" href="#contacto">Revisemos tu proceso <span aria-hidden="true">↗</span></a><a className="text-link" href="#soluciones">Qué podemos resolver ↓</a></div><p className="micro">Charla inicial sin cargo · 20 minutos</p></div>
        <div className="workflow" aria-label="Ejemplo ilustrativo de un proceso ordenado">
          <div className="workflow-top"><span className="status-dot"/> UNA OPERACIÓN MÁS CLARA <span>↗</span></div>
          <p className="workflow-title">Cada pedido,<br/>con su próximo paso.</p>
          <div className="flow-row"><span className="step-icon">01</span><div><strong>Información reunida</strong><small>Un punto de entrada</small></div><span className="pill">Recibido</span></div>
          <div className="flow-row"><span className="step-icon">02</span><div><strong>Responsable asignado</strong><small>El equipo sabe qué sigue</small></div><span className="pill">En curso</span></div>
          <div className="flow-row"><span className="step-icon">03</span><div><strong>Seguimiento visible</strong><small>Menos pendientes sueltos</small></div><span className="pill purple">A revisar</span></div>
          <p className="micro">Ejemplo ilustrativo. La solución se diseña para tu proceso.</p>
        </div>
      </section>
      <section id="soluciones" className="section wrap"><p className="eyebrow">EMPEZAMOS POR EL PROBLEMA</p><h2>El trabajo que hoy te frena<br/>puede funcionar mejor.</h2><div className="cards">{problems.map(([n,title,description])=><article className="card" key={n}><span className="number">{n}</span><h3>{title}</h3><p>{description}</p></article>)}</div><p className="section-note">Herramientas internas, integraciones, mejoras de producto y automatización con IA cuando aporta valor.</p></section>
      <section id="proceso" className="section process"><div className="wrap"><p className="eyebrow">DE LA CONVERSACIÓN A LA IMPLEMENTACIÓN</p><h2>Una mejora a la vez.<br/>Con criterio de producto.</h2><div className="steps">{steps.map(([title,description],i)=><article key={title}><span className="number">0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="section wrap monthly"><div><p className="eyebrow">IMPLEMENTACIÓN + ACOMPAÑAMIENTO</p><h2>La mejora continúa<br/>cuando el negocio cambia.</h2></div><div><p className="intro">Un servicio mensual con trabajo concreto.</p><p>Revisión del proceso, mantenimiento de lo implementado y mejoras priorizadas. Acordamos capacidad, canales y tiempos de atención antes de empezar.</p><p>La implementación se cotiza por separado. El acompañamiento mensual se propone cuando existe una necesidad recurrente.</p></div></section>
      <section className="section wrap"><p className="eyebrow">PARA EMPRESAS QUE TIENEN MUCHO POR HACER</p><h2>No necesitás saber de tecnología.<br/>Necesitás conocer tu operación.</h2><p className="body-copy">Podemos revisar procesos de distribución y comercio, servicios de instalación y mantenimiento, administración de alquileres, estudios contables o educación. La primera conversación sirve para entender si podemos ayudarte.</p><div className="faq"><details><summary>¿Qué incluye la charla gratuita?</summary><p>Veinte minutos para entender un proceso y evaluar una oportunidad concreta. No incluye una auditoría completa ni una implementación gratuita.</p></details><details><summary>¿Cuánto cuesta y cuánto tarda?</summary><p>Depende del alcance, las herramientas existentes y los accesos necesarios. Después de revisar el proceso, presentamos una propuesta con entregables, precio y plazos.</p></details><details><summary>¿Hace falta reemplazar todos nuestros sistemas?</summary><p>Primero evaluamos lo que ya usás. A veces alcanza con conectar herramientas o simplificar un paso; otras veces conviene desarrollar una solución a medida.</p></details></div></section>
      <section id="contacto" className="contact-section"><div className="wrap contact-inner"><p className="eyebrow">HABLEMOS DE TU OPERACIÓN</p><h2>¿Qué tarea te gustaría<br/>dejar de repetir?</h2><p>Contanos qué hace tu empresa, qué proceso te consume tiempo y qué herramientas usás hoy.</p><a className="button" href={contact} target="_blank" rel="noopener noreferrer">Escribinos en Facebook <span aria-hidden="true">↗</span></a><p className="micro">Abrí nuestra página y elegí Mensaje.<br/>Charla inicial sin cargo · Implementación y servicio mensual por separado.</p></div></section>
    </main>
    <footer className="wrap footer"><a className="brand" href="/es"><Image src="/logo.svg" alt="" width={30} height={30}/><span>Criollo Labs</span></a><p>Software para mejorar tu operación.</p><a href={contact} target="_blank" rel="noopener noreferrer">Facebook ↗</a><small>© {new Date().getFullYear()} Criollo Labs</small></footer>
  </>
}
