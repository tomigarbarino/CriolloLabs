# WEB02 — misma experiencia en inglés británico

6/11/2026. Autorización directa del fundador: verificar, publicar y coordinar con Chief para prospección UK. Estado: EN CURSO. Lock único de release web comunicado a Chief; raíz concurrente preservada. Rama `codex/quote-follow-up-en`, base07b7ae1.

## Alcance y propuesta

Publicar `/en/quote-follow-up` con inglés británico natural (enquiry, quote, bespoke software), misma identidad/ejemplo/flujo/limitaciones WEB01. No afirmar presencia británica, clientes o resultados. Reutilizar plantilla y máquina de estados; separar textos por idioma. CTA conserva Messenger de marca, advierte login y no promete recepción. No traducir el sitio entero ni usar messages/en.json histórico, cuyo contenido inicial sigue español.

## Arquitectura y archivos

El root actual fija `html lang=es` y /en redirige a español. Para entregar idioma correcto desde HTML estático sin volver dinámica toda la web: trasladar documento compartido a `SiteDocument`, root español a `[locale]/layout`, entrada `/` a grupo `(entry)`, y root inglés independiente en `(english)` ([layouts raíz de Next14](https://nextjs.org/docs/14/app/building-your-application/routing/route-groups#creating-multiple-root-layouts)). Excluir la nueva ruta inglesa del middleware next-intl que sólo admite es; /en redirigirá a la experiencia nueva. APIs intactas. Metadatos/canonical/hreflang recíprocos, sitemap y selector de idioma conservando sólo UTMs permitidas. Rutas publicadas españolas y sus enlaces se preservan.

Archivos: layouts/entrada/middleware/next.config, plantilla `BudgetLanding`, textos `budget-copy`, `BudgetDemo`, navegación `BudgetLink`, páginas ES/EN, sitemap, pruebas de URLs. Sin DB/API, cookies, nuevas librerías, proveedor, formularios ni gasto nuevo.

## Aceptación, riesgos y rollback

Build/types/lint; regresiones de atribución existentes y cambio de idioma. Verificar HTML lang/title/meta/canonical/hreflang/indexabilidad, /en→ruta inglesa, enlaces/foco/FAQ/demo4pasos/reinicio/CTA, teclado/reduced-motion, 320/390 y escritorio. Repetir español, API fallback y redirects previos tras mover root. Humo local con build sin HMR y público después de READY. No afirmar Core Web Vitals ni conversión a partir de bundle/URLs.

Riesgo principal: reorganización acotada de root layouts y middleware; mitigación con regresión HTTP de rutas ES,404,raíz,API y navegación. Mantener static generation y controlar diferencia de bundle. Rollback: revertir commit WEB02 o restaurar deployment WEB01 comprobado; no cambios de datos. Chief recibe URL inglesa y guion de presentación, commit, pruebas/límites y lock liberado.
