'use client'

import React from 'react'
import {
    PreviewFrame,
    PreviewHeader,
    PreviewPanel,
    PreviewBadge,
    StatusDot,
} from '@/components/builds/ui/PreviewUI'
import { ArrowDown } from 'lucide-react'

export function BuildPreviewBackofficeAutopilot() {
    return (
        <PreviewFrame>
            <PreviewHeader slug="backoffice-autopilot" />

            <div className="grid gap-4 md:grid-cols-12">
                {/* Workflow Panel */}
                <PreviewPanel title="Workflow" className="col-span-12 md:col-span-7">
                    <div className="flex flex-col items-center justify-center space-y-2 py-2">
                        <Node title="Trigger" subtitle="Pago aprobado (MP/Stripe)" icon="⚡" />
                        <ArrowDown className="text-white" size={16} />
                        <Node title="Action" subtitle="Generar factura + guardar (AFIP)" icon="📄" />
                        <ArrowDown className="text-white" size={16} />
                        <Node title="Action" subtitle="Enviar email + notificar Slack" icon="🔔" />
                    </div>
                </PreviewPanel>

                {/* Logs Panel */}
                <PreviewPanel title="Ejecuciones (live logs)" className="col-span-12 md:col-span-5">
                    <div className="space-y-2 mt-1 overflow-y-auto max-h-[200px] pr-1">
                        <LogItem status="good" text="invoice.create · 1.2s" />
                        <LogItem status="good" text="email.send · 0.4s" />
                        <LogItem status="bad" text="slack.post · timeout" />
                        <LogItem status="warn" text="retry: slack.post · 2/3" />
                        <LogItem status="good" text="sheet.append · 0.2s" />
                    </div>
                </PreviewPanel>

                {/* Integrations Panel */}
                <PreviewPanel title="Conectores activos" className="col-span-12">
                    <div className="flex flex-wrap gap-2 mt-1">
                        <PreviewBadge variant="default">MercadoPago</PreviewBadge>
                        <PreviewBadge variant="default">Stripe</PreviewBadge>
                        <PreviewBadge variant="success">Google Sheets</PreviewBadge>
                        <PreviewBadge variant="default">Gmail</PreviewBadge>
                        <PreviewBadge variant="warning">Slack</PreviewBadge>
                    </div>
                </PreviewPanel>
            </div>
        </PreviewFrame>
    )
}

function Node({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) {
    return (
        <div className="w-full flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-sm">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-mono text-white uppercase tracking-wider">{title}</p>
                <p className="text-sm text-white">{subtitle}</p>
            </div>
        </div>
    )
}

function LogItem({ status, text }: { status: 'good' | 'bad' | 'warn'; text: string }) {
    return (
        <div className="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-white/[0.02] transition-colors">
            <span className="text-xs font-mono text-white">{text}</span>
            <StatusDot status={status} />
        </div>
    )
}
