'use client'

import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Activity, Search } from 'lucide-react'

export function ControlTowerMock() {
    return (
        <div className="flex flex-col gap-6 text-white/80 h-full w-full">
            {/* Header / Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Revenue (MBR)"
                    value="$124,500"
                    trend="+12%"
                    trendUp={true}
                    icon={<DollarSign size={16} />}
                />
                <StatCard
                    label="Active Users"
                    value="1,240"
                    trend="+5%"
                    trendUp={true}
                    icon={<Users size={16} />}
                />
                <StatCard
                    label="System Health"
                    value="99.9%"
                    trend="-0.01%"
                    trendUp={false}
                    icon={<Activity size={16} />}
                />
            </div>

            {/* Main Content: Table */}
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col min-h-[300px]">
                {/* Simulated Toolbar */}
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <Search size={14} />
                        <span>Search orders...</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                        <span className="text-xs text-white/40 uppercase tracking-widest">Live</span>
                    </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 px-4 py-3 border-b border-white/5 text-xs font-mono text-white/40 uppercase tracking-wider">
                    <div>Customer</div>
                    <div>Status</div>
                    <div>Amount</div>
                    <div className="text-right">Time</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/5">
                    <Row customer="Alice Corp" status="Completed" amount="$1,200" time="2m ago" statusColor="text-emerald-400" />
                    <Row customer="Bob Ltd" status="Processing" amount="$850" time="5m ago" statusColor="text-amber-400" />
                    <Row customer="Charlie Inc" status="Failed" amount="$3,400" time="12m ago" statusColor="text-rose-400" />
                    <Row customer="Delta Group" status="Completed" amount="$920" time="24m ago" statusColor="text-emerald-400" />
                    <Row customer="Echo V." status="Completed" amount="$150" time="1h ago" statusColor="text-emerald-400" />
                </div>
            </div>
        </div>
    )
}

interface StatCardProps {
    label: string
    value: string
    trend: string
    trendUp: boolean
    icon: React.ReactNode
}

function StatCard({ label, value, trend, trendUp, icon }: StatCardProps) {
    return (
        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03]">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-white/40 font-medium uppercase tracking-wider">{label}</span>
                <span className="text-white/20">{icon}</span>
            </div>
            <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">{value}</span>
                <div className={`flex items-center text-xs font-medium ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {trendUp ? <ArrowUpRight size={12} className="mr-0.5" /> : <ArrowDownRight size={12} className="mr-0.5" />}
                    {trend}
                </div>
            </div>
        </div>
    )
}

interface RowProps {
    customer: string
    status: string
    amount: string
    time: string
    statusColor: string
}

function Row({ customer, status, amount, time, statusColor }: RowProps) {
    return (
        <div className="grid grid-cols-4 gap-4 px-4 py-3 text-sm hover:bg-white/[0.02] transition-colors cursor-default">
            <div className="text-white/80 font-medium truncate">{customer}</div>
            <div className={statusColor}>{status}</div>
            <div className="text-white/60 font-mono">{amount}</div>
            <div className="text-right text-white/30 text-xs">{time}</div>
        </div>
    )
}
