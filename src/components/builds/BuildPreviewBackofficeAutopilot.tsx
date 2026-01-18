'use client'

import { cn } from '@/lib/utils'

export function BuildPreviewBackofficeAutopilot() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden">
            <Header slug="backoffice-autopilot" />

            <div className="mt-5 grid gap-4 md:grid-cols-12">
                <Panel title="Workflow" className="md:col-span-7 h-56">
                    <div className="mt-3 grid gap-2">
                        <Node title="Trigger" subtitle="Pago aprobado (MP/Stripe)" />
                        <Node title="Acción" subtitle="Generar factura + guardar" />
                        <Node title="Acción" subtitle="Enviar email + notificar Slack" />
                    </div>
                </Panel>

                <Panel title="Ejecuciones (logs)" className="md:col-span-5 h-56">
                    <div className="mt-3 space-y-2">
                        <LogRow status="ok" text="invoice.create · success · 1.2s" />
                        <LogRow status="ok" text="email.send · success · 0.4s" />
                        <LogRow status="bad" text="slack.post · failed · retrying" />
                        <LogRow status="ok" text="sheet.append · success · 0.2s" />
                    </div>
                </Panel>

                <Panel title="Integrations" className="md:col-span-12 h-40">
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Chip>MercadoPago</Chip>
                        <Chip>Stripe</Chip>
                        <Chip>Sheets</Chip>
                        <Chip>Email</Chip>
                        <Chip>Slack</Chip>
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

function Node({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">{title}</p>
            <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        </div>
    )
}

function LogRow({ status, text }: { status: 'ok' | 'bad'; text: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="text-sm text-white/70">{text}</span>
            <span className={cn('h-2 w-2 rounded-full', status === 'ok' ? 'bg-emerald-400/80' : 'bg-red-400/80')} />
        </div>
    )
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full px-3 py-1 text-xs bg-white/5 border border-white/10 text-white/70">
            {children}
        </span>
    )
}
