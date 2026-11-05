# Campaña exploratoria: seguimiento de pedidos y solicitudes

Estado: borrador listo para configurar y revisar. No se crearon ni publicaron anuncios. No contiene presupuesto ni resultados de campaña. La oferta es la de [piloto acotado](offer.md) y las hipótesis se contrastan con [conversaciones reales](validation.md).

## Pregunta y recorrido

Explorar qué dolor genera conversaciones pertinentes: perder un pedido entre mensajes o desconocer quién tiene un pendiente. El recorrido es anuncio → sitio en español → CTA de WhatsApp → diagnóstico gratuito de 20 minutos → calificación → propuesta de piloto pago cuando corresponda.

El enlace apunta al sitio existente: `https://criollo-labs.vercel.app/es`. Confirmar URL de producción y funcionamiento del CTA de WhatsApp antes de activar. La campaña debe llevar al sitio y desde allí al contacto; no usar una URL de anuncio que evite ese recorrido. El diagnóstico gratuito no se presenta como implementación gratuita.

## Dos variantes: cambiar sólo el titular de dolor

| Elemento | Variante A | Variante B |
| --- | --- | --- |
| Titular | ¿Se te pierde algún pedido entre mensajes? | ¿No sabés quién tiene cada pendiente? |
| Texto principal | El mismo texto común de abajo. | El mismo texto común de abajo. |
| CTA y destino | El mismo CTA y sitio; sólo cambia `utm_content`. | El mismo CTA y sitio; sólo cambia `utm_content`. |
| Pieza visual | La misma pieza, si se usa; sin agregar promesas ni cambiar el texto. | La misma pieza, si se usa; sin agregar promesas ni cambiar el texto. |

Texto principal común, listo para cargar:

> Un pedido o una solicitud entra. Después hay que asignarlo, poner una fecha, seguirlo y saber cuándo quedó resuelto.
>
> En Criollo Labs diseñamos y desarrollamos herramientas para ordenar ese recorrido con tu equipo.
>
> Revisemos un proceso en una charla de 20 minutos sin cargo. Si tiene sentido avanzar, te proponemos un piloto pago con alcance y plazos acordados.
>
> Entrá al sitio y contanos por WhatsApp qué hace tu empresa y cómo seguís hoy los pedidos o las solicitudes.

CTA textual común: **Conocé cómo trabajamos y contanos por WhatsApp**. En el sitio, usar el CTA de contacto de WhatsApp. Elegir la opción disponible en la configuración del anuncio que mejor represente la visita al sitio; no asumir una etiqueta ni una función de Meta sin comprobarla.

## Un mercado y dos variantes en la primera ronda paga

Validar primero las dos hipótesis mediante conversaciones: distribuidores B2B e instalación/mantenimiento, incluyendo varias actividades en la segunda. Después elegir **un solo mercado** para la primera ronda paga, registrar la evidencia de la elección y configurar **una campaña con sólo dos variantes, A y B**. Si todavía no hay evidencia para elegir, continuar las conversaciones antes de activar. No dividir esta primera ronda en cuatro celdas pagas.

A y B comparten audiencia, configuración de entrega, ubicaciones, calendario, pieza, texto principal, CTA y página. Sólo difiere el titular y su identificador de medición. Revisar cualquier adaptación automática que pudiera alterar las piezas; si no puede mantenerse esta condición, registrar la limitación y no atribuir las diferencias únicamente al titular. La selección exacta de audiencia y la disponibilidad de opciones se verifican en la cuenta antes de ejecutar; los mercados son hipótesis comerciales, no la afirmación de que exista una categoría de segmentación de Meta con ese nombre. Si más adelante se prueba el otro mercado, abrir una ronda y una versión de campaña nuevas; no tratarlo como una comparación controlada entre sectores.

## Matriz UTM

Plantillas alternativas para elegir los **dos enlaces del único mercado seleccionado**; las cuatro filas no se activan simultáneamente. Mantener valores estables, en minúsculas y sin datos personales. `utm_term` identifica la hipótesis operativa; no demuestra que quien llegó pertenezca a ese segmento. Usar el ID real del anuncio en el registro privado para reconciliar cada enlace con su configuración.

| Grupo | Variante | utm_source | utm_medium | utm_campaign | utm_term | utm_content |
| --- | --- | --- | --- | --- | --- | --- |
| H1 distribuidores B2B | A | meta | paid_social | seguimiento_piloto_v1 | distribuidores_b2b | dolor_pedido_a |
| H1 distribuidores B2B | B | meta | paid_social | seguimiento_piloto_v1 | distribuidores_b2b | dolor_responsable_b |
| H2 instalación/mantenimiento | A | meta | paid_social | seguimiento_piloto_v1 | instalacion_mantenimiento | dolor_pedido_a |
| H2 instalación/mantenimiento | B | meta | paid_social | seguimiento_piloto_v1 | instalacion_mantenimiento | dolor_responsable_b |

Enlaces alternativos listos para cargar una vez elegido el mercado y verificado el destino. Cargar H1 A + H1 B **o** H2 A + H2 B:

- H1 A: `https://criollo-labs.vercel.app/es?utm_source=meta&utm_medium=paid_social&utm_campaign=seguimiento_piloto_v1&utm_term=distribuidores_b2b&utm_content=dolor_pedido_a`
- H1 B: `https://criollo-labs.vercel.app/es?utm_source=meta&utm_medium=paid_social&utm_campaign=seguimiento_piloto_v1&utm_term=distribuidores_b2b&utm_content=dolor_responsable_b`
- H2 A: `https://criollo-labs.vercel.app/es?utm_source=meta&utm_medium=paid_social&utm_campaign=seguimiento_piloto_v1&utm_term=instalacion_mantenimiento&utm_content=dolor_pedido_a`
- H2 B: `https://criollo-labs.vercel.app/es?utm_source=meta&utm_medium=paid_social&utm_campaign=seguimiento_piloto_v1&utm_term=instalacion_mantenimiento&utm_content=dolor_responsable_b`

## Medición y límites de atribución

Registrar por variante del mercado elegido: conversaciones efectivas, diagnósticos completados, personas calificadas, propuestas y pilotos contratados. Actualmente el sitio no registra analítica de clics ni carga contactos automáticamente en un CRM. Si se habilita otra medición, documentarla antes de usar visitas o clics como denominadores. Reportar datos faltantes. Un clic al CTA no equivale a un mensaje enviado ni a una venta.

El CTA del sitio agrega al mensaje prellenado de WhatsApp los parámetros permitidos `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` y `utm_content` presentes en la URL, además del origen del enlace de contacto. Esto permite leer la fuente si la persona envía el mensaje con esos datos. La persona debe enviarlo y puede editarlo o quitar la atribución; no hay envío automático ni garantía de recepción. Probar las dos URLs seleccionadas en la versión publicada, desde llegada al sitio hasta apertura del mensaje, antes de activar. Registrar manualmente la variante cuando el mensaje recibido la conserve; si falta, preguntar de forma opcional cómo llegó y marcar la fuente como declarada o desconocida. No adjudicar una conversación a una variante sin evidencia.

Las conversaciones usan los mismos criterios de calificación del diagnóstico. Los nombres, teléfonos, textos de chats y datos de empresas se registran sólo en un espacio privado autorizado. Un reporte público puede contener agregados que no permitan identificar a nadie.

## Reglas de parada y decisión, antes de ejecutar

1. **Puerta de salida:** no activar hasta verificar cuenta y permisos de Meta, identidad/página, destino y CTA de WhatsApp, piezas finales, condiciones de medición/privacidad aplicables y capacidad para responder y hacer los diagnósticos. Fecha de inicio, fin y límite de inversión deben estar acordados en el registro privado; este documento no autoriza gasto.
2. **Parada inmediata:** pausar si el sitio o WhatsApp no funcionan, se publica una pieza equivocada, aparece una promesa que no podemos sostener, hay un problema de privacidad o el equipo no puede atender las consultas. Corregir y documentar antes de reanudar.
3. **Ventana exploratoria:** proponer una primera ventana de siete días completos desde el inicio verificado, sujeta al límite de inversión privado; detener cuando ocurra primero el fin acordado, ese límite o una causa de parada. No extender ni aumentar gasto automáticamente. Anotar entrega desigual y períodos afectados por errores.
4. **Revisión:** al terminar, comparar A y B del mercado elegido con números absolutos y tasas sólo cuando existan denominadores fiables. Priorizar conversaciones calificadas y lo aprendido sobre el proceso; usar clics como diagnóstico del recorrido sólo si se dispone de medición documentada. Si no hay conversaciones, revisar entrega, destino, propuesta y contacto antes de concluir que no existe necesidad.
5. **Decisión exploratoria:** si una variante aporta conversaciones calificadas con problemas concretos y próximos pasos reales, usarla como candidata para otra ronda; si ambas aportan evidencia similar, conservar ambas o elegir por claridad. Si el volumen es escaso, la fuente no se puede asociar o la entrega difiere, declarar el resultado inconcluso. No llamar «ganadora» a una variante por uno o dos contactos ni atribuir causalidad estadística a esta prueba.
6. **Oferta y segmento:** contrastar lo aprendido con las cinco entrevistas de cada hipótesis. Avanzar a propuestas sólo con oportunidades calificadas. Cambiar una hipótesis o el texto exige una nueva versión y nuevas UTMs de campaña; no mezclar datos anteriores como si pertenecieran al mismo experimento.

No hay una estimación de conversión, costo ni retorno: se desconocen hasta ejecutar y medir. Los siete días son una ventana operativa propuesta, no un cálculo de tamaño muestral.

## Pendientes de ejecución

Diez conversaciones cualitativas y elección de un mercado; configuración de una campaña y dos variantes en Meta; verificación del sitio publicado, atribución en el mensaje y atención por WhatsApp; definición privada del calendario y límite de inversión; ejecución autorizada; registro manual de conversaciones y decisión con evidencia. Ningún resultado de esos pasos se da por realizado en este documento.
