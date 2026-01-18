'use client'

import { MessageCircle, Clock, Plus } from 'lucide-react'

export function WhatsappMock() {
    return (
        <div className="flex flex-col h-full w-full min-h-[350px]">
            {/* Kanban Header */}
            <div className="flex items-center justify-between mb-6 px-1">
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-white">Pipeline</h3>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-white/50">12 Active</span>
                </div>
                <button className="h-8 w-8 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center hover:bg-accent-green/30 transition">
                    <Plus size={16} />
                </button>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                <Column title="New Leads" count={3} color="bg-blue-500/20 text-blue-400">
                    <Card name="Juan Pérez" msg="Info precios?" time="10m" tag="Cold" />
                    <Card name="Marina S." msg="Hola, vi tu ad..." time="1h" tag="Referral" />
                    <Card name="Estudio A&B" msg="Presupuesto web" time="3h" tag="B2B" />
                </Column>

                <Column title="Following Up" count={2} color="bg-amber-500/20 text-amber-400">
                    <Card name="Carlos Tech" msg="Mañana a las 10" time="1d" tag="Warm" active />
                    <Card name="Startup X" msg="Esperando confirm..." time="2d" tag="Demo" />
                </Column>

                <Column title="Closed" count={5} color="bg-emerald-500/20 text-emerald-400">
                    <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] opacity-50 flex items-center justify-center h-24 border-dashed">
                        <span className="text-xs text-white/20 uppercase tracking-widest">+5 Archived</span>
                    </div>
                </Column>
            </div>
        </div>
    )
}

interface ColumnProps {
    title: string
    count: number
    children: React.ReactNode
    color: string
}

function Column({ title, count, children, color }: ColumnProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-white/40 mb-1">
                <span>{title}</span>
                <span className={`px-1.5 py-0.5 rounded ${color}`}>{count}</span>
            </div>
            <div className="flex flex-col gap-3">
                {children}
            </div>
        </div>
    )
}

interface CardProps {
    name: string
    msg: string
    time: string
    tag: string
    active?: boolean
}

function Card({ name, msg, time, tag, active }: CardProps) {
    return (
        <div className={`
            p-3 rounded-xl border bg-[#1A1A1A] group cursor-grab active:cursor-grabbing hover:-translate-y-1 transition-transform duration-200
            ${active ? 'border-accent-green/50 shadow-[0_0_15px_-5px_rgba(34,197,94,0.3)]' : 'border-white/10 hover:border-white/20'}
        `}>
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-[10px] text-white/70 font-bold">
                        {name[0]}
                    </div>
                    <span className="text-sm font-medium text-white/90">{name}</span>
                </div>
                {active && <div className="h-1.5 w-1.5 rounded-full bg-accent-green" />}
            </div>
            <p className="text-xs text-white/50 mb-3 line-clamp-1">
                <MessageCircle size={10} className="inline mr-1 -mt-0.5" />
                &quot;{msg}&quot;
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/40">{tag}</span>
                <div className="flex items-center gap-1 text-[10px] text-white/30">
                    <Clock size={10} />
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}
