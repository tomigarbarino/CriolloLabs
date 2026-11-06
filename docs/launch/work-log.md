# Registro de trabajo — Criollo Labs

Corte: 6 de noviembre de 2026. Registro reconciliado por el agente de documentación a partir de los documentos del repositorio, tickets [#1](https://github.com/tomigarbarino/CriolloLabs/issues/1), [#6](https://github.com/tomigarbarino/CriolloLabs/issues/6), [#8](https://github.com/tomigarbarino/CriolloLabs/issues/8) y verificaciones informadas por coordinación en la sesión actual.

Este registro describe hechos, decisiones y pendientes; no acredita clientes, resultados ni ejecución continua. El agente lo actualiza cuando coordinación comunica novedades durante una ejecución. No queda monitoreando ni trabajando después del turno.

## Estado vigente y precedencia

| Frente | Estado al corte | Evidencia o límite |
| --- | --- | --- |
| Lanzamiento | Borradores sin publicar; campaña y conjunto apagados | Confirmación de coordinación; no se habilitó gasto. |
| Calidad requerida | El usuario exige 100/100 antes de avanzar; Meta muestra 93 | Es puntaje de recomendaciones, no rendimiento comercial. No declarar cumplido. |
| Recomendación restante | +7 por mezcla de anuncios de imagen y video | La tarjeta refiere a cuatro conjuntos; resolver uno no garantiza 100 global. Verificar alcance y resultado real. |
| A/B | Borradores con ubicaciones Advantage+ y medios flexibles; animación nativa activada | La animación ON no cumplió la recomendación de mezcla con video. QA final pendiente después de los cambios. |
| IA | Términos aprobados por el usuario; tres variantes aplicadas a A | No autoriza publicación ni gasto. |
| Video externo | Rechazado por el usuario | Borrador ID 120256043999600496 renombrado «DESCARTADO — video externo — NO PUBLICAR»; nombre en Meta con separadores verticales. Verificado OFF. |
| Video nativo | Intentos sin lograr un video nativo aplicable | Editor/selector de imágenes se abrió vacío; no se encontró Turn Into Video en Edit media. No se concluye inexistencia universal de esa función. |
| Presupuesto | ARS 50.000 total compartido, lifetime; 6–13/11/2026 | Sin cambios, no diario ni por anuncio. Revisar vigencia de fechas antes de cualquier activación. Aprobación concreta de gasto pendiente. |
| Validación | Distribuidores B2B como hipótesis primaria; 0/5 conversaciones registradas por sector | Pauta exploratoria puede generar aprendizaje. Cinco conversaciones por sector es método propuesto, no diez llamadas obligatorias previas. |
| Formación y producción | Remotion Video Studio y Marketing Video Director instaladas y verificadas; prototipo alternativo producido | Las guías son instrucciones/workflow. Chromium temporal permitió renderizar; hay dos MP4 de 18 s revisados por frames, pero no reproducción completa en tiempo real ni preview de Meta. No equivale a aprobación ni aplicación. |

Los estados de carga bloqueada, permiso de archivos pendiente, B inexistente, selección manual de cuatro ubicaciones y video externo pendiente de publicación pertenecen a cortes anteriores y ya no son próximos pasos vigentes. En particular, el permiso estaba activado y los seis PNG se cargaron correctamente. [campaign.md](campaign.md) y [operating-charter.md](operating-charter.md) conservan texto de esos cortes; este documento reconcilia el estado actual sin modificar esos archivos. Los cuerpos de #1/#6 también conservan hitos históricos del video externo.

## Decisiones e hitos

| Momento | Hecho o decisión | Consecuencia |
| --- | --- | --- |
| 5/11 | Oferta: automatización/software a medida para pymes no IT; charla de 20 minutos sin cargo, piloto pago y mensual sólo si hace falta | Mantener esa separación en copy, demostraciones y propuestas. No prometer ahorro cuantificado. |
| 5/11 | Cuatro conceptos y seis PNG producidos: A/B feed e historias, C/D feed de reserva | Primera exploración A beneficio de tiempo frente a B repetición; C/D no activos por defecto. |
| 5/11 | Copy público desplegado en 8ff1066e32346e97f5f74346e0d6eea693b426ae | QA público de escritorio verificó teléfono correcto, UTMs y mensaje. No acredita mensaje enviado ni nuevo QA móvil. |
| 5/11 | Upload PNG resuelto con carga desde la PC; seis nombres y tamaños verificados en Meta | No pedir repetir permiso de URL de archivo; no hubo causa confirmada del error anterior. |
| 5/11 | Se probaron cuatro ubicaciones manuales; después el usuario pidió seguir recomendaciones Meta | Ese QA es intermedio. No reutilizarlo como aprobación final de Advantage+. |
| 5/11 | Cambiar ubicaciones reseteó asignaciones de medios | A feed y grupos de B fueron reasignados; validar otra vez tras cambios. Identidad Threads: Usar página de Facebook en ambos. |
| 5/11 | MP4 externo de 15 s y 1080×1920 producido, alojado en el sitio | Activo agregado en 31e6f19a7537657509b35dc56f61404ba8499ca6; Vercel/HTTP 200/hash verificados por coordinación. Disponibilidad técnica no acredita aprobación creativa. |
| 5–6/11 | Importador URL sin confirmación; selector aceptó un archivo pero quedó «Subiendo el video» | Nunca se acreditó selección/asignación final. Este camino quedó descartado tras el rechazo del usuario. |
| 6/11 | Usuario rechaza el MP4 y exige 100/100; score observado 93, +7 mezcla imagen/video | Mantener descartado el anuncio externo y preparar una solución de video pertinente; no prometer que una sola edición dará 100 global. |
| 6/11 | Remotion Video Studio y Marketing Video Director instaladas, persistidas y verificadas; política operativa: Luna para tareas acotadas y root para integración/revisión Meta | El usuario pidió continuar con agentes baratos. Un agente por archivo, máximo dos workers en esta entrega; escalar fallos o ambigüedad. Sin promesas de ahorro cuantificado ni seguimiento continuo. |
| 6/11 | Se hallaron dos previews nativos en el contenido A de Meta: 3.375 s (476×848) y 3.041 s (356×634) | Previews observados dentro de Meta, pero descarga falló por timeout. No se guardaron los archivos ni se creó un anuncio separado. Score 93, +7 sigue pendiente. |
| 6/11 | Se produjo prototipo alternativo Remotion: vertical y feed, 18 s, H.264, 30 fps, 540 frames; ffprobe verificado | Source/README resolvió un bloqueo; Chromium 153 temporal se extrajo con brotli y un preload usó sólo interfaces loopback. Sin cambios de red real ni compras. Ver [video-production.md](video-production.md). No aplicado a Meta ni aprobado. |
| 6/11 | Revisión visual independiente de frames 135/270/450 vertical, hoja de contacto de 36 frames a intervalos de 0,5 s y frame 450 feed | Buena lectura y jerarquía en los fotogramas revisados; oferta legible, sin claims cuantificados. No hubo reproducción completa en tiempo real ni preview de Meta. |
| 6/11 | Se observó en el destino A una lista de sugerencias de información del sitio (marcas/categorías ajenas); configuración de contenido 0/3 y desactivada | Sugerencias no aplicadas. Revisar origen/cache antes de activar; no son datos web actuales confirmados. Score sigue en 93; 100/100 no logrado. |

El commit documental 6241cac02adefeeffda5036d8b48f6fca979f521 quedó obsoleto por cambios posteriores. Los intentos de mover master fallaron; no reintentarlo ni usar su configuración manual como estado definitivo.

## Responsables, bloqueos y próxima acción

| Responsable durante la sesión | Próxima acción | Terminado cuando |
| --- | --- | --- |
| Coordinación / operación Meta | Verificar origen/cache de sugerencias de sitio y alcance de la tarjeta +7 en cuatro conjuntos | Sugerencias ajenas aclaradas antes de activar; recomendación y score comprobados sin reactivar el video descartado. |
| Dirección de video | Completar QA audiovisual del prototipo de pedidos | Reproducción completa y lectura en placements revisadas; aprobación creativa explícita sigue pendiente. |
| Coordinación de skills | Conservar los localizadores verificados y la fuente del prototipo | Instalación verificada; no confundir instrucciones/workflow con runtime Remotion. Los archivos de video no se aplicaron a Meta. |
| QA | Revisar reproducción completa y preview real en Meta antes de cualquier aplicación | Evidencia audiovisual y preview actual; score Meta verificado después de cambios. |
| Agente de documentación | Registrar novedades y enlazar documentos en #6; en la próxima revisión autorizada, reconciliar campaign.md, operating-charter.md y cuerpos históricos de tickets con este corte | Registro durable enlazado y, cuando se amplíe el alcance, textos históricos reconciliados sin perder trazabilidad. Esos otros archivos no se modificaron en esta entrega. |
| Usuario / coordinación | Resolver aprobación final de gasto y condiciones cuando exista un resultado revisable | Alcance autorizado, importe total, calendario y capacidad de responder explícitos. El puntaje 100 no sustituye esa decisión. |

No publicar mientras falten calidad requerida, QA o aprobación de gasto. Los archivos `criollo-vertical.mp4`, `criollo-feed.mp4` y `Criollo-motion-v3-source.zip` se guardaron para revisión; no están en Meta. La guía operativa de esta entrega asignó tareas acotadas a Luna y reservó integración y decisiones de Meta a root; no implica ahorro cuantificado ni actividad continua. Las consultas calificadas, propuestas y pilotos pagos serán las métricas comerciales; todavía no hay evidencia registrada para atribuir rendimiento a las piezas.
