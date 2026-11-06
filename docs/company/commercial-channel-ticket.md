# C004 — canal comercial de Messenger

Autorización: el fundador delegó elegir y usar el canal pertinente. El Chief elige Messenger de la página existente de Criollo para separar atención comercial del WhatsApp personal y usar la bandeja accesible. Implementación y publicación acotadas a este cambio dentro del mandato; sin nuevas compras, conexiones, permisos o campañas.

## Estado y alcance

La landing y demo usan ContactLink→getContactUrl con WhatsApp personal. La API antigua503 devuelve el mismo destino. Página comercial verificada: el enlace m.me del identificador de página resolvió una conversación cuyo encabezado es Criollo Labs, Empresa de software. Se comprobó identidad sin enviar mensajes. Messenger requiere sesión de Facebook; no se configura PIN/historial personal para esta tarea. La bandeja de página ya fue comprobada accesible en Business Suite.

Modificar src/lib/contact.ts (destino m.me de página y ref saneada), src/app/[locale]/page.tsx (CTA, explicación y footer coherentes), src/app/api/contact/route.ts (fallback coherente). Conservar firma del helper y ContactLink para no romper demo/otros consumidores. No migraciones ni backend, bot, formulario, nuevo almacenamiento o proveedor. message de opciones permanece por compatibilidad pero Messenger no admite el texto preparado de WhatsApp; no prometerlo. Las UTMs se pueden enviar como referencia técnica, sin acreditar que el operador las vea ni que hayan generado una consulta.

## Implementación y validación

1. Aislar una release desde master actual, preservando cambios ajenos del checkout original.
2. Cambiar helper y textos; inspeccionar diff y probar URL, caracteres especiales y valores vacíos con runtime existente.
3. Compilar/typecheck/lint con dependencias existentes; si no hay instalación local, usar build remoto del proyecto existente como gate antes de promover, sin paquetes nuevos ni servicio nuevo.
4. Publicar únicamente release verificada; comprobar landing/demo/fallback y enlace móvil conA/B. Ningún mensaje enviado por probar el enlace. No cambiar presupuesto, objetivo, anuncios ni los permisos de la página.

## Riesgos y rollback

La primera compilación remota detectó un bloqueo previo: el tsconfig raíz incluía marketing/motion-v3, proyecto independiente con package.json/tsconfig propios y dependencias Remotion no instaladas. Se añade únicamente ese directorio a exclude del chequeo web; la aplicación conserva lint/typecheck completos y el proyecto de video conserva su configuración. No instalar Remotion ni modificar sus fuentes.

Messenger puede exigir login o app; indicarlo en el texto. Una ref no prueba atribución comercial; marcar origen desconocido hasta evidencia en consulta. Fallo externo conserva la prueba de destino y su limitación, no inventar recepción. Revertir sólo el commit de canal o restaurar deployment anterior verificado; no tocar cambios ajenos. El destino anterior contenía WhatsApp personal y no debe restablecerse silenciosamente como estrategia permanente.

## Terminado cuando

Destino correcto en helper y CTA; validación y build aprobados; versión desplegada y alias público comprobados; bandeja comercial identificada y scheduler actualizado para revisar sólo mensajes de la página bajo autorización. Consultas/envíos/cobros son estados separados. Registrar commit, deployment, pruebas y pendientes al cerrar.
