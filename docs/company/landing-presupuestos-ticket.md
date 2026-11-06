# WEB01 — seguimiento de presupuestos

6/11/2026. Responsable: Ingeniería y Producto. Chief conserva estrategia y autoridad operativa.

**Estado: ENTREGADO.** Código22141ab en master, producción READY y recorrido público verificados. [Reporte de entrega, uso comercial y límites](department-product-C014.md#publicación--entregado).

## Objetivo y diagnóstico

Entregar una landing comercial específica en `/es/seguimiento-presupuestos`, con demo local y contacto Messenger vigente. Encaje: instalación/mantenimiento y coordinación de pedidos, presentes en la oferta y prospección C010/C014. No implica demanda validada ni resultados de clientes.

Inspección pública actual en escritorio y 390 × 844: portada legible y con oferta general; la primera pantalla móvil dedica espacio considerable a la animación abstracta. El enlace a la demo aparece debajo de soluciones. La demo muestra mantenimiento, pero no explica el proceso actual, decisiones humanas, insumos ni alcance de una implementación. Evidencia visual privada: `operations/landing-20261106`.

## Alcance y archivos

- Nueva página, componente de demo y CSS modular: propuesta clara, antes/después, cuatro acciones ficticias, requisitos, FAQ y CTA con destino explicado.
- Nuevo enlace interno con UTMs permitidas y saneadas; enlace visible desde portada. Metadatos propios, canonical, Open Graph y sitemap.
- Mejorar claridad del destino y enlace recíproco en demo existente.
- Preservar cambios concurrentes: worktree `codex/seguimiento-presupuestos` desde `origin/master` ec51290; no copiar modificaciones del checkout compartido. No tocar API, credenciales, pauta, estrategia, pipeline ni datos reales.

## Implementación y aceptación

Contenido esencial renderizado en servidor. Isla cliente pequeña sin dependencias nuevas para avance/reinicio. Navegación sin JS continúa; demo avisa cómo habilitar interacción. Ninguna acción envía mensajes ni guarda datos. El usuario controla cada transición; movimiento breve y reducido respetado. Estado accesible y botones de al menos 44px.

Comprobar inicio → landing → demo completa → contacto; dos variantes UTM y query ajena, reinicio, teclado, 320/390px y escritorio, reduced motion, errores de consola. Validar lint, types, build, canonical/indexabilidad y HTTP público después del release. No afirmar recepción de Messenger, ranking SEO ni mejora de conversión sin evidencia.

## Riesgo, publicación y rollback

Sin DB/API ni proveedor nuevo. Riesgo bajo: estilos, enlaces y metadatos; mantener CSS aislado. Dependencia encontrada: `npm ci` falla por `@swc/helpers` ausente del lock; reconciliar con npm y revisar delta. Coordinar ventana y commit con Chief antes de producción. Rollback: revertir únicamente el commit del paquete o restaurar deployment previo comprobado. Cerrar con URL/commit/pruebas/límites y uso para prospección en reporte compartido.
