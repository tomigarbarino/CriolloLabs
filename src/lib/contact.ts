export const MESSENGER_PAGE_ID = '320363084498026'
export const CONTACT_MESSAGE =
  'Hola Criollo, quiero consultar por una tarea que repetimos en mi empresa y coordinar la charla gratuita de 20 minutos.'

const attributionKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

// A referral is not proof that a message was sent or its source was received.
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

  const destination = new URL(`https://m.me/${MESSENGER_PAGE_ID}`)
  if (attribution.length) destination.searchParams.set('ref', attribution.join('; ').slice(0, 500))
  return destination.toString()
}
