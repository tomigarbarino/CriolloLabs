# Producto C014 — WEB01

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

## Publicación

Build final aprobado con tipos/lint, 17 páginas generadas; ruta nueva 3.26kB / 95.9kB JS inicial. Humo sobre `next start` (sin HMR), en pestaña nueva: cuatro transiciones, reinicio y cero errores de consola. Los errores durante Fast Refresh no se reprodujeron en el build de producción. Canonical, sitemap y robots comprobados por HTTP local. Release público pendiente de comprobación; el lock se libera al terminar las verificaciones públicas.
