'use client'

import { useEffect, useRef, useState } from 'react'

const chapters = [
  {
    title: 'Tu negocio creció.',
    accent: 'Que tus procesos lo acompañen.',
    text: 'Software a medida para conectar lo que hoy resolvés entre planillas, mensajes y tareas manuales.',
  },
  {
    title: 'Las piezas ya están.',
    accent: 'Hagamos que trabajen juntas.',
    text: 'Entendemos tu operación y conectamos herramientas, personas e información en un proceso claro.',
  },
  {
    title: 'Menos fricción.',
    accent: 'Más espacio para avanzar.',
    text: 'Diseñamos, implementamos y acompañamos la mejora. Con alcance acordado y resultados que podamos medir.',
  },
]

export default function ScrollExperience() {
  const section = useRef<HTMLElement>(null),
    mount = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState(0),
    [ready, setReady] = useState(false),
    [still, setStill] = useState(false)
  useEffect(() => {
    const host = mount.current,
      root = section.current
    if (!host || !root) return
    let disposed = false,
      generation = 0,
      cleanup = () => {}
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    const setup = async () => {
      const current = ++generation
      cleanup()
      cleanup = () => {}
      setReady(false)
      if (preference.matches) {
        setStill(true)
        return
      }
      setStill(false)
      try {
        const [T, { gsap }, { ScrollTrigger }, { mergeGeometries }] = await Promise.all([
          import('three'),
          import('gsap'),
          import('gsap/ScrollTrigger'),
          import('three/examples/jsm/utils/BufferGeometryUtils.js'),
        ])
        if (disposed || current !== generation || preference.matches) return
        gsap.registerPlugin(ScrollTrigger)
        const releases: Array<() => void> = []
        cleanup = () => {
          releases
            .splice(0)
            .reverse()
            .forEach((release) => release())
        }
        let renderer:
          | InstanceType<typeof T.WebGLRenderer>
          | import('three/examples/jsm/renderers/SVGRenderer.js').SVGRenderer
        let webgl = true
        try {
          const gpu = new T.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'low-power',
          })
          gpu.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.2 : 1.6))
          gpu.setClearColor(0, 0)
          gpu.toneMapping = T.ACESFilmicToneMapping
          gpu.toneMappingExposure = 1.2
          renderer = gpu
          releases.push(() => gpu.dispose())
        } catch {
          const { SVGRenderer } = await import('three/examples/jsm/renderers/SVGRenderer.js')
          if (disposed || current !== generation || preference.matches) return
          renderer = new SVGRenderer()
          renderer.setQuality('high')
          renderer.setClearColor(new T.Color(0xe8dcf5), 1)
          webgl = false
        }
        renderer.outputColorSpace = T.SRGBColorSpace
        host.dataset.renderer = webgl ? 'webgl' : 'svg'
        releases.push(() => {
          renderer.domElement.remove()
          delete host.dataset.renderer
        })
        host.appendChild(renderer.domElement)
        const scene = new T.Scene(),
          camera = new T.PerspectiveCamera(36, 1, 0.1, 60),
          sculpture = new T.Group()
        scene.add(sculpture)
        scene.add(
          webgl ? new T.HemisphereLight(0xffffff, 0x635179, 2) : new T.AmbientLight(0xffffff, 0.45)
        )
        const key = new T.DirectionalLight(0xfff3e9, webgl ? 4 : 0.85)
        key.position.set(-3, 6, 8)
        scene.add(key)
        const edge = new T.DirectionalLight(0xbfa0ff, webgl ? 3 : 0.35)
        edge.position.set(6, -2, 2)
        scene.add(edge)
        const materials = [
          new T.MeshStandardMaterial({ color: 0x7040b8, roughness: 0.25, metalness: 0.28 }),
          new T.MeshStandardMaterial({ color: 0xe9dff4, roughness: 0.3, metalness: 0.12 }),
          new T.MeshStandardMaterial({ color: 0xed793f, roughness: 0.28, metalness: 0.18 }),
        ]
        releases.push(() => materials.forEach((m) => m.dispose()))
        const objects: Array<{
          mesh: InstanceType<typeof T.Mesh>
          scatter: InstanceType<typeof T.Vector3>
          spin: InstanceType<typeof T.Euler>
          target: InstanceType<typeof T.Vector3>
          angle: number
        }> = []
        const count = 18
        const arc = ((Math.PI * 2) / count) * 0.92
        const radialSegments = webgl ? 16 : 8
        const tube = new T.TorusGeometry(2.05, 0.32, radialSegments, webgl ? 16 : 5, arc)
        const startCap = new T.CircleGeometry(0.32, radialSegments)
        startCap.rotateX(Math.PI / 2)
        startCap.translate(2.05, 0, 0)
        const endCap = new T.CircleGeometry(0.32, radialSegments)
        endCap.rotateX(-Math.PI / 2)
        endCap.rotateZ(arc)
        endCap.translate(Math.cos(arc) * 2.05, Math.sin(arc) * 2.05, 0)
        const geometry = mergeGeometries([tube, startCap, endCap])
        tube.dispose()
        startCap.dispose()
        endCap.dispose()
        releases.push(() => geometry.dispose())
        for (let layer = 0; layer < 2; layer++)
          for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            const mesh = new T.Mesh(geometry, materials[i === 3 || i === 12 ? 2 : layer])
            const target = new T.Vector3(0, 0, layer === 0 ? -0.44 : 0.44)
            const spread = 1.2 + Math.sin(i * 4.7 + layer) * 0.6
            const scatter = new T.Vector3(
              Math.cos(angle) * spread,
              Math.sin(angle) * spread,
              Math.sin(i * 3.4) * 1.7 + target.z
            )
            const spin = new T.Euler(
              Math.sin(i * 2) * 0.9,
              Math.cos(i * 3) * 0.8,
              angle + Math.sin(i) * 0.4
            )
            sculpture.add(mesh)
            objects.push({ mesh, scatter, spin, target, angle })
          }
        // A single copper signal crosses the assembled system with scroll, never on an idle loop.
        const signal = new T.Mesh(
          new T.SphereGeometry(0.19, webgl ? 20 : 8, webgl ? 12 : 6),
          materials[2]
        )
        sculpture.add(signal)
        releases.push(() => signal.geometry.dispose())
        const state = { progress: 0 }
        let visible = true,
          lastPhase = -1
        const render = () => {
          if (disposed || !visible || document.hidden) return
          const p = state.progress,
            join = T.MathUtils.smoothstep(p, 0.08, 0.68)
          objects.forEach((o) => {
            o.mesh.position.lerpVectors(o.scatter, o.target, join)
            o.mesh.rotation.set(
              o.spin.x * (1 - join),
              o.spin.y * (1 - join),
              T.MathUtils.lerp(o.spin.z, o.angle, join)
            )
          })
          sculpture.rotation.set(0.45 + p * 0.35, -0.4 + p * 0.95, -0.22 + p * 0.18)
          signal.position.set(
            Math.cos(p * Math.PI * 4) * 2.05,
            Math.sin(p * Math.PI * 4) * 2.05,
            0.88
          )
          signal.visible = p > 0.55
          sculpture.scale.setScalar(innerWidth < 700 ? 1 : Math.min(0.76, innerWidth / 1775))
          camera.position.set(0, 0, innerWidth < 700 ? 11 : 13 - p * 1.1)
          camera.lookAt(0, 0, 0)
          renderer.render(scene, camera)
          const next = p < 0.32 ? 0 : p < 0.72 ? 1 : 2
          if (lastPhase !== next) {
            lastPhase = next
            setPhase(next)
          }
        }
        const resize = () => {
          const w = host.clientWidth,
            h = host.clientHeight
          if (!w || !h) return
          if (renderer instanceof T.WebGLRenderer) renderer.setSize(w, h, false)
          else renderer.setSize(w, h)
          camera.aspect = w / h
          camera.updateProjectionMatrix()
          render()
        }
        const observer = new ResizeObserver(resize)
        observer.observe(host)
        releases.push(() => observer.disconnect())
        const visibility = new IntersectionObserver(([e]) => {
          visible = e.isIntersecting
          if (visible) render()
        })
        visibility.observe(root)
        releases.push(() => visibility.disconnect())
        const onVisibility = () => {
          if (!document.hidden) render()
        }
        document.addEventListener('visibilitychange', onVisibility)
        releases.push(() => document.removeEventListener('visibilitychange', onVisibility))
        const onLost = (e: Event) => {
          e.preventDefault()
          cleanup()
          cleanup = () => {}
          setStill(true)
          setReady(false)
        }
        renderer.domElement.addEventListener('webglcontextlost', onLost)
        releases.push(() => renderer.domElement.removeEventListener('webglcontextlost', onLost))
        const tween = gsap.to(state, {
          progress: 1,
          ease: 'none',
          onUpdate: render,
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        })
        releases.push(() => {
          tween.scrollTrigger?.kill()
          tween.kill()
        })
        resize()
        setReady(true)
      } catch {
        if (!disposed && current === generation) {
          cleanup()
          setStill(true)
          setReady(false)
        }
      }
    }
    void setup()
    preference.addEventListener('change', setup)
    return () => {
      disposed = true
      preference.removeEventListener('change', setup)
      cleanup()
    }
  }, [])
  return (
    <section
      ref={section}
      className={`scroll-experience ${still ? 'experience-static' : ''}`}
      aria-label="De procesos dispersos a una operación conectada"
    >
      <h1 className="sr-only">Software a medida para mejorar tu operación — Criollo Labs</h1>
      <div className="experience-stage">
        <div className="experience-art" ref={mount} aria-hidden="true" />
        {!ready && (
          <div className="experience-fallback" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        <div className="experience-copy wrap">
          {chapters.map((c, i) => (
            <div
              key={c.title}
              className={`experience-chapter ${phase === i ? 'chapter-active' : ''}`}
              aria-hidden={!still && phase !== i}
            >
              <h2>
                {c.title}
                <br />
                <span>{c.accent}</span>
              </h2>
              <p>{c.text}</p>
            </div>
          ))}
          <div className="experience-actions">
            <a className="button" href="#contacto">
              Revisemos tu proceso
            </a>
            <a className="text-link" href="#soluciones">
              Ver soluciones
            </a>
          </div>
        </div>
        <div className="experience-bottom wrap">
          <p>
            {still
              ? 'Software · Integraciones · Mejora continua'
              : 'Seguí bajando. Las piezas empiezan a conectar.'}
          </p>
          <span>Exploración visual de un proceso · Criollo Labs</span>
          <a href="#soluciones">Saltar animación</a>
        </div>
        {!still && (
          <div className="experience-progress" aria-hidden="true">
            {chapters.map((_, i) => (
              <span key={i} className={phase >= i ? 'passed' : ''} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
