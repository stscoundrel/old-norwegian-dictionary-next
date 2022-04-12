import { getSitemapEntries, formatSitemap } from 'lib/services/sitemap'
import { SitemapStream, streamToPromise } from 'sitemap'

describe('Sitemap tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://old-norwegian-dictionary.test'
  const content = getSitemapEntries()

  test('Sitemap content can be formatted to XML.', async () => {
    const result = await formatSitemap(content, SitemapStream, streamToPromise)

    expect(result.includes('<?xml version="1.0" encoding="UTF-8"?>')).toBeTruthy()
    expect(result.includes('<url><loc>https://old-norwegian-dictionary.test/word/skilja</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>')).toBeTruthy()
  })
})
