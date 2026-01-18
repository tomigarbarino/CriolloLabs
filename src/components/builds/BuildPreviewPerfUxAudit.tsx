'use client'

import { cn } from '@/lib/utils'

export function BuildPreviewPerfUxAudit() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden">
            <Header slug="perf-ux-audit" />

            <div className="mt-5 grid gap-4 md:grid-cols-12">
                <Score title="Lighthouse" value="92" className="md:col-span-4" />
                <Score title="LCP" value="2.1s" className="md:col-span-4" />
                <Score title="CLS" value="0.03" className="md:col-span-4" />

                <Panel title="Prioridades" className="md:col-span-7 h-56">
                    <div className="mt-3 space-y-2">
                        <Item label="Eliminar JS innecesario en above-the-fold" tag="Quick win" />
                        <Item label="Optimizar imágenes + responsive sizing" tag="Quick win" />
                        <Item label="Split de routes + prefetch control" tag="Structural" />
                        <Item label="Medición: Web Vitals + alertas" tag="Guardrail" />
                    </div>
                </Panel>

                <Panel title="Before / After" className="md:col-span-5 h-56">
                    <div className="mt-3 space-y-2">
                        <DeltaRow label="TTFB" before="680ms" after="320ms" />
                        <DeltaRow label="LCP" before="3.4s" after="2.1s" />
                        <DeltaRow label="INP" before="260ms" after="140ms" />
                    </div>
                    <div className="mt-3 h-20 rounded-xl border border-white/10 bg-white/[0.02]" />
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

function Score({ title, value, className }: { title: string; value: string; className?: string }) {
    return (
        <div className={cn('rounded-2xl border border-white/10 bg-white/[0.03] p-4', className)}>
            <p className="text-xs font-mono text-white/45 uppercase tracking-wider">{title}</p>
            <p className="mt-2 text-xl font-semibold text-white/85">{value}</p>
        </div>
    )
}

function Item({ label, tag }: { label: string; tag: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="text-sm text-white/70">{label}</span>
            <span className="text-xs font-mono text-white/45">{tag}</span>
        </div>
    )
}

function DeltaRow({ label, before, after }: { label: string; before: string; after: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="text-sm text-white/70">{label}</span>
            <span className="text-xs font-mono text-white/45">{before} → {after}</span>
        </div>
    )
}
