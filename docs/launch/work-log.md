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
| Formación de producción | Remotion Video Studio y Marketing Video Director instaladas y verificadas | Son instrucciones/workflow y un comprobador, no runtime Remotion ni un render nuevo. Guía propia pasó validadores, cinco casos de borde y evaluación independiente. |

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
| 6/11 | Remotion Video Studio y marketing-video-director instaladas, persistidas y verificadas; evaluación independiente PASS | Ver [video-production.md](video-production.md). No se produjo un video nuevo ni se alcanzó 100/100. |

El commit documental 6241cac02adefeeffda5036d8b48f6fca979f521 quedó obsoleto por cambios posteriores. Los intentos de mover master fallaron; no reintentarlo ni usar su configuración manual como estado definitivo.

## Responsables, bloqueos y próxima acción

| Responsable durante la sesión | Próxima acción | Terminado cuando |
| --- | --- | --- |
| Coordinación / operación Meta | Comprobar alcance de la tarjeta +7 y encontrar una vía nativa disponible sin reactivar el video descartado | Existe un video aplicable, o queda documentada una limitación concreta del flujo observado; no una conclusión universal. |
| Dirección de video | Preparar un concepto centrado en un proceso concreto y una demostración legible | Brief, escenas y movimiento explican una operación, con aprobación de calidad; no sólo placas animadas. |
| Coordinación de skills | Conservar los localizadores verificados y aplicar el workflow sólo dentro del alcance autorizado | Instalación y evaluación ya confirmadas; no confundir instrucciones/comprobador con runtime de render ni video nuevo. |
| QA | Revisar medios, variantes IA, asignaciones, identidades, texto, enlaces y previews tras la configuración definitiva | Evidencia de revisión actual, sin reciclar QA anterior. |
| Agente de documentación | Registrar novedades verificadas y enlazar documentos en #6 | Estado, evidencia, limitaciones y próximo paso quedan en el repositorio y el ticket enlaza a ellos. |
| Usuario / coordinación | Resolver aprobación final de gasto y condiciones cuando exista un resultado revisable | Alcance autorizado, importe total, calendario y capacidad de responder explícitos. El puntaje 100 no sustituye esa decisión. |

No publicar mientras falten calidad requerida, QA o aprobación de gasto. Las consultas calificadas, propuestas y pilotos pagos serán las métricas comerciales; todavía no hay evidencia registrada para atribuir rendimiento a las piezas.
