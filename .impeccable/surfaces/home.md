# Home
Mode: persuade
## Direction contract
THESIS: Estudio cercano, elegido por el usuario. Una conversación de trabajo acompañada de una escultura que se ensambla con el scroll.
OWN-WORLD: Lavanda clara, tinta ciruela, logo mate existente. Tipografía Brygada 1918 y Onest, bloques abiertos sin tarjetas decorativas.
STORY: Comprender servicios, ver el método y contactar por Facebook.
FIRST VIEWPORT: Título editorial a la izquierda y escultura Three.js a la derecha. El scroll conecta las piezas y cambia el relato en tres capítulos.
FORM: Dirección del usuario prevalece; seed:6ec70e1d8a670c08. Comparación externa degradada sin catálogo disponible.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implemented surface
Code-first implementation. Source: `src/app/[locale]/page.tsx` and `src/styles/launch.css`. The page proceeds from the operational problem and primary action through a scroll-driven illustrative sculpture, service rows, four-step method, monthly support, FAQ and Facebook contact. No real customer cases or metrics are presented.

## Validation and remaining limitations
DESIGN.md and .impeccable/design.json capture the implemented styles. Responsive breakpoints are present at 900px and 600px, but no completed mobile screenshot validation is claimed. Finish-review verdict is recorded separately by the reviewer; this document does not assert release approval. The desktop hero was reviewed at the supplied screenshot resolution (`/workspace/scratch/criollo-estudio-cercano.jpg`). Full-page capture timed out; mobile and focus-state visual proof remain pending. Source fixes use a paper focus outline in the dark contact section, lavender scrollbar styling and a single-column process below 381px. The inherited dark WebKit scrollbar-thumb hover remains an uncanonized legacy detail.

## Three.js revision
Replaces homepage GIFs with native 3D geometry, GSAP ScrollTrigger and three DOM text chapters. Reduced-motion shows static content. WebGL failure falls back to a lower-detail Three.js SVGRenderer scroll scene. Active source includes `src/components/ScrollExperience.tsx`. Fresh desktop scene validation is required; earlier GIF screenshots do not validate this revision.

## Scroll revision verification — 2026-11-05
Production build, TypeScript and Vercel deployment passed. Desktop SVGRenderer was visually checked at the scattered, assembling and assembled phases; GSAP scroll changed all three messages. The skip link navigates to #soluciones. The cloud browser explicitly disables WebGL, so these captures validate the vector fallback, not GPU shading or frame rate. Mobile layout has source review and separate text/art rows; device visual validation remains pending. A final rightward art adjustment reserves space beside the first heading.
