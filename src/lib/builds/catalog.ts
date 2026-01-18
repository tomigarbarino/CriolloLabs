export type BuildSlug =
    | 'control-tower'
    | 'whatsapp-followup'
    | 'backoffice-autopilot'
    | 'perf-ux-audit'

export type Build = {
    slug: BuildSlug
    // i18n key suffix: landing.builds.<camelCase>
    key: string
    tech: string[]
    integrations: string[]
    status?: 'concept' | 'ready'
}

export const BUILDS: Build[] = [
    {
        slug: 'control-tower',
        key: 'controlTower',
        tech: ['Next.js', 'TypeScript', 'Charts', 'RBAC'],
        integrations: ['Google Sheets', 'MercadoPago', 'Shopify/Woo', 'Notion'],
        status: 'ready',
    },
    {
        slug: 'whatsapp-followup',
        key: 'whatsappFollowup',
        tech: ['Next.js', 'TypeScript', 'Automations', 'Calendar'],
        integrations: ['WhatsApp', 'Google Calendar', 'Gmail', 'Sheets'],
        status: 'concept',
    },
    {
        slug: 'backoffice-autopilot',
        key: 'backofficeAutopilot',
        tech: ['Node', 'Webhooks', 'Queues', 'Observability'],
        integrations: ['MercadoPago/Stripe', 'Sheets', 'Slack', 'Email'],
        status: 'concept',
    },
    {
        slug: 'perf-ux-audit',
        key: 'perfUxAudit',
        tech: ['Lighthouse', 'Web Vitals', 'Next.js', 'Perf tooling'],
        integrations: ['Sentry', 'Analytics', 'CI'],
        status: 'concept',
    },
]
