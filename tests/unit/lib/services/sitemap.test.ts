import { SitemapStream, streamToPromise } from 'sitemap'
import { getSitemapEntries, formatSitemap } from 'lib/services/sitemap'
import { readFileSync } from 'node:fs'

describe('Sitemap tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://old-norwegian-dictionary.vercel.app'
  const content = getSitemapEntries()

  test('Sitemap content can be formatted to XML.', async () => {
    const result = await formatSitemap(content, SitemapStream, streamToPromise)

    expect(result.includes('<?xml version="1.0" encoding="UTF-8"?>')).toBeTruthy()
    expect(result.includes('<url><loc>https://old-norwegian-dictionary.vercel.app/word/skilja</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>')).toBeTruthy()
  })

  test('Generated sitemap in public is up to date.', async () => {
    // Whenever underlying data changes, the sitemap should change too.
    // Guard this with comparison to freshly generated version.
    const publicSitemap = readFileSync(`${__dirname}/../../../../public/sitemap.xml`).toString()
    const result = await formatSitemap(content, SitemapStream, streamToPromise)

    expect(publicSitemap).toEqual(result)
  })
})
