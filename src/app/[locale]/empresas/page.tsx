import { LandingHeader } from '@/components/landing/LandingHeader'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { Container } from '@/components/ui/Container'
import { CTAButton } from '@/components/ui/CTAButton'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
    title: 'Soluciones para Empresas — Criollo Labs',
    description: 'Sistemas que ordenan tu operación. Del caos operativo al sistema escalable. Sin humo, con resultados medibles.',
}

const packages = [
    {
        name: "Express",
        duration: "5-7 días",
        deliverable: "Diagnóstico + Plan + 1 Quick Win concreto",
        description: "Ideal para validar si el software puede resolver tu fricción operativa específica.",
        includes: [
            "Sesión de diagnóstico gratuita (30 min)",
            "Análisis de procesos actuales (dónde perdés tiempo)",
            "Plan de acción priorizado",
            "1 automatización rápida implementada (ej: reporte automático, integración simple)"
        ]
    },
    {
        name: "Sprint",
        duration: "2-4 semanas",
        deliverable: "Primera versión usable funcionando",
        description: "Tu sistema mínimo operando. Alcance cerrado, entrega garantizada.",
        includes: [
            "Tablero operativo o herramienta específica",
            "Integración con Excel/WhatsApp/Email",
            "Capacitación para tu equipo",
            "Soporte por 2 semanas post-entrega"
        ],
        highlight: true
    },
    {
        name: "Pro",
        duration: "6-12 semanas",
        deliverable: "Sistema completo a medida",
        description: "Solución integral que escala con tu negocio.",
        includes: [
            "Todo lo de Sprint +",
            "Múltiples integraciones (gestión, clientes, pagos)",
            "Roles y permisos personalizados",
            "Monitoreo y alertas automáticas",
            "Documentación completa + handover"
        ]
    }
]

const faqs = [
    {
        q: "¿Y si no sé qué necesito técnicamente?",
        a: "Normal. En el diagnóstico gratuito traducimos tu problema de negocio a solución técnica. Te vas con un plan accionable aunque no trabajemos juntos."
    },
    {
        q: "¿Cuánto cuesta?",
        a: "Precio cerrado por proyecto, sin sorpresas. Express desde USD 500. Sprint desde USD 2.500. Pro cotización personalizada según alcance."
    },
    {
        q: "¿Trabajan remoto?",
        a: "100% remoto. Nos sincronizamos por WhatsApp, Meet o la herramienta que uses. Comunicación clara, sin fricción."
    },
    {
        q: "¿Qué garantías tengo?",
        a: "Alcance fijo, precio fijo, timeline definido. Sabés exactamente qué vas a recibir y cuándo. Si no cumplimos, no cobramos."
    },
    {
        q: "¿Qué pasa después de la entrega?",
        a: "Te dejamos código, documentación y video walkthrough. Opcional: soporte mensual o nuevas features a demanda."
    }
]

export default function EmpresasPage() {
    return (
        <>
            <LandingHeader />
            <main className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
                    <Container size="lg">
                        <div className="text-center max-w-4xl mx-auto">
                            <Badge variant="outline" size="md" className="mb-6 bg-white/5 border-white/10 text-white">
                                Para Empresas
                            </Badge>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
                                ¿Tu negocio creció pero tus sistemas no?
                            </h1>

                            <p className="text-xl md:text-2xl text-white/80 mb-8 text-pretty max-w-3xl mx-auto">
                                Del Excel y WhatsApp al sistema que te ahorra tiempo y te da control. Medimos el impacto desde el inicio: menos errores, más visibilidad, mejor operación.
                            </p>

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
                                    Diagnóstico Gratuito
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
                                    Caos operativo que reconocés
                                </h2>
                                <ul className="space-y-3 text-white/70">
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Tu equipo vive entre Excel, WhatsApp y correos. Nadie sabe dónde está la info actualizada.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Gastás horas en copiar/pegar, generar reportes manualmente o perseguir datos.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Las decisiones se retrasan porque no tenés visibilidad de qué está pasando.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent-orange mt-1">→</span>
                                        <span>Sentís que &quot;el software te queda chico&quot; pero no sabés por dónde empezar.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Sistema que resuelve
                                </h2>
                                <ul className="space-y-3 text-white/70">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>Centralizás la info en un solo lugar (tableros, reportes automáticos).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>Automatizás tareas repetitivas (seguimiento, cargas, alertas).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>Tom ás decisiones rápido con datos claros (ventas, ops, estado de pedidos).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-purple mt-1 w-5 h-5 flex-shrink-0" />
                                        <span>Escalás sin caos: el sistema crece con tu negocio.</span>
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
                                Alcance fijo, precio cerrado, timeline definido. Empezá con Express para validar.
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
                                                Más popular
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
                                Empezá con un diagnóstico gratuito
                            </h2>
                            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                                30 minutos, sin compromiso. Te vas con un plan accionable aunque no trabajemos juntos.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <CTAButton
                                    href="https://wa.me/5491234567890?text=Hola,%20quiero%20un%20diagnóstico%20para%20mi%20empresa"
                                    variant="primary"
                                    size="lg"
                                >
                                    WhatsApp
                                </CTAButton>
                                <CTAButton
                                    href="mailto:contacto@criollolabs.com?subject=Diagnóstico Empresas"
                                    variant="outline"
                                    size="lg"
                                >
                                    Email
                                </CTAButton>
                            </div>

                            <p className="text-sm text-white/50 mt-6">
                                Respuesta en 24-48h. Contacto directo con el equipo.
                            </p>
                        </div>
                    </Container>
                </section>
            </main>
            <LandingFooter />
        </>
    )
}
