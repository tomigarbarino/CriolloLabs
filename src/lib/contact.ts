export const WHATSAPP_PHONE = '5491121925947'
export const CONTACT_MESSAGE =
  'Hola Criollo, quiero consultar por una tarea que repetimos en mi empresa y coordinar la charla gratuita de 20 minutos.'

const attributionKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

// Attribution is readable message text, never executable markup or stored tracking.
function cleanAttribution(value: string) {
  return value
    .slice(0, 240)
    .replace(/[^\p{L}\p{N} ._-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80)
}

type ContactOptions = {
  message?: string
  source?: string
  searchParams?: string | URLSearchParams
}

export function getContactUrl({
  message = CONTACT_MESSAGE,
  source,
  searchParams = '',
}: ContactOptions = {}) {
  const params = new URLSearchParams(searchParams)
  const attribution: string[] = []
  const cleanSource = source ? cleanAttribution(source) : ''

  if (cleanSource) attribution.push(`Contacto: ${cleanSource}`)

  for (const key of attributionKeys) {
    const value = cleanAttribution(params.get(key) ?? '')
    if (value) attribution.push(`${key}: ${value}`)
  }

  const text = attribution.length ? `${message}\n\n${attribution.join('\n')}` : message
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`
}
