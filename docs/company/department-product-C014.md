# Producto C014 — WEB01

> WEB02 ENTREGADO: versión inglesa de esta misma experiencia publicada y verificada. Ver sección WEB02 al final; WEB01 se conserva como entrega histórica.

> WEB03: [medición UK y disparador de mejora acordados con Chief](landing-uk-measurement-WEB03.md). Investigación READONLY terminada; aplicación sin cambios hasta feedback/defecto real. Sales conserva fuente comercial, sin otro CRM/servicio/scheduler.

6/11/2026, Buenos Aires. Responsable: Ingeniería y Producto. [Ticket y aceptación](landing-presupuestos-ticket.md).

## Control de integración

Chief confirmó este chat como único responsable del release web. Lock lógico WEB01 tomado; raíz compartida no se edita. Base `origin/master` ec51290, rama/worktree `codex/seguimiento-presupuestos`. Sólo se publicará este delta, no el conjunto de cambios locales del Chief. Sin servicios pagos ni nueva obligación económica. Coste del modelo no medido.

## Entregable

Landing en español `/es/seguimiento-presupuestos`: instalación/mantenimiento, consulta → presupuesto → seguimiento → coordinación. Explica situación actual, mejora propuesta, decisiones humanas, compatibilidad, aportes del cliente y próximo paso Messenger con advertencia de posible login. Una sola página específica con contenido propio, ejemplo inequívocamente ficticio; sin testimonios, cifras de ahorro ni clientes inventados.

Demo con cuatro acciones voluntarias, historial, estado y responsable; reinicio y anuncio accesible. No persiste ni contacta terceros. Animación breve del estado, deshabilitada con movimiento reducido; foco al CTA al terminar. Identidad `DESIGN.md`: Brygada/Onest, lavanda, tinta ciruela, logo existente. Sin 3D ni librerías nuevas en esta ruta.

Metadatos y canonical propios, Open Graph/Twitter, jerarquía semántica, sitemap con landing/demo e interenlaces. Portada enlaza caso específico; demo de mantenimiento enlaza al caso y explica destino Messenger.

## Segunda prioridad resuelta en el paquete

ENG-D001-01: se integra únicamente `getDemoUrl`, `DemoLink`, sustitución del enlace y tres regresiones aceptadas del trabajo previo. `BudgetLink` reutiliza el mismo saneamiento para el nuevo recorrido. Navegación conserva sólo cinco UTMs permitidas, con longitud limitada y destino fijo; no cookies ni almacenamiento. Sin JS, los href internos limpios siguen funcionando y pierden atribución. Valores UTM deben ser etiquetas de campaña sin información personal; el saneamiento no detecta semánticamente PII.

## Verificación previa

- `npm ci` detectó `@swc/helpers` ausente del lock. `npm install` completó el registro opcional peer de next-intl (8 líneas); no se cambió package.json ni se agregó proveedor.
- Lint sin advertencias; primera compilación estática aprobada, landing ~3.14kB de ruta / ~95.8kB primera carga JS. No es una medición de Core Web Vitals en campo.
- Siete regresiones contacto/atribución aprobadas.
- Navegador local: cuatro acciones, historial de cuatro eventos, reinicio, acción con Enter y foco final al CTA comprobados. 390px y 320px sin scroll horizontal; botones de demo >=44px; corrección de etiquetas a320px. Movimiento reducido emulado: media query true y animación del estado `none`.
- A/B: portada → demo → Messenger conserva `a_tiempo` y `b_repeticion`; enlace a nueva landing también. `token` ajeno excluido. La URL ref no acredita recepción, interés ni conversión.
- Durante edición con Fast Refresh se observaron errores de módulos webpack; se requiere repetir humo en build de producción sin HMR antes de cerrar.

Evidencia visual y resultados técnicos privados en `operations/landing-20261106`. No se enviaron mensajes comerciales ni se tocó Meta.

## Uso comercial y siguiente prioridad

Chief puede compartir el caso cuando el prospecto mencione presupuestos que quedan sin próximo paso o recarga de datos al coordinar trabajos. Frase de presentación sugerida: «Este ejemplo muestra cómo conectar una consulta, su presupuesto y la coordinación del trabajo. ¿En qué paso se les pierde el seguimiento hoy?». Es una demostración de proceso; no un producto ya integrado ni prueba de resultados.

Idioma exacto: español. C014 incluye prospectos británicos; no presentar esta URL como material inglés. Siguiente prioridad propuesta: localizar esta misma experiencia, verificando idioma de documento, contenido, demo y contacto de punta a punta. No generar páginas casi idénticas por sector. Medición comercial: conversación calificada comprobada en fuente y objeciones reales; no inferir conversión por clic.

## Publicación — ENTREGADO

Build final aprobado con tipos/lint, 17 páginas generadas; ruta nueva 3.26kB / 95.9kB JS inicial. Humo sobre `next start` (sin HMR), en pestaña nueva: cuatro transiciones, reinicio y cero errores de consola. Los errores durante Fast Refresh no se reprodujeron en el build de producción.

Código publicado en `master`: [22141ab](https://github.com/tomigarbarino/CriolloLabs/commit/22141ab). [Landing utilizable](https://criollo-labs.vercel.app/es/seguimiento-presupuestos). Deployment `dpl_GsYENbgPRGpPTUnSTG6jvjJJFeu7`, target production, `READY`, alias estable confirmado por CLI. Sólo el paquete aislado sobre ec51290; trabajo ajeno de raíz conservado.

Comprobación pública del 6/11/2026, Buenos Aires: portada, landing, demo, sitemap y robots HTTP200; canonical correcto en las tres páginas, sin noindex observado. Landing y demo incorporadas al sitemap. Navegador público: cuatro acciones hasta coordinado, cero errores de consola en ese recorrido, CTA final abre Messenger con página320363084498026 y ref del caso/UTMs. Apareció login Messenger; **no se inició sesión ni envió un mensaje**, no se acredita recepción. Repetidas ambas variantes A/B en navegación pública portada→demo→CTA, y enlace a caso específico con UTMs; token ajeno excluido. Interfaz pública móvil inspeccionada y guardada; escritorio y breakpoints también verificados en build local. Logs de errores de este deployment consultados sin registros encontrados en alcance; no prueba ausencia global de fallos.

Lock WEB01 liberado. Chief puede usar la versión española desde ahora en conversaciones pertinentes. La localización inglesa queda siguiente prioridad; no se amplió el release por ese trabajo. No se modificaron campaña, destinatarios, estrategia ni presupuesto. Ningún resultado de conversión o posicionamiento SEO afirmado.

## WEB02 — versión inglesa para prospección británica

6/11/2026. [Ticket](landing-english-ticket.md). Chief confirmó exclusividad del lock WEB02 y canal vigente. Rama `codex/quote-follow-up-en` desde master07b7ae1 en worktree aislado; raíz/pipeline/Meta preservados. Localización completa, no cambio de estrategia. Sin servicio pago, dependencia o compromiso económico nuevo; coste de modelo no medido.

**Experiencia:** `/en/quote-follow-up`, inglés británico: enquiries/quotes/bespoke software. Mismo proceso ficticio de instalación de portón, cuatro acciones, historial y reinicio, criterios de control humano y próximos pasos. Mensajes visibles, accesibles, FAQ, navegación y metadatos traducidos. Selector recíproco ES/EN mantiene UTMs permitidas. La versión inglesa no enlaza la portada española como si fuera inglesa ni afirma oficina/clientes/resultados UK. Contacto Messenger de marca, con aviso de posible login; no agenda ni mensaje preparado prometidos.

**Implementación:** plantilla server `BudgetLanding` y textos `budget-copy` compartidos; `BudgetDemo` recibe sólo textos del idioma activo. `SiteDocument` conserva estilos/marca. Layout español raíz bajo `[locale]`, entrada `/` en `(entry)` y layout inglés independiente `(english)` con `lang=en`; ambas versiones siguen estáticas, sin leer headers para decidir idioma. Middleware deja pasar sólo la ruta inglesa publicada y conserva next-intl es; `/en` redirige a la nueva experiencia. Canonical propio, hreflang es-AR/en-GB recíprocos, Open Graph en_GB y sitemap. API y mensajes históricos fuera del alcance.

**QA local:** build/types/lint aprobados; ruta inglesa 2.43kB y primera carga JS95kB (no medición de Core Web Vitals). Ocho pruebas de contacto/atribución y cinco HTTP de idioma/metadatos/rutas/redirects/404/sitemap/robots aprobadas. Navegador sobre `next start`, sin HMR: cuatro pasos ES/EN y reinicio, Enter, foco final, FAQ; cero errores de consola observados. 1280px escritorio y390/320px móviles, sin desplazamiento horizontal; botones demo44px o más. Reduced-motion emulado: media query true, animación none. Dos variantes A/B conservadas EN→ES→EN→hrefMessenger, token ajeno excluido. Fallback POST vacío a API conserva503 deliberado y destino comercial. Evidencia privada `operations/landing-english-20261106`. Ajuste final: logo inglés vuelve al contenido mediante ancla para conservar query.

**Publicación verificada — ENTREGADO:** [versión inglesa utilizable](https://criollo-labs.vercel.app/en/quote-follow-up), código [5e7d2ee](https://github.com/tomigarbarino/CriolloLabs/commit/5e7d2ee) en master. Deployment `dpl_C7uEMWnzmyydXV3B41fAYzfLqG9f`, target production, `READY`, alias estable comprobado. Build final/types/lint y13pruebas locales aprobadas. Repetidas cinco pruebas HTTP contra producción: inglés/español200, `lang`/canonical/hreflang correctos, /en→ruta inglesa, español/redirects/404 y sitemap/robots sin regresión observada.

Navegador público: /en con UTMs abrió inglés, cuatro pasos hasta trabajo coordinado, reset, cero errores de consola observados; cambio EN→ES→EN con A/B conservado hasta refMessenger y token ajeno excluido. Móvil público inspeccionado y guardado; escritorio1280 y320/390/reduced-motion/Enter/foco verificados en build local. Click real del CTA abrió Messenger con página/ref correctos; apareció login. No se inició sesión ni se envió un mensaje, no recepción/conversión acreditadas. La pantalla externa de Meta observada estaba en español; su idioma depende del proveedor/sesión, no de los textos de la landing. No afirmar Core Web Vitals o mejora comercial medidos.

Conector Vercel devolvió403 para el equipo; CLI existente comprobó proyecto/equipo correctos y publicó, sin crear acceso, token o cuenta. Lock WEB02 liberado tras entrega al Chief. No cambió el alcance comercial ni se distribuyó material a prospectos por esta tarea.

**Handoff comercial preparado para Chief:** compartir con prospectos UK pertinentes que pidan un ejemplo o describan presupuestos sin seguimiento. Texto inglés de apoyo: “Here’s an illustrative example of how an enquiry, a quote and the job handover could stay connected. Where does follow-up tend to get lost in your process?” No enviarlo por esta tarea ni alterar los hilos ya iniciados. Mantener enfoque reply-first acordado; no atribuir visitas, respuestas o conversiones sin fuente.
