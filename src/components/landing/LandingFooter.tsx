'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/Container'
import { Linkedin, Youtube, Github } from 'lucide-react'
import Image from 'next/image'

export function LandingFooter() {
    const t = useTranslations('footer')

    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/tomas-garbarino/', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com/tomigarbarino', label: 'GitHub' },
    ]

    return (
        <footer className="py-12 bg-dark border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo.svg"
                            alt="CriolloLabs"
                            width={28}
                            height={28}
                            className="w-7 h-7"
                        />
                        <span className="text-lg font-bold">
                            <span className="bg-gradient-to-r from-accent-purple to-accent-orange bg-clip-text text-transparent">
                                Criollo
                            </span>
                            Labs
                        </span>
                        <span className="text-sm text-white/40 ml-2">
                            © {new Date().getFullYear()}
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="p-2 text-white/40 hover:text-accent-purple hover:bg-white/5 rounded-lg transition-all duration-200"
                                    aria-label={link.label}
                                >
                                    <Icon size={18} />
                                </a>
                            )
                        })}
                    </div>

                    {/* Legal Links */}
                    <div className="flex gap-6 text-sm text-white/40">
                        <a href="#" className="hover:text-white transition-colors">
                            {t('privacy')}
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            {t('terms')}
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
