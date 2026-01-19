'use client'

import { Zap, Layout, Timer } from 'lucide-react'

export function AuditMock() {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-4">
            {/* Lighthouse Circle */}
            <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white" />
                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="440" strokeDashoffset="44" className="text-emerald-500" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-emerald-500">92</span>
                    <span className="text-xs uppercase tracking-widest text-white mt-1">Score</span>
                </div>
            </div>

            {/* Metrics List */}
            <div className="flex-1 w-full grid grid-cols-1 gap-4">
                <Metric label="Largest Contentful Paint (LCP)" value="1.2s" status="good" icon={<Zap size={16} />} />
                <Metric label="Cumulative Layout Shift (CLS)" value="0.05" status="good" icon={<Layout size={16} />} />
                <Metric label="Interaction to Next Paint (INP)" value="240ms" status="warn" icon={<Timer size={16} />} />

                <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-white uppercase tracking-widest mb-3">Priority Fixes</p>
                    <div className="space-y-2">
                        <FixItem text="Defer offscreen images" save="~400ms" />
                        <FixItem text="Minimize main thread work" save="~150ms" />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface MetricProps {
    label: string
    value: string
    status: 'good' | 'warn' | 'bad'
    icon: React.ReactNode
}

function Metric({ label, value, status, icon }: MetricProps) {
    const color = status === 'good' ? 'text-emerald-400' : status === 'warn' ? 'text-amber-400' : 'text-rose-400'
    const bg = status === 'good' ? 'bg-emerald-500/10' : status === 'warn' ? 'bg-amber-500/10' : 'bg-rose-500/10'

    return (
        <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${bg} ${color}`}>
                    {icon}
                </div>
                <span className="text-sm text-white">{label}</span>
            </div>
            <span className={`text-base font-bold ${color}`}>{value}</span>
        </div>
    )
}

interface FixItemProps {
    text: string
    save: string
}

function FixItem({ text, save }: FixItemProps) {
    return (
        <div className="flex items-center justify-between text-xs group cursor-default">
            <span className="text-white group-hover:text-white transition-colors">→ {text}</span>
            <span className="font-mono text-accent-green/70">{save}</span>
        </div>
    )
}
