import type { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'
import { getSitemapEntries, formatSitemap } from 'lib/services/sitemap'

/**
 * API endpoint to build new sitemap.xml
 * While crude approach, this content is unlikely to ever really change.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const content = getSitemapEntries()
  const sitemap = await formatSitemap(content, SitemapStream, streamToPromise)
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}

export default handler
