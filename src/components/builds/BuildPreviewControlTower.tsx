'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export function BuildPreviewControlTower() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden">
            <div className="flex items-center justify-between">
                <p className="text-sm text-white/70">
                    Preview · <span className="text-white/45 font-mono">control-tower</span>
                </p>
                <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-12">
                <Kpi title="Ventas" value="$ 12.4M" delta="+18%" className="md:col-span-3" />
                <Kpi title="Tickets" value="482" delta="+6%" className="md:col-span-3" />
                <Kpi title="Margen" value="31.2%" delta="+2.1%" className="md:col-span-3" />
                <Kpi title="Churn" value="2.4%" delta="-0.6%" className="md:col-span-3" />

                <Panel title="Tendencia (30 días)" className="md:col-span-8 h-48" />
                <Panel title="Alertas" className="md:col-span-4 h-48">
                    <div className="mt-3 space-y-2">
                        <AlertRow label="Stock crítico: 3 items" tone="warn" />
                        <AlertRow label="Pagos fallidos: 5" tone="bad" />
                        <AlertRow label="Demoras operativas: 2" tone="warn" />
                    </div>
                </Panel>

                <Panel title="Actividad reciente" className="md:col-span-12 h-56">
                    <div className="mt-3 grid gap-2">
                        <ActivityRow left="Pago aprobado" right="MP · $48.900" />
                        <ActivityRow left="Pedido creado" right="Woo · #1923" />
                        <ActivityRow left="Ticket abierto" right="Soporte · Urgente" />
                        <ActivityRow left="Stock bajo" right="SKU · GP-102" />
                    </div>
                </Panel>
            </div>
        </div>
    )
}

function Kpi({
    title,
    value,
    delta,
    className,
}: {
    title: string
    value: string
    delta: string
    className?: string
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
            <div className="mt-2 flex items-end justify-between gap-2">
                <p className="text-lg md:text-xl font-semibold text-white/85">{value}</p>
                <p className="text-xs text-white/55">{delta}</p>
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
            {children ? (
                children
            ) : (
                <div className="mt-3 h-[80%] rounded-xl border border-white/10 bg-white/[0.02]" />
            )}
        </div>
    )
}

function AlertRow({ label, tone }: { label: string; tone: 'warn' | 'bad' }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="text-sm text-white/70">{label}</span>
            <span
                className={cn(
                    'h-2 w-2 rounded-full',
                    tone === 'warn' ? 'bg-accent-orange/80' : 'bg-red-400/80'
                )}
            />
        </div>
    )
}

function ActivityRow({ left, right }: { left: string; right: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
            <span className="text-sm text-white/70">{left}</span>
            <span className="text-xs font-mono text-white/45">{right}</span>
        </div>
    )
}
