# CEO02-P — ficha comercial de prototipo ES/EN

6/11/2026. Dueño: Ingeniería/Producto, worktree de producto, rama `codex/prototype-offer-card` desde58e97fb. Chief aprobó alcance/texto de la ficha; **el precio experimental sigue como hipótesis interna y no se publica**. Diagnóstico previo CEO02-E queda separado en la raíz compartida. Sin servicios/gasto nuevos; coste de modelo/capacidad humana desconocidos.

## Mini-ticket previo a código

**Objetivo:** hacer comprensible qué entregable acotado se puede proponer a partir de la demo, sin presentarlo como sistema operativo. Añadir una única sección compacta tras la demo, sin rediseñar ni sustituir los CTAs/avisos existentes.

**Archivos:** `src/lib/budget-copy.ts` (copy ES aprobado y traducción EN fiel), `src/components/BudgetLanding.tsx` (sección y ContactLink actuales), `src/styles/budgets.module.css` (mínimo layout responsive). Extender sólo la regresión HTTP existente si hace falta verificar límites/CTA de la oferta. Sin backend, auth, Analytics, almacenamiento, cobro/checkout, terceros ni cambios en demo, ruta de contacto o destinos de campaña.

**Aceptación:** ES/EN muestran título, propósito, entregable, una revisión y guía, exclusiones explícitas y acuerdo escrito previo; no importe/precio ni SLA/horas/agenda/cobro acreditado. CTA «Pedir una propuesta de prototipo» / traducción EN al mismo Messenger con source actual y UTMs saneadas. Mantener ficción, legibilidad, teclado/reduced-motion y demo existente. Ejecutar regresiones existentes, types/lint/build y navegador local ES/EN con capturas; entregar patch/archivos/preview al Chief **antes de push/deploy** para QA independiente sobre el resultado. Chief devuelve decisión de despliegue; no gate del fundador.

**Rollback:** revertir únicamente el commit de ficha o retirar la sección/copy/CSS nuevos; no hay datos/migración. Respetar cambios ajenos y publicar sólo este paquete desde la base aislada vigente, después de QA y coordinación de release.

## Estado

Implementación local terminada y aprobada para release por Chief. No publicada todavía ni producto operativo. Se añadieron sólo sección compacta y copy ES/EN, CSS mínimo y regresión de contenido/CTA; demo y helpers de contacto sin modificar.

- `node --experimental-strip-types --test scripts/test-contact.mjs`:8/8PASS; `node --test scripts/test-localized-site.mjs` contra `next start`3107:5/5PASS. Regresión HTTP incluye ficha server-rendered, exclusiones, acuerdo escrito, CTA de marca y ausencia de importe/moneda. Lint sin advertencias y build/types aprobados; rutas ES/EN estáticas95.1kB de cargaJS inicial, no medición de rendimiento de campo.
- Navegador local: desktop1280 y móvil390, copy/límites legibles completos, sin scroll horizontal observado; CTA58.75px de alto, href conserva source actual y UTMs saneadas, cero errores de consola en alcance observado. No se enviaron mensajes. Sin animaciones nuevas.
- Evidencia privada sanitizada en `operations/product-offer-CEO02`:01-es-desktop.png/02-en-desktop.png/03-es-mobile.png/04-en-mobile.png. Patch exacto de cuatro archivos `changes.patch`,5887bytes,SHA256`17e5daa901a414a7f0d0f00b61c4ad1f5626a2c14a0ae10b9afece0a3bb237da`; comprobación inversa de aplicaciónPASS. Ningún dato comercial identificable incluido.
- Chief verificó previewHTTP200, encargó QA independiente y reportóPASS limitado en `qa-CEO02.md` de raíz; después inspeccionó ambas capturasdesktop y **autorizó ejecución de commit/push/deploy del paquete**, sin nueva aprobación del fundador. La revisión móvil acotada posterior no encontró defecto ni cambió el patch.

Pendiente publicación/verificación del alias real; no afirmar mejora comercial o cobro por esta ficha. Alcance de release: los cuatro archivos del patch y este reporte saneado, nunca el diagnóstico/QA ni cambios ajenos de raíz.
