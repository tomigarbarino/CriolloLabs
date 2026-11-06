# WEB03 — medición y mejora de la landing UK

6/11/2026. Mandato del fundador: coordinar con Chief, medir la experiencia inglesa y mejorarla con consultas/objeciones reales, sin servicios pagos. Investigación READONLY y método propio coordinados con Chief. [Landing vigente](https://criollo-labs.vercel.app/en/quote-follow-up), versión de contenido WEB02 / código5e7d2ee. No se modificó la oferta ni la web por ausencia de respuestas.

## Corte de evidencia

Chief contrastó el reporte Sales C014 de las fuentes compartidas y las fuentes comerciales existentes: el bloque terminado11:39BA conservó reply-first **sin URL inglesa**, entregada después. El corte inicial contenía26intentos únicos,21del frenteUK y5iniciales. No utilizar ese total como denominador de visitas o resultados de WEB02. Actualización Chief12:06: un rebote real clasificado y suprimido en privado deja25computables hacia el objetivo diario; entrega externa de los demás desconocida. Los26históricos seguían sin incluir la URL inglesa en la evidencia revisada.

| Señal | Resultado disponible | Qué significa |
| --- | --- | --- |
| Empresas con envío de URL inglesa comprobado en ese alcance | 0 | No acredita ausencia global de visitas ni impide que otros canales la hayan compartido |
| Visitas, clics de contacto, demo completada | Desconocidos | Sin medición activa acreditada; no escribir0 ni calcular conversión |
| Consultas/objeciones atribuibles a la landing | Ninguna acreditada en el alcance revisado | No hay evidencia para modificar contenido por feedback todavía |
| Rechazo humano genérico del contacto comercial | 1, sin mención/visita de la página | Exclusión privada gestionada por Sales; no feedback WEB02 ni motivo para insistir |

Excluir siempre pruebas internas, navegación QA, bots conocidos, visitas propias y revisiones de agentes de demanda comercial. No asociar geografíaUK o idioma inglés con comprador calificado.

## Medición técnica ya disponible

Consulta de sólo lectura al proyecto existente, sin cambios de configuración: `webAnalytics` contiene un ID, pero eso **no acredita servicio activo ni cobertura**. `GET /v1/query/web-analytics/visits/count`, filtro de ruta `/en/quote-follow-up`, ventana6nov00:00–12:05:21 Buenos Aires, devolvióHTTP400 **“Web Analytics is not enabled for this project”**. No es un total0. Proyecto correcto verificado por CLI previamente autorizada; el conector conserva limitación de scope documentada en WEB02.

Código/package actual sin SDK ni instrumentación analítica, HTML público sin script de Analytics observado. Speed Insights informa `hasData:false`. HTTP200 sólo comprueba disponibilidad, no visita humana, clic, lectura, exposición comercial o conversación. Los href/ref UTM existentes identifican etiquetas potenciales de campaña; no son eventos registrados ni garantía de que Messenger muestre esa referencia.

No se activó Analytics, pixel, evento, cookie, suscripción, cuenta, almacenamiento, CRM o scheduler. [Vercel requiere instrumentación para recopilar datos](https://vercel.com/docs/analytics/quickstart); [los eventos pueden consumir uso facturable según plan y límites](https://vercel.com/docs/manage-and-optimize-observability#managing-web-analytics-events). No asumir coste0 ni activar captura por la sola presencia de un ID. Una eventual instrumentación es un alcance separado, que Chief evaluará contra la prohibición de servicios pagos y presupuesto vigente.

## Método sin otro registro comercial

**Dueño: Sales bajo Chief.** Mantener personas, identidad empresarial, hilos, deduplicación y exclusiones en las fuentes privadas autorizadas existentes. CON02 conserva sus límites de acceso/respaldo. No crear otra tabla, CRM o mapa de códigos a personas. Ingeniería recibe sólo agregados y paráfrasis no identificables; ningún código de caso reidentificable, localizador privado, correo o cita identificable pasa al repositorio público.

Usar la URL sólo cuando corresponda dentro de la prospección reply-first decidida por Chief; medir no autoriza enviar un mensaje extra ni reenviar a quien rechazó contacto. Chief aprobó esta etiqueta común para una presentación por correo pertinente, sin identificadores individuales:

`https://criollo-labs.vercel.app/en/quote-follow-up?utm_source=outreach&utm_medium=email&utm_campaign=uk_quote_follow_up&utm_content=web02_v1`

No añadir empresa/persona/email al UTM ni un identificador por destinatario. Mantener `utm_source=qa` para verificaciones y no atribuir por inferencia una respuesta a la versión actual si no hay evidencia de qué URL se compartió/vio.

En las revisiones operativas existentes, Sales/Chief obtienen desde la fuente y comunican un corte agregado:

1. Período, canal/cohorte y versión del contenido; alcance y límites de la revisión.
2. Empresas únicas a las que se envió la URL, comprobadas en Enviados o fuente equivalente. Envío no confirma entrega ni visita; rebotes/exclusiones se conservan aparte, sin reintentos por medir.
3. Respuestas humanas después de ese envío, desglosadas en rechazo o conversación real; autorespuestas aparte. Sólo «visita reportada» si la persona dice haber visto el ejemplo. No inferirla de la respuesta o del ref.
4. Consultas calificadas según el criterio comercial vigente (CON03/kit), separadas de oportunidades listas para propuesta, acuerdos o cobros. Abrir Messenger no cuenta como consulta.
5. Pregunta/objeción para Producto: paráfrasis saneada, tema, si menciona explícitamente la página/demo, qué parte no se entendió y versión conocida/desconocida. Los temas son categorías vacías hasta observarlos, no objeciones inventadas.

Con denominador0 o incompleto no calcular tasas. Si hay datos comparables, `respuestas humanas / empresas con envío de URL comprobado` describe respuesta a ese envío, **no conversión de visitantes ni efecto causal de la landing**. No combinar denominadores de correo, Analytics y Messenger. Calificación/conversión de visita siguen sin medirse mientras falte su fuente.

## Disparador de mejora y aceptación

Chief recibe el corte de Sales en su circuito actual y envía a este chat un resumen sanitizado cuando una consulta/objeción real o un defecto reproducible justifique trabajo. Sin otro scheduler ni promesa de agente siempre activo. Ante ausencia de nuevos eventos, detener el análisis y continuar captación bajo Chief; no producir variantes o repetir QA por rutina.

Ingeniería vincula el problema observado con la sección real de la página y prepara el cambio mínimo: evidencia/versión anterior, hipótesis concreta, texto o interacción a corregir y señal que permitiría evaluar utilidad. Una confusión comprobada puede justificar aclaración; una objeción de precio/capacidad no autoriza inventar precios, compatibilidad, plazos, clientes o garantías. Chief decide cambios de estrategia/oferta/canal; Ingeniería resuelve lo técnico dentro del mandato, sin gate rutinario del fundador.

Antes de publicar código: comprobar dueño/lock de release, preservar cambios ajenos, ticket acotado, validar rutas/idiomas/CTA/UTMs y controles afectados, build/types/lint si corresponde, comprobar producción y actualizar versión `utm_content` sólo cuando se publique una nueva versión real. Mantener historial de antes/después y limitaciones; no declarar mejora comercial por haber cambiado un texto. Rollback del cambio mínimo mediante su commit/deployment; este método no altera datos ni requiere rollback de aplicación.

## Estado de cierre

**Método acordado y disponible a eventos.** Chief confirmó incorporar el disparador al circuito/registro existentes, con Sales como dueño de exposición y respuesta en fuente, sin segundo scheduler ni frenar captación. Aprobó la URL común sólo cuando un ejemplo ayude o sea solicitado y confirmó no activar SDK/servicio por ahora. Enviará a este chat un resumen sanitizado ante evento pertinente, sin códigos/localizadores privados en el repo.

Investigación técnica terminada. No hay feedback atribuible que permita una mejora de producto sustentada en este corte. La observación comercial sigue en Sales; Ingeniería retoma con evento nuevo, sin espera rutinaria del fundador/Chief ni vigilancia ficticia continua. Este documento no es un nuevo pipeline ni una integración analítica implementada. Sin cambios de aplicación ni deploy manual; sin nuevos gastos/servicios, coste de modelo no medido.
