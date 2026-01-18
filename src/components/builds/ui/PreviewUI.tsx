'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// --- Frame (Window container) ---
export function PreviewFrame({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                'rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 overflow-hidden',
                className
            )}
        >
            {children}
        </div>
    )
}

// --- Header (Window controls + slug) ---
export function PreviewHeader({ slug }: { slug: string }) {
    return (
        <div className="flex items-center justify-between mb-5">
            <p className="text-xs md:text-sm text-white/70">
                Preview · <span className="text-white/45 font-mono">{slug}</span>
            </p>
            <div className="flex gap-1.5 md:gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
        </div>
    )
}

// --- Panel (Inner cards) ---
export function PreviewPanel({
    title,
    className,
    children,
    noPadding = false,
}: {
    title?: string
    className?: string
    children?: React.ReactNode
    noPadding?: boolean
}) {
    return (
        <div
            className={cn(
                'rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col',
                'shadow-lg shadow-black/20', // Subtle depth
                !noPadding && 'p-4',
                className
            )}
        >
            {title && (
                <p className="text-[10px] md:text-xs font-mono text-white/45 uppercase tracking-wider mb-2 shrink-0">
                    {title}
                </p>
            )}
            <div className="flex-1 min-h-0 min-w-0">{children}</div>
        </div>
    )
}

// --- Badge (Chips) ---
export function PreviewBadge({
    children,
    variant = 'default',
    className,
}: {
    children: React.ReactNode
    variant?: 'default' | 'outline' | 'success' | 'warning' | 'error'
    className?: string
}) {
    const variants = {
        default: 'bg-white/5 border-white/10 text-white/70',
        outline: 'border-white/10 text-white/60 bg-transparent',
        success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
        warning: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        error: 'bg-red-500/10 border-red-500/20 text-red-400',
    }

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium border',
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    )
}

// --- Row (Key-Value) ---
export function PreviewRow({
    label,
    value,
    className,
}: {
    label: string
    value: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={cn(
                'flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.01] px-3 py-2',
                className
            )}
        >
            <span className="text-xs md:text-sm text-white/60 truncate mr-2">{label}</span>
            <span className="text-xs font-mono text-white/80 truncate">{value}</span>
        </div>
    )
}

// --- Status Dot ---
export function StatusDot({ status }: { status: 'good' | 'warn' | 'bad' | 'neutral' }) {
    const colors = {
        good: 'bg-emerald-400',
        warn: 'bg-amber-400',
        bad: 'bg-red-400',
        neutral: 'bg-white/20',
    }

    return <span className={cn('h-2 w-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]', colors[status])} />
}
