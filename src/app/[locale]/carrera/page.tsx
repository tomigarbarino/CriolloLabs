import { LandingHeader } from '@/components/landing/LandingHeader'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { Container } from '@/components/ui/Container'
import { CTAButton } from '@/components/ui/CTAButton'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react'

export const metadata = {
    title: 'Mejorá tu Perfil Tech — Criollo Labs',
    description: 'CV profesional + Portfolio que destaca. No prometemos trabajo, te dejamos mejor preparado para competir.',
}

const packages = [
    {
        name: "CV Express",
        duration: "3-5 días",
        deliverable: "CV reescrito + LinkedIn optimizado",
        description: "Revisión profesional de tu CV y perfil de LinkedIn. Destacá tu experiencia sin humo.",
        includes: [
            "Análisis de tu CV actual (qué mejora)",
            "Rewrite completo (lenguaje claro, sin jerga innecesaria)",
            "Optimización de LinkedIn (headline, about, skills)",
            "1 revisión incluida"
        ],
        highlight: true
    },
    {
        name: "Portfolio Sprint",
        duration: "1-2 semanas",
        deliverable: "Landing personal + 1 proyecto bien presentado",
        description: "Tu portfolio propio deployado. Mostrás tus proyectos de forma profesional.",
        includes: [
            "Todo lo de CV Express +",
            "Landing personal (diseño limpio, rápido)",
            "Showcase de 1 proyecto con contexto (problema/solución/tech)",
            "Código fuente + deploy en Vercel/Netlify"
        ]
    },
    {
        name: "Career Pro",
        duration: "4 semanas",
        deliverable: "Portfolio completo + mentorship",
        description: "Paquete integral: CV + Portfolio + guía para búsqueda laboral.",
        includes: [
            "Todo lo de Portfolio Sprint +",
            "Showcase de 3 proyectos (con narrativa)",
            "Sección 'Sobre mí' profesional",
            "2 sesiones de mentorship (preparación entrevistas, estrategia de búsqueda)",
            "LinkedIn strategy (cómo postear, a quién seguir)"
        ]
    }
]

const faqs = [
    {
        q: "¿Necesito experiencia previa?",
        a: "No, pero ayuda. Si tenés proyectos personales, bootcamp o autodidacta, trabajamos con tu contexto actual. Si no tenés nada, te guiamos para crear algo presentable."
    },
    {
        q: "¿Me garantizan trabajo?",
        a: "No. Te ayudamos a verte mejor en papel y online, pero el resto depende del mercado, tu esfuerzo y tu fit con las empresas. Honestamente: no podemos prometer lo que no controlamos."
    },
    {
        q: "¿Para qué sirve si ya tengo CV en Canva?",
        a: "Canva es lindo, pero los recruiters buscan claridad, no diseño bonito. Reescribimos para que tu experiencia se entienda en 10 segundos. ATS-friendly, sin buzzwords vacíos."
    },
    {
        q: "¿Cuánto cuesta?",
        a: "CV Express: USD 150. Portfolio Sprint: USD 400. Career Pro: USD 800. Precio fijo, sin sorpresas."
    },
    {
        q: "¿Trabajan remoto?",
        a: "100% remoto. Nos sincronizamos por WhatsApp, Meet o Zoom. Te mandamos avances, revisás, iteramos."
    }
]

export default function CarreraPage() {
    return (
        <>
            <LandingHeader />
            <main className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
                    <Container size="lg">
                        <div className="text-center max-w-4xl mx-auto">
                            <Badge variant="outline" size="md" className="mb-6 bg-white/5 border-white/10 text-white">
                                Para Tu Carrera
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
                                ¿Querés destacarte como developer?
                            </h1>

                            <p className="text-xl md:text-2xl text-white/80 mb-6 text-pretty max-w-3xl mx-auto">
                                CV profesional + Portfolio que no pasa desapercibido. Te dejamos mucho mejor preparado para competir.
                            </p>

                            {/* Disclaimer Honesto */}
                            <div className="mb-8 p-4 rounded-xl border border-accent-orange/30 bg-accent-orange/5 max-w-2xl mx-auto">
                                <div className="flex items-start gap-3 text-left">
                                    <AlertCircle className="w-5 h-5 text-accent-orange mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-white/90">
                                        <strong>Honestamente:</strong> No te prometemos un trabajo. Te dejamos mucho mejor preparado y presentable para competir. El resto depende del mercado y tu esfuerzo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <CTAButton
                                    href="#paquetes"
                                    variant="primary"
                                    size="lg"
                                    icon={<ArrowRight size={20} />}
                                >
                                    Ver Paquetes
                                </CTAButton>
                                <CTAButton
                                    href="#contacto"
                                    variant="outline"
                                    size="lg"
                                >
                                    Consultar Precios
                                </CTAButton>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Dolor / Promesa */}
                <section className="py-16 md:py-20 bg-white/[0.01]">
                    <Container size="lg">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Problema que reconocés
                                </h2>
                                <ul className="space-y-3 text-white/70">
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Tu CV parece genérico. No destaca por qué sos bueno.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Tu portfolio es un repo de GitHub sin contexto. Nadie entiende qué hiciste.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>LinkedIn está medio vacío o lleno de buzzwords sin sustancia.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Mandás CVs y no te llaman. No sabés qué está fallando.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Lo que te llevás
                                </h2>
                                <ul className="space-y-3 text-white/70">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>CV claro, ATS-friendly, que se lee en 10 segundos.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>Portfolio con contexto (problema → solución → tech usada).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>LinkedIn optimizado (headline que engancha, about que cuenta una historia).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>Estrategia concreta para destacar (qué postear, cómo networking).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Paquetes */}
                <section id="paquetes" className="py-20 md:py-28">
                    <Container size="lg">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                Paquetes
                            </h2>
                            <p className="text-lg text-white/70 max-w-2xl mx-auto">
                                Empezá con CV Express (el que más piden). Precio fijo, sin vueltas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.name}
                                    className={`relative p-8 rounded-2xl border ${pkg.highlight
                                        ? 'border-accent-purple bg-accent-purple/5'
                                        : 'border-white/10 bg-white/[0.02]'
                                        } backdrop-blur-sm hover:border-white/20 transition-all`}
                                >
                                    {pkg.highlight && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <Badge variant="outline" size="sm" className="bg-accent-purple text-white border-accent-purple">
                                                Recomendado
                                            </Badge>
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                        <p className="text-sm text-white/60 mb-4">{pkg.duration}</p>
                                        <p className="text-white/80 text-pretty">{pkg.description}</p>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-sm uppercase tracking-wider text-white/50 mb-2">Entregable</p>
                                        <p className="text-white font-medium">{pkg.deliverable}</p>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-sm uppercase tracking-wider text-white/50 mb-3">Incluye</p>
                                        <ul className="space-y-2">
                                            {pkg.includes.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                                    <CheckCircle2 className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <CTAButton
                                        href={`#contacto?paquete=${pkg.name}`}
                                        variant={pkg.highlight ? "primary" : "outline"}
                                        className="w-full"
                                    >
                                        Solicitar {pkg.name}
                                    </CTAButton>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* FAQ */}
                <section className="py-16 md:py-20 bg-white/[0.01]">
                    <Container size="md">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Preguntas Frecuentes
                        </h2>

                        <div className="space-y-6">
                            {faqs.map((faq, _idx) => (
                                <div key={_idx} className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA Final */}
                <section id="contacto" className="py-20 md:py-28">
                    <Container size="md">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Mejorá tu perfil ahora
                            </h2>
                            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                                Arrancamos esta semana. Te mandamos el primer draft en 3-5 días.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <CTAButton
                                    href="https://wa.me/5491234567890?text=Hola,%20quiero%20mejorar%20mi%20CV%20y%20portfolio"
                                    variant="primary"
                                    size="lg"
                                >
                                    WhatsApp
                                </CTAButton>
                                <CTAButton
                                    href="mailto:contacto@criollolabs.com?subject=Consulta%20Carrera"
                                    variant="outline"
                                    size="lg"
                                >
                                    Email
                                </CTAButton>
                            </div>

                            <p className="text-sm text-white/50 mt-6">
                                Respuesta en 24-48h. Charlamos, vemos tu contexto y arrancamos.
                            </p>
                        </div>
                    </Container>
                </section>
            </main>
            <LandingFooter />
        </>
    )
}
