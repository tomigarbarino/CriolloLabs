'use client'

import { cn } from '@/lib/utils'
import type { BuildSlug } from '@/lib/builds/catalog'

export function BuildPreview({ slug }: { slug: BuildSlug }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden">
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

            <div className="mt-5">
                {slug === 'control-tower' && <ControlTowerMock />}
                {slug === 'whatsapp-followup' && <WhatsappMock />}
                {slug === 'backoffice-autopilot' && <AutopilotMock />}
                {slug === 'perf-ux-audit' && <AuditMock />}
            </div>
        </div>
    )
}

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid gap-4 md:grid-cols-12">
            {children}
        </div>
    )
}

function Panel({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'rounded-2xl border border-white/10 bg-white/[0.03] h-28',
                'shadow-[0_40px_120px_-90px_rgba(0,0,0,0.95)]',
                className
            )}
        />
    )
}

function ControlTowerMock() {
    return (
        <Shell>
            <Panel className="md:col-span-4" />
            <Panel className="md:col-span-4" />
            <Panel className="md:col-span-4" />
            <Panel className="md:col-span-8 h-44" />
            <Panel className="md:col-span-4 h-44" />
        </Shell>
    )
}

function WhatsappMock() {
    return (
        <Shell>
            <Panel className="md:col-span-5 h-52" />
            <Panel className="md:col-span-7 h-52" />
            <Panel className="md:col-span-12 h-32" />
        </Shell>
    )
}

function AutopilotMock() {
    return (
        <Shell>
            <Panel className="md:col-span-7 h-52" />
            <Panel className="md:col-span-5 h-52" />
            <Panel className="md:col-span-12 h-32" />
        </Shell>
    )
}

function AuditMock() {
    return (
        <Shell>
            <Panel className="md:col-span-4" />
            <Panel className="md:col-span-4" />
            <Panel className="md:col-span-4" />
            <Panel className="md:col-span-12 h-44" />
        </Shell>
    )
}
