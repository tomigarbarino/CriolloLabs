import test from 'node:test'
import assert from 'node:assert/strict'
import { getContactUrl, getDemoUrl, MESSENGER_PAGE_ID } from '../src/lib/contact.ts'

test('contact always targets the commercial page, including without JavaScript attribution', () => {
  const url = new URL(getContactUrl())
  assert.equal(url.origin, 'https://m.me')
  assert.equal(url.pathname, `/${MESSENGER_PAGE_ID}`)
  assert.equal(url.search, '')
})

test('A and B keep distinct bounded referral values without promising a prepared message', () => {
  for (const variant of ['a_tiempo', 'b_repeticion']) {
    const url = new URL(
      getContactUrl({
        source: 'web-contacto',
        searchParams: `utm_source=meta&utm_campaign=automatizacion_pyme_v2&utm_content=${variant}`,
        message: 'A private free-text message must not become a URL payload',
      })
    )
    assert.match(url.searchParams.get('ref'), new RegExp(`utm_content: ${variant}`))
    assert.match(url.searchParams.get('ref'), /Contacto: web-contacto/)
    assert.equal(url.searchParams.has('text'), false)
    assert.equal(url.href.includes('private'), false)
  }
})

test('unrelated query data cannot leak through attribution or replace the destination', () => {
  const url = new URL(
    getContactUrl({
      source: 'web-footer',
      searchParams:
        'email=private@example.test&next=https://evil.example&token=secret&utm_content=%3Cscript%3Ealert(1)%3C/script%3E',
    })
  )
  assert.equal(url.origin, 'https://m.me')
  assert.equal(url.href.includes('private'), false)
  assert.equal(url.href.includes('secret'), false)
  assert.equal(url.href.includes('evil'), false)
  assert.doesNotMatch(url.searchParams.get('ref'), /[<>\n\r]/)
})

test('oversized source and attribution remain bounded', () => {
  const url = new URL(
    getContactUrl({ source: 'x'.repeat(1000), searchParams: `utm_content=${'y'.repeat(2000)}` })
  )
  assert.ok(url.searchParams.get('ref').length <= 500)
  assert.ok(!url.searchParams.get('ref').includes('x'.repeat(81)))
  assert.ok(!url.searchParams.get('ref').includes('y'.repeat(81)))
})

test('landing to demo to contact preserves both campaign variants and the demo source', () => {
  for (const variant of ['a_tiempo', 'b_repeticion']) {
    const entry = new URL(
      `https://criollo.example/es?utm_source=meta&utm_medium=paid&utm_campaign=automatizacion_pyme_v2&utm_content=${variant}&utm_term=procesos`
    )
    const demo = new URL(getDemoUrl(entry.search), entry)
    assert.equal(demo.pathname, '/es/demo')
    assert.equal(demo.origin, entry.origin)
    assert.deepEqual([...demo.searchParams], [...entry.searchParams])
    const contact = new URL(getContactUrl({ source: 'demo-proceso', searchParams: demo.search }))
    assert.equal(contact.origin, 'https://m.me')
    assert.equal(contact.pathname, `/${MESSENGER_PAGE_ID}`)
    assert.match(contact.searchParams.get('ref'), /Contacto: demo-proceso/)
    for (const [key, value] of entry.searchParams) {
      assert.ok(contact.searchParams.get('ref').includes(`${key}: ${value}`))
    }
  }
})

test('demo navigation stays clean without attribution and excludes unrelated query data', () => {
  assert.equal(getDemoUrl(), '/es/demo')
  assert.equal(getDemoUrl(''), '/es/demo')
  assert.equal(getDemoUrl('?email=private%40example.test&token=secret'), '/es/demo')
  assert.equal(getDemoUrl(new URLSearchParams({ utm_source: ' \n<> ' })), '/es/demo')
  const demo = new URL(
    getDemoUrl(
      new URLSearchParams({
        email: 'private@example.test',
        token: 'secret',
        next: 'https://evil.example',
        message: 'private free text',
        utm_content: 'a_tiempo',
      })
    ),
    'https://criollo.example'
  )
  assert.deepEqual([...demo.searchParams], [['utm_content', 'a_tiempo']])
  assert.equal(demo.pathname, '/es/demo')
  assert.equal(demo.origin, 'https://criollo.example')
})

test('demo attribution bounds values and uses only the first repeated parameter', () => {
  const params = new URLSearchParams({
    utm_source: 'meta',
    utm_medium: '',
    utm_campaign: 'x'.repeat(2000),
    utm_content: '<a>\n b/repeticion?&',
  })
  params.append('utm_source', 'private@example.test')
  const demo = new URL(getDemoUrl(params), 'https://criollo.example')
  assert.equal(demo.searchParams.get('utm_source'), 'meta')
  assert.equal(demo.searchParams.has('utm_medium'), false)
  assert.equal(demo.searchParams.get('utm_campaign'), 'x'.repeat(80))
  assert.equal(demo.searchParams.get('utm_content'), 'a b repeticion')
  assert.equal(demo.href.includes('private'), false)
  assert.equal(getDemoUrl('?utm_source=meta&utm_source=private'), '/es/demo?utm_source=meta')
  assert.equal(getDemoUrl(new URLSearchParams('utm_source=meta')), '/es/demo?utm_source=meta')
})
