import test from 'node:test'
import assert from 'node:assert/strict'

// Runs against a built Next server, or the public release when explicitly selected.
const base = process.env.SITE_TEST_BASE_URL || 'http://localhost:3107'
const origin = 'https://criollo-labs.vercel.app'
const es = '/es/seguimiento-presupuestos'
const en = '/en/quote-follow-up'

for (const [path, lang, title] of [
  [es, 'es', 'Seguimiento de presupuestos'],
  [en, 'en', 'Quote follow-up'],
]) {
  test(`localized HTML, metadata and reciprocal language links: ${path}`, async () => {
    const response = await fetch(`${base}${path}`)
    assert.equal(response.status, 200)
    const html = await response.text()
    assert.match(html, new RegExp(`<html[^>]+lang="${lang}"`))
    assert.ok(html.includes(`<title>${title}`))
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`))
    for (const [code, target] of [
      ['en-GB', en],
      ['es-AR', es],
    ]) {
      assert.ok(
        html.includes(`hrefLang="${code}" href="${origin}${target}"`),
        `missing alternate ${code}`
      )
    }
    assert.doesNotMatch(html, /<meta[^>]+content="[^"]*noindex/i)
    assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'))
    assert.ok(html.includes('https://m.me/320363084498026'))
    assert.ok(html.includes(lang === 'en' ? 'Reset demo' : 'Reiniciar demo'))
    const offer = html.match(
      /<section[^>]+aria-labelledby="prototype-offer"[^>]*>([\s\S]*?)<\/section>/
    )?.[1]
    assert.ok(offer, 'prototype offer must be present in server-rendered content')
    assert.ok(
      offer.includes(
        lang === 'en' ? 'Request a prototype proposal' : 'Pedir una propuesta de prototipo'
      )
    )
    assert.ok(
      offer.includes(
        lang === 'en'
          ? 'It does not include storing real data'
          : 'No incluye almacenamiento de datos reales'
      )
    )
    assert.ok(offer.includes(lang === 'en' ? 'in writing' : 'por escrito'))
    assert.ok(offer.includes('https://m.me/320363084498026'))
    const offerText = offer.replace(/<[^>]*>/g, ' ')
    assert.doesNotMatch(offerText, /\b(?:USD|GBP)\b|[$£]|\b\d+\b/)
    assert.ok(
      html.includes(
        lang === 'en' ? 'You may need to log in to Facebook.' : 'Puede pedirte iniciar sesión en'
      )
    )
  })
}

test('root and English entry redirects stay in their intended language', async () => {
  for (const [path, target] of [
    ['/', '/es'],
    ['/en', en],
  ]) {
    const response = await fetch(`${base}${path}`, { redirect: 'manual' })
    assert.ok([307, 308].includes(response.status))
    assert.equal(new URL(response.headers.get('location'), base).pathname, target)
  }
})

test('Spanish pages and existing service redirect survive root-layout relocation', async () => {
  for (const path of ['/es', '/es/demo']) {
    const response = await fetch(`${base}${path}`)
    assert.equal(response.status, 200)
    assert.match(await response.text(), /<html[^>]+lang="es"/)
  }
  const redirect = await fetch(`${base}/es/services`, { redirect: 'manual' })
  assert.equal(new URL(redirect.headers.get('location'), base).pathname, '/es')
  assert.equal((await fetch(`${base}/es/not-a-real-page`)).status, 404)
})

test('sitemap and robots expose the localized page without blocking it', async () => {
  const sitemap = await fetch(`${base}/es/sitemap.xml`)
  assert.equal(sitemap.status, 200)
  const xml = await sitemap.text()
  assert.ok(xml.includes(`${origin}${es}`))
  assert.ok(xml.includes(`${origin}${en}`))
  const robots = await fetch(`${base}/robots.txt`)
  assert.equal(robots.status, 200)
  assert.ok((await robots.text()).includes(`Sitemap: ${origin}/es/sitemap.xml`))
})
