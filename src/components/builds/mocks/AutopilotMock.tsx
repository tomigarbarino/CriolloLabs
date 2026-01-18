'use client'

import { CheckCircle, Play, FileText, Mail, Database } from 'lucide-react'

export function AutopilotMock() {
    return (
        <div className="flex flex-col h-full w-full gap-8 min-h-[300px]">
            {/* Visual Workflow */}
            <div className="relative flex items-center justify-between px-4 md:px-12 py-8 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />

                <Node icon={<Database size={18} />} label="New Order" status="success" />
                <Step />
                <Node icon={<FileText size={18} />} label="Generate Invoice" status="success" />
                <Step />
                <Node icon={<Mail size={18} />} label="Send Email" status="processing" active />
            </div>

            {/* Logs Console */}
            <div className="flex-1 rounded-xl border border-white/10 bg-[#0A0A0A] font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                    <span className="text-white/40">Execution Logs</span>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                    </div>
                </div>
                <div className="p-4 space-y-2 text-white/60">
                    <div className="flex gap-3">
                        <span className="text-white/30">10:42:01</span>
                        <span className="text-emerald-400">[INFO]</span>
                        <span>Webhook received: order_created (id_9283)</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-white/30">10:42:03</span>
                        <span className="text-emerald-400">[INFO]</span>
                        <span>PDF generated successfully (240kb)</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-white/30">10:42:05</span>
                        <span className="text-blue-400">[EXEC]</span>
                        <span>Sending email via Resend API...</span>
                    </div>
                    <div className="flex gap-3 animate-pulse">
                        <span className="text-white/30">10:42:06</span>
                        <span className="text-amber-400">[WAIT]</span>
                        <span>Waiting for confirmation...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface NodeProps {
    icon: React.ReactNode
    label: string
    status: 'success' | 'processing'
    active?: boolean
}

function Node({ icon, label, status, active }: NodeProps) {
    return (
        <div className={`relative z-10 flex flex-col items-center gap-3 group`}>
            <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300
                ${active
                    ? 'bg-accent-purple/20 border-accent-purple shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-110'
                    : 'bg-dark border-white/10 group-hover:border-white/30'
                }
            `}>
                <div className={active ? 'text-accent-purple' : 'text-white/60'}>
                    {icon}
                </div>
                {status === 'success' && (
                    <div className="absolute -top-1 -right-1 bg-dark rounded-full">
                        <CheckCircle size={14} className="text-emerald-500" />
                    </div>
                )}
            </div>
            <span className={`text-xs font-medium ${active ? 'text-white' : 'text-white/40'}`}>
                {label}
            </span>
        </div>
    )
}

function Step() {
    return (
        <div className="relative z-10 w-6 h-6 rounded-full bg-dark border border-white/10 flex items-center justify-center">
            <Play size={8} className="text-white/20 ml-0.5" fill="currentColor" />
        </div>
    )
}
