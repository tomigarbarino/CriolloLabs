# Producción de video — Criollo Labs

## Actualización vigente — video de pedidos v3

Esta actualización prevalece sobre las referencias históricas posteriores al video descartado y al prototipo sin aprobar.

- El usuario aprobó continuar con la nueva pieza de pedidos («mucho mejor») e incorporarla al borrador. El MP4 anterior v2 sigue descartado.
- Se reutilizó el borrador vacío ID 120256043999600496 y se verificó su nuevo nombre **Criollo | V pedidos | v3**. No se asignó el archivo rechazado.
- Vertical 1080×1920 y feed 1080×1350, ambos de 18 s, están publicados como archivos en el sitio mediante [bbbd612](https://github.com/tomigarbarino/CriolloLabs/commit/bbbd6127c16cc9bb31ad2c7fca437e1841735db1). Esto no publica anuncios. Se verificó reproducción técnica del vertical hasta currentTime=18, ended=true y sin error.
- El usuario completó la verificación de acceso. La carga por **Biblioteca multimedia → Add Media → Add Video** terminó correctamente para ambos archivos; se observaron «Carga finalizada» y sus filas en la cuenta publicitaria.
- En el asistente del anuncio se seleccionaron el vertical y el feed con proporción Original. Se llegó a **Mejoras de contenido Advantage+**, pero **no se confirmó Listo ni el guardado final**. No confundir archivos subidos con medios aplicados al anuncio.
- La revisión automática del navegador bloqueó tanto el cambio de mejoras como una lectura posterior del editor por riesgo de perder edición multimedia sin guardar. No se navegó ni se intentó eludir el bloqueo. Próximo paso humano: guardar el modal actual con **Listo**, sin publicar, y confirmar para retomar la verificación.
- Último score observado: **93/100**. No se comprobó ningún aumento. La recomendación +7 menciona cuatro conjuntos; requiere verificar alcance real después de guardar.
- Campaña y conjunto permanecían OFF en la última verificación; esta sesión no publicó anuncios ni activó gasto. Presupuesto sin cambios: **ARS 50.000 total lifetime**, del 6 al 13/11/2026.
- Pendientes: comprobar guardado y previews por ubicación, adaptar horizontal/cuadrado, actualizar UTM de V (aún v_ejemplos), revisar recomendaciones pertinentes y volver a medir el score. Las sugerencias ajenas de productos del sitio siguen sin aplicarse.

## Registro del corte anterior (histórico)

Corte: 6 de noviembre de 2026. Responsable de documentación: agente de documentación, a partir de verificaciones enviadas por coordinación y del ticket [#6](https://github.com/tomigarbarino/CriolloLabs/issues/6). Contexto general en [work-log.md](work-log.md).

## Decisión vigente

El usuario rechazó el MP4 externo creado y pidió seguir las recomendaciones de Meta, con 100/100 antes de avanzar. No reciclar ese archivo como pieza aprobada ni seguir intentando publicarlo. Su borrador ID 120256043999600496 fue renombrado **«DESCARTADO | video externo | NO PUBLICAR»** y verificado OFF. Campaña y conjunto siguen OFF, sin publicación ni gasto.

El score observado en Meta es **93**. La recomendación restante ofrece **+7 por mezcla de anuncios de imagen y video**, y su tarjeta menciona **cuatro conjuntos**. La animación nativa ya está ON en A/B, pero no ha satisfecho esa recomendación. No equiparar animación de imagen con anuncio de video ni prometer que resolver un conjunto produzca 100 global.

## Evidencia y límites del flujo nativo observado

| Intento | Resultado observado | Qué permite concluir |
| --- | --- | --- |
| Agregar animación nativa | Activado en A/B | Ajuste aplicado; no satisface por sí mismo el +7 de mezcla imagen/video. |
| Editor de video / selector de imágenes | Se abrió vacío | Ese recorrido no permitió producir el video en esta sesión. |
| Edit media | No se encontró Turn Into Video | No se observó esa opción en esa pantalla/cuenta; no demuestra que Meta carezca de ella en todos los casos. |
| Edición por grupo | Opciones Cambiar, Recortar, texto y sticker | No se encontró allí una conversión aplicable a video. |
| MP4 externo anterior | URL import sin confirmación; transferencia quedó «Subiendo el video» | No hubo confirmación final de selección/asignación. Camino descartado por decisión creativa posterior del usuario. |
| Previews nativos en contenido A | Meta mostró previews de 3.375 s (476×848) y 3.041 s (356×634) | Vistos dentro del editor, pero DownloadMedia falló por timeout; no descargados ni creados como anuncio independiente. Score sigue en 93. |

No intentar eludir políticas del navegador ni afirmar capacidades de Meta no observadas. Si cambia la configuración de ubicaciones, revisar de nuevo asignaciones: ya hubo un reseteo de medios al activar recomendaciones.

## Activo externo descartado: conservar trazabilidad

El MP4 anterior tiene 15 segundos y 1080×1920. Está alojado en [criollo-video-v2.mp4](https://criollo-labs.vercel.app/ads/criollo-video-v2.mp4), agregado mediante el commit de sólo activo [31e6f19](https://github.com/tomigarbarino/CriolloLabs/commit/31e6f19a7537657509b35dc56f61404ba8499ca6). Coordinación verificó despliegue Vercel exitoso, HTTP 200 y hash coincidente. Esa evidencia acredita la entrega del archivo, **no aprobación creativa, upload completo a Meta ni resultados**.

No eliminar silenciosamente el registro ni presentarlo como versión vigente. Una futura propuesta de producción externa requiere una decisión nueva que respete el rechazo actual.

## Recursos para mejorar producción

| Recurso | Procedencia | Estado al corte |
| --- | --- | --- |
| Remotion adaptado | [Documentación oficial de AI skills](https://www.remotion.dev/docs/ai/skills); upstream informado a2824c67f8b4585c294a8101db9f9f0ad3c643f8 | **Instalación verificada**: remotion-best-practices, nombre visible [Remotion Video Studio](https://chatgpt.com/skills?skill_id=6aed1ae223388191b860838d79717f55). Bundle oficial adaptado de 61 archivos, sin mapas ni metadatos duplicados. Son instrucciones; no acredita runtime Remotion instalado. |
| marketing-video-director | Guía propia solicitada para dirección, demostración, movimiento y revisión de anuncios | **Instalación y ruta remota verificadas**: [Marketing Video Director](https://chatgpt.com/skills?skill_id=6aed1bb09b908191a382a9aa20e8dc87). Validadores, cinco casos de borde y evaluación independiente PASS. Incluye scripts/check_storyboard.py y referencias Criollo/fuentes/ejemplo de 18 s. |
| Marketingskills video v2.4.0 | Material revisado por coordinación | Referencia de principios; no instalar el paquete completo por defecto ni afirmar que se instaló. |

Ambas instalaciones son instrucciones/workflow y un comprobador, no runtime de Remotion. El prototipo alternativo se compiló y renderizó después de corregir README/fuente; Chromium 153 se extrajo temporalmente con brotli y un preload de `Node os.networkInterfaces` se limitó a loopback. No se cambió la red real ni se hicieron compras. Se generaron `criollo-vertical.mp4` (1080×1920) y `criollo-feed.mp4` (1080×1350), ambos H.264, 30 fps, 540 frames y 18.000 s; ffprobe verificó sus propiedades. El código y lockfile, sin `node_modules`, están en `Criollo-motion-v3-source.zip`. Los tres archivos se guardaron para revisión y no se aplicaron a Meta.

La revisión visual cubrió frames 135, 270 y 450 del vertical, hoja de contacto de 36 frames cada 0,5 s y frame 450 del feed. El frame 270 comunica el recorrido mensaje→fila y marca UI/datos como ejemplo; el 450 muestra legible «Charla de 20 min sin cargo · implementación aparte». La jerarquía y contraste fueron buenos en los fotogramas observados; no se vieron claims cuantificados. No se vio la película completa en reproducción real ni un preview dentro de Meta, por lo que no se aprueba la pieza final. No se alcanzó 100/100: Meta sigue en 93, +7 por mezcla de formatos, con recomendación que refiere a cuatro conjuntos.

En el contenido A, la superficie de destino mostró sugerencias de información del sitio como Onitsuka Tiger, Catalogue, Saucony, Necklaces y Rings, más otras. No se aplicaron; la configuración de contenido marcaba 0/3 y estaba desactivada. Queda pendiente comprobar origen/cache antes de activar cualquier sugerencia; no se trataron como información web actual confirmada. La animación nativa está ON, pero no satisface por sí sola la recomendación de mezcla. Campaña/padres siguen OFF, sin publicación ni gasto.

## Criterios para la próxima propuesta

La propuesta debe mostrar **una operación concreta de una pyme**: por ejemplo, cómo un pedido pasa de un mensaje a un registro con responsable y estado. La tecnología se entiende por el trabajo que simplifica. Elegir un único proceso por pieza y confirmar su pertinencia; pedidos es una hipótesis coherente con la oferta, no un caso de cliente probado.

| Criterio | Evidencia requerida en la revisión |
| --- | --- |
| Gancho | En la apertura se reconoce una tarea o un problema específico, comprensible sin jerga. |
| Demostración | Se ve qué entra, qué cambia y qué obtiene la persona; la UI ilustrativa se identifica como ejemplo, sin datos reales de clientes. |
| Movimiento | Se animan objetos o estados que explican la acción: entrada, asignación, avance o cierre. No depender sólo de transiciones entre textos. |
| Lectura | Jerarquía, contraste y tiempo suficientes; texto y CTA visibles con las superposiciones de la ubicación real. |
| Oferta | Charla de 20 minutos sin cargo; implementación cotizada aparte. No prometer ahorros, ventas o porcentajes sin evidencia. |
| Coherencia | Mismo vocabulario y recorrido comercial que el sitio, con landing y UTMs verificables. |
| QA técnico y visual | Revisar duración, resolución, frames de apertura/cierre y transiciones; después comprobar reproducción y preview real en Meta. Un archivo generado no equivale a una carga aplicada. |
| Comparación | Registrar cambios de formato, IA y movimiento; no atribuir diferencias al titular como si fuera una prueba controlada. |

La nueva producción no queda aprobada por cumplir un checklist: el usuario rechazó la versión anterior y exige una calidad concreta. No avanzar con una pieza que repita el problema de placas genéricas sin demostrar el proceso.

## Secuencia de continuación

1. Verificar el origen/cache de las sugerencias de información del sitio antes de activar contenido; confirmar el alcance de +7 en los cuatro conjuntos.
2. Completar QA audiovisual de los dos MP4 y revisar un preview real en Meta antes de cualquier aplicación.
3. No activar la campaña ni los padres; el usuario exige 100/100 y el score observado sigue 93.
4. Después de calidad requerida y QA, presentar la decisión concreta de gasto/condiciones. El presupuesto ARS 50.000 lifetime, 6–13/11/2026, no cambió; revisar fechas antes de cualquier activación.

Este documento no promete ejecución futura ni seguimiento fuera de una sesión activa.
