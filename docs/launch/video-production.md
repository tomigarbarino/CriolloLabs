# Producción de video — Criollo Labs

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

No intentar eludir políticas del navegador ni afirmar capacidades de Meta no observadas. Si cambia la configuración de ubicaciones, revisar de nuevo asignaciones: ya hubo un reseteo de medios al activar recomendaciones.

## Activo externo descartado: conservar trazabilidad

El MP4 anterior tiene 15 segundos y 1080×1920. Está alojado en [criollo-video-v2.mp4](https://criollo-labs.vercel.app/ads/criollo-video-v2.mp4), agregado mediante el commit de sólo activo [31e6f19](https://github.com/tomigarbarino/CriolloLabs/commit/31e6f19a7537657509b35dc56f61404ba8499ca6). Coordinación verificó despliegue Vercel exitoso, HTTP 200 y hash coincidente. Esa evidencia acredita la entrega del archivo, **no aprobación creativa, upload completo a Meta ni resultados**.

No eliminar silenciosamente el registro ni presentarlo como versión vigente. Una futura propuesta de producción externa requiere una decisión nueva que respete el rechazo actual.

## Recursos para mejorar producción

| Recurso | Procedencia | Estado al corte |
| --- | --- | --- |
| Remotion adaptado | [Documentación oficial de AI skills](https://www.remotion.dev/docs/ai/skills); upstream informado a2824c67f8b4585c294a8101db9f9f0ad3c643f8 | **Instalación verificada**: remotion-best-practices, nombre visible [Remotion Video Studio](https://chatgpt.com/skills?skill_id=6aed1ae223388191b860838d79717f55). Bundle oficial adaptado de 61 archivos, sin mapas ni metadatos duplicados. Son instrucciones; no acredita runtime Remotion instalado. |
| marketing-video-director | Guía propia solicitada para dirección, demostración, movimiento y revisión de anuncios | Creada y validadores aprobados; incluye scripts/check_storyboard.py y referencias Criollo/fuentes/ejemplo de 18 s. Cinco casos de borde PASS. Evaluación independiente en proceso y **guardado pendiente**; no declarar instalación persistente todavía. |
| Marketingskills video v2.4.0 | Material revisado por coordinación | Referencia de principios; no instalar el paquete completo por defecto ni afirmar que se instaló. |

No se produjo un video nuevo ni se alcanzó 100/100. La adopción de estas guías no cambia por sí misma el estado de Meta ni resuelve el puntaje. El agente de documentación registra resultados que reciba; no instala recursos ni opera Meta desde este rol.

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

1. Confirmar alcance de la recomendación de mezcla imagen/video en Meta y la vía nativa que realmente esté disponible.
2. Registrar guardado y evaluación final de marketing-video-director cuando coordinación los confirme; la instalación de Remotion ya está verificada.
3. Preparar una propuesta concreta de proceso, escenas y movimiento, respetando que el MP4 anterior fue descartado.
4. Revisar la propuesta y el resultado visual antes de aplicarlo a un borrador.
5. Tras cualquier aplicación, repetir QA completo y comprobar el score real; si sigue 93 o la tarjeta comprende otros conjuntos, documentarlo.
6. Sólo con calidad requerida, activos y QA completos, presentar la decisión concreta de gasto/condiciones. Mantener borradores y padres OFF hasta autorización.

Este documento no promete ejecución futura ni seguimiento fuera de una sesión activa.
