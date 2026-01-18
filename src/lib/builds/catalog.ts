export type BuildSlug =
    | 'control-tower'
    | 'whatsapp-followup'
    | 'backoffice-autopilot'
    | 'perf-ux-audit'

export type Build = {
    slug: BuildSlug
    // i18n key prefix: landing.builds.<slug>.*
    key: `landing.builds.${BuildSlug}`
    tech: string[]
    integrations: string[]
    status?: 'concept' | 'ready'
}

export const BUILDS: Build[] = [
    {
        slug: 'control-tower',
        key: 'landing.builds.control-tower',
        tech: ['Next.js', 'TypeScript', 'Charts', 'RBAC'],
        integrations: ['Google Sheets', 'MercadoPago', 'Shopify/Woo', 'Notion'],
        status: 'concept',
    },
    {
        slug: 'whatsapp-followup',
        key: 'landing.builds.whatsapp-followup',
        tech: ['Next.js', 'TypeScript', 'Automations', 'Calendar'],
        integrations: ['WhatsApp', 'Google Calendar', 'Gmail', 'Sheets'],
        status: 'concept',
    },
    {
        slug: 'backoffice-autopilot',
        key: 'landing.builds.backoffice-autopilot',
        tech: ['Node', 'Webhooks', 'Queues', 'Observability'],
        integrations: ['MercadoPago/Stripe', 'Sheets', 'Slack', 'Email'],
        status: 'concept',
    },
    {
        slug: 'perf-ux-audit',
        key: 'landing.builds.perf-ux-audit',
        tech: ['Lighthouse', 'Web Vitals', 'Next.js', 'Perf tooling'],
        integrations: ['Sentry', 'Analytics', 'CI'],
        status: 'concept',
    },
]
