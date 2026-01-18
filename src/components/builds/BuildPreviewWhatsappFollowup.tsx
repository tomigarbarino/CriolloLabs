'use client'

import React from 'react'
import {
    PreviewFrame,
    PreviewHeader,
    PreviewPanel,
    PreviewRow,
    PreviewBadge,
} from '@/components/builds/ui/PreviewUI'

export function BuildPreviewWhatsappFollowup() {
    return (
        <PreviewFrame>
            <PreviewHeader slug="whatsapp-followup" />

            <div className="grid gap-4 md:grid-cols-12">
                {/* Pipeline Panel - Stacks on mobile */}
                <PreviewPanel title="Pipeline (Kanban)" className="col-span-12 md:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-full">
                        <KanbanCol title="Nuevo" items={2} color="border-l-blue-400/30" />
                        <KanbanCol title="Seguimiento" items={3} color="border-l-amber-400/30" active />
                        <KanbanCol title="Cerrado" items={1} color="border-l-emerald-400/30" />
                    </div>
                </PreviewPanel>

                {/* Lead Details Panel */}
                <PreviewPanel title="Lead seleccionado" className="col-span-12 md:col-span-5">
                    <div className="space-y-2 mt-1">
                        <PreviewRow label="Nombre" value="Juan Pérez" />
                        <PreviewRow label="Estado" value={<PreviewBadge variant="warning">Seguimiento</PreviewBadge>} />
                        <PreviewRow label="Próxima acción" value="Follow-up hoy 18:00" />

                        {/* Chat bubble simulation */}
                        <div className="mt-4 p-3 rounded-2xl rounded-tl-none border border-white/5 bg-white/[0.02]">
                            <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-1">Último mensaje</p>
                            <p className="text-sm text-white/70 italic leading-relaxed">
                                “Dale, pasame precio y si podemos arrancar esta semana.”
                            </p>
                        </div>
                    </div>
                </PreviewPanel>

                {/* Automations Badge Panel */}
                <PreviewPanel title="Automations activas" className="col-span-12">
                    <div className="flex flex-wrap gap-2 mt-1">
                        <PreviewBadge variant="outline">🕒 24h sin respuesta → recordatorio</PreviewBadge>
                        <PreviewBadge variant="outline">🏷️ Si “precio” → enviar PDF</PreviewBadge>
                        <PreviewBadge variant="outline">📅 Si “ok” → link Calendly</PreviewBadge>
                    </div>
                </PreviewPanel>
            </div>
        </PreviewFrame>
    )
}

function KanbanCol({
    title,
    items,
    color,
    active = false
}: {
    title: string;
    items: number;
    color?: string;
    active?: boolean;
}) {
    return (
        <div className={`rounded-xl border border-white/5 bg-white/[0.01] p-3 flex flex-col ${color} border-l-2`}>
            <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] font-mono text-white/45 uppercase tracking-wider">{title}</p>
                <span className="text-[10px] text-white/30">{items}</span>
            </div>
            <div className="space-y-2 flex-1">
                {Array.from({ length: items }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-8 rounded-lg border flex items-center px-2 ${active && i === 0
                            ? 'border-accent-purple/40 bg-accent-purple/10'
                            : 'border-white/5 bg-white/[0.02]'
                            }`}
                    >
                        {active && i === 0 && <div className="h-1.5 w-1.5 rounded-full bg-accent-purple mr-2" />}
                        <div className="h-1.5 w-12 rounded-full bg-white/10" />
                    </div>
                ))}
            </div>
        </div>
    )
}
