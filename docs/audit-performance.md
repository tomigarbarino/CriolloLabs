# Auditoría de Performance — Criollo Labs

> Análisis técnico basado en vercel-react-best-practices + next-best-practices
> Repo: Next.js 14 App Router + TypeScript + Tailwind + framer-motion + gsap + lenis + R3F

---

## 📦 Análisis de Bundle y Client Components

### Riesgos Identificados

#### 1. **Framer Motion + GSAP + Lenis (triple stack de animación)**
**Problema**: 3 librerías de animación diferentes (~150KB combined, gzipped ~45KB).
**Impacto**: Incremento de bundle size para cliente. Posible conflicto de render loops.
**Costo estimado**: +300ms en TTI (Time to Interactive) en 3G.
**Ubicación**: `package.json` lines 17-19

**Recomendación P0**:
- Auditar si se usan las 3 o si hay overlap de funcionalidad
- Considerar: Framer Motion (declarativo) para 90% + GSAP solo para animaciones complejas específicas
- Lenis es smooth scroll — verificar si Next.js nativo podría reemplazarlo con `scroll-behavior: smooth` + IntersectionObserver

---

#### 2. **@react-three/fiber + drei + three (3D en landing)**
**Problema**: Stack 3D completo (~200KB) cargado para una landing page.
**Impacto**: LCP (Largest Contentful Paint) afectado si el 3D bloquea Hero.
**Costo estimado**: +500ms LCP si no está code-split correctamente.
**Ubicación**: `package.json` lines 14-16, 26

**Recomendación P0**:
- Verificar que `Scene.tsx` y `HeroBackground.tsx` usen `dynamic()` con `{ ssr: false }`
- Lazy load del canvas 3D después del Hero text render
- Opcional: Reemplazar escena 3D con CSS-only orb effect (ver opciones con gradients + backdrop-filter)

---

#### 3. **Posibles Client Components innecesarios**
**Problema**: Sin revisar el código, sospecho que componentes como `Story.tsx`, `Services.tsx`, `FAQ.tsx` podrían estar marcados como `"use client"` solo por pequeñas interacciones.
**Impacto**: Hidratación excesiva. Mayor JS bundle en cliente.
**Recomendación P0**:
- Auditar cada componente en `/src/components/landing/`
- Convertir a Server Component todo lo que sea contenido estático
- Usar Client Components solo para: formularios, animaciones on-scroll, toggles interactivos

---

#### 4. **next-intl configuración**
**Problema**: i18n puede generar waterfalls de carga si no está optimizado.
**Impacto**: TTFB (Time to First Byte) afectado en rutas internacionales.
**Recomendación P1**:
- Verificar que `messages/es.json` (17KB) se cargue de forma estática
- Considerar code-split por ruta (solo cargar keys de la página activa)

---

## 🖼️ Imágenes y Assets

### Riesgos Identificados

#### 5. **Sin auditoría de formato de imágenes**
**Problema**: No sabemos si las imágenes en `/public` están en WebP/AVIF o PNG/JPG legacy.
**Impacto**: LCP +1s si Hero background es PNG sin optimizar.
**Recomendación P0**:
- Auditar `/public` directory
- Convertir todas las imágenes a WebP (Next.js Image con `formats: ['image/webp']`)
- Hero background debería ser <50KB optimizado

#### 6. **Posible ausencia de `priority` en Hero image**
**Problema**: Si hay imagen de fondo en Hero y no tiene `priority={true}`, el LCP sufre.
**Impacto**: LCP +800ms.
**Recomendación P0**:
- Verificar que `HeroBackground.tsx` use `<Image priority />` o preload manual

---

## 🎨 CSS y Estilos

### Riesgos Identificados

#### 7. **Tailwind sin purge agresivo**
**Problema**: Si `tailwind.config.ts` no tiene bien configurado `content`, CSS final puede ser >100KB.
**Impacto**: FCP (First Contentful Paint) +200ms.
**Recomendación P1**:
- Verificar que `content` incluya `'./src/**/*.{js,ts,jsx,tsx}'`
- Build production y verificar tamaño de CSS bundle

#### 8. **Posibles `@apply` excesivos o CSS custom innecesario**
**Problema**: Si hay mucho CSS custom en `globals.css` que replica utilities de Tailwind.
**Impacto**: Bloat de CSS.
**Recomendación P1**:
- Revisar `globals.css` y minimizar custom CSS
- Usar `@layer utilities` solo cuando sea estrictamente necesario

---

## ⚡ JavaScript y Hidratación

### Riesgos Identificados

#### 9. **Animaciones on-scroll con múltiples listeners**
**Problema**: Si cada componente tiene su propio `useEffect` con scroll listener en vez de un único IntersectionObserver.
**Impacto**: Main thread bloqueado. CLS (Cumulative Layout Shift) riesgo.
**Recomendación P0**:
- Centralizar scroll tracking con un hook custom o context
- Usar IntersectionObserver API nativa en vez de scroll events

#### 10. **Smooth scroll library (Lenis) posiblemente pesado**
**Problema**: Lenis agrega ~20KB para smooth scroll que CSS podría hacer gratis.
**Impacto**: TTI +100ms.
**Recomendación P1**:
- Testear si remover Lenis y usar `scroll-behavior: smooth` degrada UX
- Si se mantiene, asegurar que sea lazy-loaded

---

## 🔤 Fonts

### Riesgos Identificados

#### 11. **Sin auditoría de carga de fuentes**
**Problema**: No sabemos si se usan Google Fonts con bloqueo de render o si están self-hosted.
**Impacto**: FCP bloqueado hasta que descargue font. +400ms.
**Recomendación P0**:
- Verificar que se use `next/font` con `display: 'swap'`
- Preload de font crítico (`<link rel="preload">`)
- Limitar a 2 weights máximo (400 + 700)

---

## 🚀 Next.js Específico

### Riesgos Identificados

#### 12. **Posible falta de Static Generation en landing**
**Problema**: Si `/es/page.tsx` no es estático, cada visita genera request a servidor.
**Impacto**: TTFB alto. Costo de hosting innecesario.
**Recomendación P0**:
- Verificar que la landing sea `export const dynamic = 'force-static'` o default static
- No debería haber `fetch` sin `{ cache: 'force-cache' }`

#### 13. **Metadata y SEO no optimizados**
**Problema**: Sin revisar layout.tsx, sospecho que falta `metadata` export detallado.
**Impacto**: Core Web Vitals indirectos (pero SEO crítico).
**Recomendación P1**:
- Asegurar `metadata` export en cada layout y page
- OG images optimizadas (<200KB)

---

## 📊 Monitoring y Observabilidad

#### 14. **Sin Web Vitals tracking**
**Problema**: No hay forma de medir LCP, FID, CLS en producción.
**Impacto**: Optimizaciones a ciegas.
**Recomendación P1**:
- Agregar `useReportWebVitals` en layout root
- Enviar métricas a Vercel Analytics o similar

---

## ✅ Quick Wins Performance (P0 — Implementar HOY)

### 1. **Lazy load 3D Scene**
```tsx
// HeroBackground.tsx
const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900" />
})
```
**Impacto esperado**: LCP -500ms, TTI -300ms

---

### 2. **Convertir componentes estáticos a Server Components**
**Target**: `Story.tsx`, `Services.tsx`, `Process.tsx`, `Audience.tsx`, `FAQ.tsx`
**Cambio**: Remover `"use client"` si solo tienen contenido estático.
**Impacto esperado**: Bundle JS -40KB, TTI -200ms

---

### 3. **Priorizar carga de Hero assets**
```tsx
// Hero con imagen de fondo
<Image 
  src="/hero-bg.webp" 
  priority 
  quality={90}
  fill
  alt=""
/>
```
**Impacto esperado**: LCP -800ms

---

### 4. **Optimizar animaciones on-scroll con IntersectionObserver**
```tsx
// Hook centralizado
const useInView = (ref, options) => {
  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return isVisible
}
```
**Impacto esperado**: Main thread -15%, CLS risk -50%

---

### 5. **Auditar y reducir librerías de animación**
**Acción**:
- Grep codebase para ver uso real de GSAP, Framer, Lenis
- Si Lenis solo se usa para smooth scroll → remover, usar CSS
- Si GSAP solo se usa en <3 lugares → migrar a Framer Motion
**Impacto esperado**: Bundle -30KB gzipped, TTI -150ms

---

## 🎯 Checklist de Verificación Post-Optimización

### Build
- [ ] `npm run build` completa sin warnings
- [ ] Bundle JS de `/es` page < 150KB (First Load JS)
- [ ] CSS total < 30KB
- [ ] No hay "Client Component" warnings innecesarios

### Lighthouse (Desktop - Incognito)
- [ ] Performance Score > 95
- [ ] LCP < 1.2s
- [ ] TBT (Total Blocking Time) < 200ms
- [ ] CLS < 0.1

### Lighthouse (Mobile - Slow 4G)
- [ ] Performance Score > 85
- [ ] LCP < 2.5s
- [ ] TBT < 600ms

### Network Tab (Fast 3G throttled)
- [ ] FCP < 1.8s
- [ ] TTI < 3.5s
- [ ] No font-blocking (render blank > 500ms)

### Runtime
- [ ] No scroll jank (60fps consistency)
- [ ] No layout shifts en Hero durante carga
- [ ] Animaciones smooth en mobile (<120fps devices)

---

## 📈 Métricas de éxito esperadas

| Métrica | Before (estimado) | After P0 | After P1 |
|---------|-------------------|----------|----------|
| LCP | 2.8s | <1.5s | <1.2s |
| FCP | 1.5s | <1.0s | <0.9s |
| TTI | 4.2s | <2.5s | <2.0s |
| TBT | 800ms | <300ms | <200ms |
| CLS | 0.15 | <0.05 | <0.02 |
| Bundle JS | 220KB | <150KB | <120KB |
| Lighthouse Score | 78 | >90 | >95 |

---

## 🔧 Herramientas para validación

1. **Lighthouse CI** (local): `npx lighthouse https://localhost:3000/es --view`
2. **Next.js Build Analyzer**: `ANALYZE=true npm run build`
3. **Bundle Analyzer**: Agregar `@next/bundle-analyzer` en `next.config.js`
4. **Vercel Speed Insights**: Ya disponible en dashboard de Vercel
5. **WebPageTest**: https://webpagetest.org con throttling 3G

---

## 🚨 Red Flags a monitorear post-deploy

1. **Hydration errors** en console (señal de Client/Server mismatch)
2. **Long Tasks** >50ms (TBT alto)
3. **Layout shifts** en animaciones de entrada
4. **Font swap** visible (FOUT/FOIT)
5. **Render-blocking resources** en Network waterfall

---

## Próximos Pasos

**Ahora** (antes de tocar código):
1. Correr `npm run build` y capturar métricas baseline
2. Instalar `@next/bundle-analyzer`
3. Auditar uso real de framer-motion, gsap, lenis con grep

**Durante implementación P0**:
4. Aplicar los 5 quick wins en orden
5. Verificar build después de cada cambio
6. Lighthouse score después de cada win

**Post-deploy**:
7. Monitorear Vercel Analytics por 7 días
8. Comparar vs baseline
9. Iterar P1 si P0 logra targets
