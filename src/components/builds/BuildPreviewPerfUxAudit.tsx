'use client'

import React from 'react'
import {
    PreviewFrame,
    PreviewHeader,
    PreviewPanel,
    PreviewRow,
    PreviewBadge,
} from '@/components/builds/ui/PreviewUI'
import { cn } from '@/lib/utils'

export function BuildPreviewPerfUxAudit() {
    return (
        <PreviewFrame>
            <PreviewHeader slug="perf-ux-audit" />

            <div className="grid gap-4 md:grid-cols-12">
                {/* Scores */}
                <div className="col-span-12 md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-4">
                    <ScoreCard title="Lighthouse" value="92" color="text-emerald-400" />
                    <ScoreCard title="LCP (s)" value="2.1" color="text-emerald-400" />
                    <ScoreCard title="CLS" value="0.03" color="text-emerald-400" />
                </div>

                {/* Priorities Panel */}
                <PreviewPanel title="Plan de acción (Prioridades)" className="col-span-12 md:col-span-8 md:min-h-[220px]">
                    <div className="space-y-2 mt-1">
                        <PreviewRow
                            label="Eliminar JS innecesario"
                            value={<PreviewBadge variant="success">Quick win</PreviewBadge>}
                        />
                        <PreviewRow
                            label="Optimizar imágenes (WebP)"
                            value={<PreviewBadge variant="success">Quick win</PreviewBadge>}
                        />
                        <PreviewRow
                            label="Code splitting de routes"
                            value={<PreviewBadge variant="warning">Structural</PreviewBadge>}
                        />
                        <PreviewRow
                            label="Alerta de Web Vitals"
                            value={<PreviewBadge variant="outline">Guardrail</PreviewBadge>}
                        />
                    </div>
                </PreviewPanel>

                {/* Before / After Panel */}
                <PreviewPanel title="Impacto proyectado (Before → After)" className="col-span-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
                        <DeltaMetric label="TTFB (Server)" before="680ms" after="320ms" />
                        <DeltaMetric label="LCP (Load)" before="3.4s" after="2.1s" />
                        <DeltaMetric label="INP (React)" before="260ms" after="140ms" />
                    </div>
                </PreviewPanel>
            </div>
        </PreviewFrame>
    )
}

function ScoreCard({ title, value, color }: { title: string; value: string; color?: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col items-center justify-center text-center">
            <div className={cn("text-3xl md:text-4xl font-bold mb-1", color)}>{value}</div>
            <p className="text-[10px] font-mono text-white uppercase tracking-wider">{title}</p>
        </div>
    )
}

function DeltaMetric({ label, before, after }: { label: string; before: string; after: string }) {
    return (
        <div className="rounded-xl border border-white/5 bg-white/[0.01] p-3 flex flex-col">
            <p className="text-xs text-white mb-2">{label}</p>
            <div className="flex items-center gap-3">
                <span className="text-sm text-white line-through decoration-white/20">{before}</span>
                <span className="text-white">→</span>
                <span className="text-lg font-semibold text-white">{after}</span>
            </div>
        </div>
    )
}
