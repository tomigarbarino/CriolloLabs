import Link from 'next/link'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-lighter">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Criollo Labs</h3>
            <p className="text-white/60 max-w-sm mb-6">
              Landing pages listas para convertir para ofertas premium. Entrega en 48h. Precio fijo.
            </p>
            <a
              href="https://calendly.com/tomasgarbarino-dev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-green text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
            >
              Agendar llamada
            </a>
            <p className="text-sm text-white/50 mt-4">
              📧 <a href="mailto:tomasgarbarino.dev@gmail.com" className="hover:text-accent-cyan transition-colors">tomasgarbarino.dev@gmail.com</a>
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-white/40 mb-2">
              © {new Date().getFullYear()} Criollo Labs. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Términos: Alcance fijo • 2 rondas de cambios • 50% seña
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
