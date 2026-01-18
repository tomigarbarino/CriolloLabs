'use client'

import { cn } from '@/lib/utils'

export function BuildPreviewWhatsappFollowup() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden">
            <Header slug="whatsapp-followup" />

            <div className="mt-5 grid gap-4 md:grid-cols-12">
                <Panel title="Pipeline" className="md:col-span-7 h-56">
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        <KanbanCol title="Nuevo" items={2} />
                        <KanbanCol title="Interesado" items={3} />
                        <KanbanCol title="Cerrado" items={1} />
                    </div>
                </Panel>

                <Panel title="Lead seleccionado" className="md:col-span-5 h-56">
                    <div className="mt-3 space-y-2">
                        <Row label="Nombre" value="Juan Pérez" />
                        <Row label="Estado" value="Interesado" />
                        <Row label="Próxima acción" value="Follow-up hoy 18:00" />
                        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">Último mensaje</p>
                            <p className="mt-1 text-sm text-white/70 leading-relaxed">
                                “Dale, pasame precio y si podemos arrancar esta semana.”
                            </p>
                        </div>
                    </div>
                </Panel>

                <Panel title="Automations" className="md:col-span-12 h-40">
                    <div className="mt-3 grid md:grid-cols-3 gap-2">
                        <Chip>Si 24h sin respuesta → recordatorio</Chip>
                        <Chip>Si “precio” → enviar plantilla</Chip>
                        <Chip>Si “ok” → agendar reunión</Chip>
                    </div>
                </Panel>
            </div>
        </div>
    )
}

function Header({ slug }: { slug: string }) {
    return (
        <div className="flex items-center justify-between">
            <p className="text-sm text-white/70">
                Preview · <span className="text-white/45 font-mono">{slug}</span>
            </p>
            <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
        </div>
    )
}

function Panel({
    title,
    className,
    children,
}: {
    title: string
    className?: string
    children?: React.ReactNode
}) {
    return (
        <div
            className={cn(
                'rounded-2xl border border-white/10 bg-white/[0.03] p-4',
                'shadow-[0_40px_120px_-90px_rgba(0,0,0,0.95)]',
                className
            )}
        >
            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">{title}</p>
            {children}
        </div>
    )
}

function KanbanCol({ title, items }: { title: string; items: number }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">{title}</p>
            <div className="mt-2 space-y-2">
                {Array.from({ length: items }).map((_, i) => (
                    <div key={i} className="h-8 rounded-lg border border-white/10 bg-white/[0.03]" />
                ))}
            </div>
        </div>
    )
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="text-sm text-white/60">{label}</span>
            <span className="text-xs font-mono text-white/45">{value}</span>
        </div>
    )
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/70">
            {children}
        </div>
    )
}
