'use client'

import type { BuildSlug } from '@/lib/builds/catalog'

import { ControlTowerMock } from './mocks/ControlTowerMock'
import { WhatsappMock } from './mocks/WhatsappMock'
import { AutopilotMock } from './mocks/AutopilotMock'
import { AuditMock } from './mocks/AuditMock'

export function BuildPreview({ slug }: { slug: BuildSlug }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden min-w-0">
            <div className="flex items-center justify-between mb-5">
                <p className="text-sm text-white/70">
                    Preview · <span className="text-white/45 font-mono">{slug}</span>
                </p>
                <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {slug === 'control-tower' && <ControlTowerMock />}
                {slug === 'whatsapp-followup' && <WhatsappMock />}
                {slug === 'backoffice-autopilot' && <AutopilotMock />}
                {slug === 'perf-ux-audit' && <AuditMock />}
            </div>
        </div>
    )
}
