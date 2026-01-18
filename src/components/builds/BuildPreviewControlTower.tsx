'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import {
    PreviewFrame,
    PreviewHeader,
    PreviewPanel,
    PreviewRow,
    StatusDot,
} from '@/components/builds/ui/PreviewUI'

export function BuildPreviewControlTower() {
    return (
        <PreviewFrame>
            <PreviewHeader slug="control-tower" />

            <div className="grid gap-4 md:grid-cols-12">
                {/* KPI Row - 2 cols on mobile, 3 on desktop */}
                <Kpi title="Ventas" value="$ 12.4M" delta="+18%" className="col-span-6 md:col-span-3" />
                <Kpi title="Tickets" value="482" delta="+6%" className="col-span-6 md:col-span-3" />
                <Kpi title="Margen" value="31.2%" delta="+2.1%" className="col-span-6 md:col-span-3" />
                <Kpi title="Churn" value="2.4%" delta="-0.6%" className="col-span-6 md:col-span-3" />

                {/* Chart Panel */}
                <PreviewPanel title="Tendencia (30 días)" className="col-span-12 md:col-span-8 min-h-[180px]">
                    <div className="relative h-full w-full flex items-end pt-4">
                        {/* Simple SVG Line/Area Chart */}
                        <svg
                            viewBox="0 0 100 40"
                            className="w-full h-full overflow-visible"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,35 Q10,25 20,30 T40,20 T60,25 T80,10 T100,15 V40 H0 Z"
                                fill="url(#chartGradient)"
                            />
                            <path
                                d="M0,35 Q10,25 20,30 T40,20 T60,25 T80,10 T100,15"
                                fill="none"
                                stroke="white"
                                strokeOpacity="0.5"
                                strokeWidth="0.5"
                            />
                        </svg>
                        {/* Fake cursor line */}
                        <div className="absolute top-0 bottom-0 left-[60%] w-px bg-white/20 border-l border-dashed border-white/30 hidden md:block">
                            <div className="absolute top-[25%] -left-1 h-2 w-2 rounded-full bg-accent-orange shadow-[0_0_10px_theme(colors.accent.orange)]" />
                        </div>
                    </div>
                </PreviewPanel>

                {/* Alerts Panel */}
                <PreviewPanel title="Alertas" className="col-span-12 md:col-span-4 min-h-[180px]">
                    <div className="space-y-2 mt-1">
                        <PreviewRow
                            label="Stock crítico"
                            value={
                                <div className="flex items-center gap-2">
                                    <span>3 items</span>
                                    <StatusDot status="warn" />
                                </div>
                            }
                        />
                        <PreviewRow
                            label="Pagos fallidos"
                            value={
                                <div className="flex items-center gap-2">
                                    <span>5</span>
                                    <StatusDot status="bad" />
                                </div>
                            }
                        />
                        <PreviewRow
                            label="Demoras"
                            value={
                                <div className="flex items-center gap-2">
                                    <span>2 orders</span>
                                    <StatusDot status="warn" />
                                </div>
                            }
                        />
                    </div>
                </PreviewPanel>

                {/* Activity Panel */}
                <PreviewPanel title="Actividad reciente" className="col-span-12 min-h-[220px]">
                    <div className="flex flex-col gap-2 mt-1">
                        <ActivityRow left="Pago aprobado" right="MP · $48.900" time="Hace 2m" />
                        <ActivityRow left="Pedido creado" right="Woo · #1923" time="Hace 5m" />
                        <ActivityRow left="Ticket abierto" right="Soporte · Urgente" time="Hace 12m" />
                        <ActivityRow left="Stock bajo" right="SKU · GP-102" time="Hace 1h" />
                    </div>
                </PreviewPanel>
            </div>
        </PreviewFrame>
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
    const isPos = delta.startsWith('+')
    return (
        <div
            className={cn(
                'rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-between',
                className
            )}
        >
            <p className="text-[10px] md:text-xs font-mono text-white/45 uppercase tracking-wider">{title}</p>
            <div className="mt-2 flex items-end justify-between gap-2">
                <p className="text-lg md:text-xl font-semibold text-white/85">{value}</p>
                <p className={cn("text-xs", isPos ? "text-emerald-400/80" : "text-white/55")}>{delta}</p>
            </div>
        </div>
    )
}

function ActivityRow({ left, right, time }: { left: string; right: string; time: string }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.01] px-3 py-2.5 hover:bg-white/[0.03] transition-colors group">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-accent-purple/50 transition-colors shrink-0" />
                <span className="text-xs md:text-sm text-white/70 truncate">{left}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-white/45 hidden sm:inline-block">{right}</span>
                <span className="text-[10px] text-white/30">{time}</span>
            </div>
        </div>
    )
}
