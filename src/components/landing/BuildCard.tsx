'use client'

import React from 'react'
import { Link } from '@/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { fadeUp } from '@/lib/motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { ExternalLink, Github } from 'lucide-react'

export interface BuildCardProps {
    title: string
    description: string
    demoUrl?: string
    repoUrl?: string
    tech?: string[]
    image?: string
    index?: number
}

/**
 * Card component for Weekly Builds gallery.
 * Features hover lift animation, tech stack badges, and action links.
 */
export function BuildCard({
    title,
    description,
    demoUrl,
    repoUrl,
    tech = [],
    index = 0,
}: BuildCardProps) {
    const reducedMotion = useReducedMotion()

    const content = (
        <Card hoverable={true} className="h-full p-6 bg-white/5 backdrop-blur-md border-white/10 group">
            {/* Gradient overlay on hover */}
            <div
                className={cn(
                    'absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-orange/5',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none'
                )}
            />

            <div className="relative flex flex-col h-full z-10">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors text-balance">
                        {title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {description}
                </p>

                {/* Tech Stack */}
                {tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.map((t) => (
                            <span
                                key={t}
                                className="px-2 py-0.5 text-xs font-mono bg-white/5 text-white rounded"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
                    {demoUrl && (
                        demoUrl.startsWith('/') ? (
                            <Link
                                href={demoUrl}
                                className={cn(
                                    'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all',
                                    'bg-accent-purple/10 text-accent-purple border border-accent-purple/20',
                                    'hover:bg-accent-purple/20 hover:border-accent-purple/30'
                                )}
                            >
                                <ExternalLink size={14} />
                                <span>Demo</span>
                            </Link>
                        ) : (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all',
                                    'bg-accent-purple/10 text-accent-purple border border-accent-purple/20',
                                    'hover:bg-accent-purple/20 hover:border-accent-purple/30'
                                )}
                            >
                                <ExternalLink size={14} />
                                <span>Demo</span>
                            </a>
                        )
                    )}
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all',
                                'bg-white/5 text-white border border-white/5',
                                'hover:bg-white/10 hover:text-white hover:border-white/10'
                            )}
                        >
                            <Github size={14} />
                            <span>Código</span>
                        </a>
                    )}
                </div>
            </div>
        </Card>
    )

    if (reducedMotion) {
        return <div className="h-full">{content}</div>
    }

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
        >
            {content}
        </motion.div>
    )
}
