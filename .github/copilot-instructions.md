## Propósito

Guía breve para agentes de IA que trabajan en este repositorio: foco en Next.js 14 (App Router), TypeScript, internacionalización con `next-intl`, Three.js (React Three Fiber) y estilo con Tailwind.

## Arquitectura general

- Stack: Next.js 14 (app/), TypeScript, Tailwind CSS, React Three Fiber (`three`, `@react-three/fiber`, `@react-three/drei`), GSAP, Lenis.
- Rutas y páginas: ruta basada en App Router bajo [src/app](src/app).
- Localización: `next-intl` con configuración en [i18n.ts](i18n.ts) y listado de locales en [src/config/i18n.ts](src/config/i18n.ts). Los mensajes están en `messages/{locale}.json`.

## Puntos críticos y patrones encontrados

- Locales soportados: `es`, `en`. Ver [src/config/i18n.ts](src/config/i18n.ts).
- La configuración de internacionalización usa `getRequestConfig` (archivo [i18n.ts](i18n.ts)) y carga dinámicamente `./messages/${locale}.json`.
- App router organiza páginas por rutas (ej. `src/app/[locale]/...`) — preserva la convención cuando agregues páginas.
- Componentes 3D y escena principal: [src/components/Scene.tsx](src/components/Scene.tsx) y [src/components/BackgroundCanvas.tsx](src/components/BackgroundCanvas.tsx). Evita cargar `three` en servidor salvo que esté en `transpilePackages` (ver `next.config.js`).
- Formularios: usan `react-hook-form` + validación con `zod`. Esquemas en [src/lib/schemas.ts](src/lib/schemas.ts); maneja validaciones allí.
- Datos de proyectos / contenido estático: [src/lib/data.ts](src/lib/data.ts).

## Scripts y flujo de desarrollo

- Requisitos: Node >= 18 (ver `package.json` `engines`).
- Comandos habituales:
  - `npm install`
  - `npm run dev` — servidor de desarrollo (http://localhost:3000)
  - `npm run build` — build de producción
  - `npm start` — start de producción
  - `npm run lint` / `npm run format`

## Convenciones de código y estructura

- UI y componentes: `src/components/ui/*` — componentes atómicos reutilizables (`Button`, `Card`, `Section`).
- Secciones de página: `src/components/home/*` agrupan bloques usados en la landing.
- Layouts: `src/app/layout.tsx` y los `layout.tsx` por carpeta controlan wrappers y fuentes globales.
- Estilos globales: [src/styles/globals.css](src/styles/globals.css) y configuración en [tailwind.config.ts](tailwind.config.ts).

## Integraciones y despliegue

- `next-intl` plugin aplicado en [next.config.js](next.config.js). Mantén compatible cualquier cambio aquí.
- Recomendado: desplegar en Vercel. Variables de entorno deben definirse en la plataforma o en `.env.local` para desarrollo.

## Ejemplos útiles para el agente

- Para obtiene mensajes localizados en una petición: ver [i18n.ts](i18n.ts) — usa `getRequestConfig(({locale}) => ...)` y carga `./messages/${locale}.json`.
- Para cambiar texto de la UI: editar [messages/es.json](messages/es.json) o [messages/en.json](messages/en.json).
- Para ajustar la escena 3D: editar [src/components/Scene.tsx](src/components/Scene.tsx) o [src/components/BackgroundCanvas.tsx](src/components/BackgroundCanvas.tsx).

## Qué evitar o tener en cuenta

- No asumir que el proyecto usa Pages Router; usa App Router (carpeta `src/app`).
- Evitar imports de módulos del cliente en código server-side (p.ej. Three.js). Preferir dinámicos o componentes marcados como `use client`.
- Mantener la convención de locales y no introducir rutas fuera del patrón `messages/{locale}.json` sin actualizar `i18n.ts`.

## Pregunta al autor cuando sea necesario

- ¿Deseas que priorice cambios en traducciones, UI 3D, o endpoints API (`src/app/api/contact/route.ts`)?

---

Si quieres ajustar el tono o añadir pautas sobre pruebas/commits, indícame y lo incorporo.
