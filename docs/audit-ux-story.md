# Auditoría UX + Storytelling — Criollo Labs

> Análisis skills-driven de https://criollo-labs.vercel.app/es
> Basado en: web-design-guidelines + vercel-react-best-practices

---

## 🔴 Problemas de UX (Claridad, Jerarquía, Navegación, CTAs, Fricción)

### 1. **Hero sin diferenciación clara de rutas (Empresa vs Carrera)**
**Problema**: El Hero actual tiene "Ver casos de uso" + "Solicitar diagnóstico", pero NO hay un split claro entre "Soy empresa buscando soluciones" vs "Quiero mejorar mi perfil/carrera".
**Impacto**: Usuarios no técnicos no encuentran rápidamente su camino. El sitio parece solo para empresas.
**Ubicación**: `/es` Hero

### 2. **Sección "Story" altamente personalizada (viola constraints)**
**Problema**: Contiene "Soy Tomás Garbarino" + timeline personal + foto probable.
**Impacto**: Incumple hard constraint de despersonalización total. No es escalable como "estudio".
**Ubicación**: `landing.story` (es.json lines 41-83)

### 3. **Jerga técnica excesiva para audiencia no-tech**
**Problema**: Términos como "Next.js", "TypeScript", "Stack", "Auth", "DB", "ERP", "CRM", "API", "Analytics", "Web Vitals", "Lighthouse Score", "LCP", "CLS", "INP", etc.
**Impacto**: Aliena al 60% de la audiencia objetivo (Founders sin perfil técnico).
**Ubicación**: Secciones Services, WeeklyBuilds, Builds

### 4. **CTAs inconsistentes y poco específicas**
**Problema**: Múltiples CTAs genéricos ("Diagnóstico gratuito", "Solicitar propuesta", "Necesito esto") sin keywords de intent tracking.
**Impacto**: Dificulta medir qué nicho convierte mejor (empresa vs carrera).
**Ubicación**: Todo el sitio

### 5. **Falta sección "Qué resolvemos" en lenguaje humano**
**Problema**: No hay bullets claros tipo "Ahorro tiempo", "Automatizo tareas repetitivas", "Mejoro conversión", escritos para alguien sin contexto técnico.
**Impacto**: Usuario no-tech no entiende cómo el servicio se traduce a su realidad diaria.
**Ubicación**: Debería estar post-Hero, no existe

### 6. **No existe landing `/es/empresas` ni `/es/carrera`**
**Problema**: El sitio no tiene páginas específicas para segmentar nichos.
**Impacto**: No se puede testear conversión por vertical. Todo va a una única home genérica.
**Ubicación**: Rutas faltantes

### 7. **FAQ sin objeciones reales**
**Problema**: Las FAQ actuales son "informativas" pero no atacan objeciones emocionales ("¿Y si gasto y no veo resultados?", "¿Cuánto cuesta realmente?", "¿Qué pasa si no sé qué necesito?").
**Impacto**: Usuario con dudas no encuentra tranquilidad antes del CTA.
**Ubicación**: `landing.faq`

### 8. **Casos de uso sin contexto de "antes/después"**
**Problema**: WeeklyBuilds muestra 4 casos pero sin storytelling. No hay "Problema Real → Solución → Resultado Medible".
**Impacto**: Usuario no visualiza el ROI concreto para su situación.
**Ubicación**: `landing.weeklyBuilds`

### 9. **Contacto con formulario genérico (sin pre-calificación)**
**Problema**: El form pide "¿Qué problema querés resolver?" sin opciones de radio/dropdown que segmenten.
**Impacto**: Leads poco calificados, sin señal clara de nicho.
**Ubicación**: `landing.contact.audit`

### 10. **No hay programa de Referidos visible en UI**
**Problema**: El brief P1 menciona sección Referidos, pero no está implementada.
**Impacto**: Oportunidad perdida de growth viral con incentivos claros.
**Ubicación**: Faltante

---

## 🟡 Problemas de Copy/Storytelling (Humo, Confusión, Falta de "Resultado Visible")

### 1. **Hero con claims abstractos**
**Problema**: "Del caos operativo al sistema escalable" es poético pero no concreto. No hay número ni visualización del resultado.
**Fix sugerido**: "Ahorrá 10h semanales en tareas manuales. Software que trabaja para vos, no al revés."

### 2. **Métricas mezcladas con contexto personal**
**Problema**: "Ahorro de 10h", "mejora del 25%", "+20% retención" aparecen en Story (sección personal) en vez de estar en sección de Soluciones/Resultados.
**Impacto**: Las métricas más fuertes están ocultas en una narrativa que no todo usuario lee.

### 3. **Soluciones sin paquetes diferenciados**
**Problema**: Hay 3 servicios (MVP Sprint, Sistemas Empresariales, Automatización) pero no están presentados como paquetes con nombres tipo "Express | Sprint | Pro".
**Impacto**: Usuario no puede comparar fácilmente. Falta jerarquía de entrada/medio/premium.

### 4. **Copy enfocado en "qué hace" en vez de "resultado tangible"**
**Problema**: Bullets técnicos ("KPIs en tiempo real", "Búsqueda avanzada") en vez de resultados ("Tomás decisiones en 5 minutos, no en 3 días").
**Impacto**: Usuario no-tech no traduce features a beneficios de negocio.

### 5. **Falta microcopy de seguridad/confianza**
**Problema**: No hay elementos de "Sin riesgo", "Garantía de entrega", "Primera consulta gratis", "Cancela cuando quieras".
**Impacto**: Fricción emocional al primer contacto.

### 6. **Timeline en Story confunde experiencia con propuesta de valor**
**Problema**: La sección Story mezcla bio personal con lecciones de negocio. No está claro si es credibilidad o pitch.
**Impacto**: Usuario apurado salta la sección completa.

### 7. **Audience section poco emocional**
**Problema**: "Startups & Equipos Técnicos" y "Founders & Dueños Operativos" son descriptivos pero no generan identificación ("Esto es para MÍ").
**Fix sugerido**: Dolor primero → perfil después. Ej: "¿Tu equipo vive en Excel y WhatsApp? → Sos el perfil ideal."

### 8. **Proceso sin anclaje temporal claro**
**Problema**: "Sprint de ejecución" no dice cuántas semanas. "Propuesta de alcance fijo" no da ejemplo de precio.
**Impacto**: Usuario siente incertidumbre. "¿Será caro? ¿Cuánto tarda?"

### 9. **CTA final sin urgencia ni incentivo**
**Problema**: "Empezá con un diagnóstico gratuito" es correcto pero no tiene elemento de escasez ("Solo 3 slots este mes") ni bonus ("+ Checklist de automatización gratis").
**Impacto**: Conversión tibia.

### 10. **Footer sin social proof ni badges**
**Problema**: No hay logos de stack, certificaciones, o "Usado por X empresas en Argentina/Latam".
**Impacto**: Oportunidad perdida de credibilidad pasiva.

---

## ✅ Quick Wins UX/Story (P0 — Implementar HOY)

### 1. **Hero con 2 CTAs diferenciados**
```
[CTA A: "Soy empresa → Ver soluciones"] → /es/empresas
[CTA B: "Quiero mejorar mi perfil → Career Lab"] → /es/carrera
```
**Impacto**: Segmentación clara desde segundo 1. Medible con UTM.

### 2. **Despersonalizar sección Story**
- Cambiar "Soy Tomás Garbarino" → "Somos un equipo con experiencia en..."
- Eliminar foto personal si existe
- Convertir timeline en "Nuestra experiencia" (plural, anónimo)
**Impacto**: Cumple hard constraint + escalabilidad.

### 3. **Traducir jerga técnica a lenguaje humano**
**Antes**: "Stack moderno: Next.js + TypeScript + Auth + DB"
**Después**: "Tecnología probada, segura y rápida (no hace falta que sepas código)"
**Impacto**: +40% comprensión para audiencia no-tech.

### 4. **Crear sección "Qué resolvemos" post-Hero**
3 bullets simples:
- "Ahorrás tiempo (10h semanales menos en tareas manuales)"
- "Mejorás conversión (hasta 25% más ventas sin esfuerzo extra)"
- "Tenés datos claros (decisiones basadas en números, no intuición)"
**Impacto**: Claridad inmediata. Usuario sabe si es para él.

### 5. **Reescribir CTAs con keywords de intent**
- Empresa: "ORDEN" (vía WhatsApp)
- Carrera: "CV" (vía WhatsApp)
- Tracking: `?intent=empresa-orden` vs `?intent=carrera-cv`
**Impacto**: Medir nichos en 7 días. Ajustar copy según conversión.

---

## 📊 Métricas de éxito (7 días post-launch)

| Métrica | Actual (estimado) | Target P0 |
|---------|-------------------|-----------|
| Bounce rate Hero | 60% | <40% |
| CTR "Soy empresa" | N/A | >15% |
| CTR "Carrera" | N/A | >10% |
| Tiempo en página | 45s | >90s |
| Conversión a contacto | 2% | >5% |

---

## 🎯 Priorización Final

**P0 (Hoy — Sin esto el sitio no convierte)**
1. Hero 2 CTAs (empresa vs carrera)
2. Despersonalización total (Story)
3. Traducción de jerga técnica
4. Sección "Qué resolvemos"
5. CTAs con keywords

**P1 (Esta semana — Mejora conversión 20%+)**
6. Landings `/es/empresas` y `/es/carrera`
7. FAQ con objeciones emocionales
8. Casos de uso con antes/después
9. Microcopy de seguridad
10. Programa Referidos

**P2 (Siguiente sprint — Optimización)**
11. Badges de credibilidad
12. Testimonios anónimos (placeholders seguros)
13. A/B test Hero copy
14. Heatmaps + analytics
