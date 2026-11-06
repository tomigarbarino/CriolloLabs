import test from 'node:test'
import assert from 'node:assert/strict'
import { getContactUrl, MESSENGER_PAGE_ID } from '../src/lib/contact.ts'

test('contact always targets the commercial page, including without JavaScript attribution', () => {
  const url = new URL(getContactUrl())
  assert.equal(url.origin, 'https://m.me')
  assert.equal(url.pathname, `/${MESSENGER_PAGE_ID}`)
  assert.equal(url.search, '')
})

test('A and B keep distinct bounded referral values without promising a prepared message', () => {
  for (const variant of ['a_tiempo', 'b_repeticion']) {
    const url = new URL(getContactUrl({
      source: 'web-contacto',
      searchParams: `utm_source=meta&utm_campaign=automatizacion_pyme_v2&utm_content=${variant}`,
      message: 'A private free-text message must not become a URL payload',
    }))
    assert.match(url.searchParams.get('ref'), new RegExp(`utm_content: ${variant}`))
    assert.match(url.searchParams.get('ref'), /Contacto: web-contacto/)
    assert.equal(url.searchParams.has('text'), false)
    assert.equal(url.href.includes('private'), false)
  }
})

test('unrelated query data cannot leak through attribution or replace the destination', () => {
  const url = new URL(getContactUrl({
    source: 'web-footer',
    searchParams: 'email=private@example.test&next=https://evil.example&token=secret&utm_content=%3Cscript%3Ealert(1)%3C/script%3E',
  }))
  assert.equal(url.origin, 'https://m.me')
  assert.equal(url.href.includes('private'), false)
  assert.equal(url.href.includes('secret'), false)
  assert.equal(url.href.includes('evil'), false)
  assert.doesNotMatch(url.searchParams.get('ref'), /[<>\n\r]/)
})

test('oversized source and attribution remain bounded', () => {
  const url = new URL(getContactUrl({ source: 'x'.repeat(1000), searchParams: `utm_content=${'y'.repeat(2000)}` }))
  assert.ok(url.searchParams.get('ref').length <= 500)
  assert.ok(!url.searchParams.get('ref').includes('x'.repeat(81)))
  assert.ok(!url.searchParams.get('ref').includes('y'.repeat(81)))
})
