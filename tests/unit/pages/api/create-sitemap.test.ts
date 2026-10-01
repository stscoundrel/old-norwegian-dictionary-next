import { createMocks } from 'node-mocks-http';
import sitemapHandler from 'pages/api/create-sitemap';

describe('Sitemap  API endpoint', () => {
  test('Should return xml sitemap', async () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://old-norwegian-dictionary.test';

    const { req, res } = createMocks();

    // Ensure response is blank.
    expect(res.finished).toBeFalsy();
    expect(res._headers).toEqual({});

    await sitemapHandler(req, res);

    // Ensure getServerSideProps modified response.
    expect(res.finished).toBeTruthy();
    expect(res._headers).toEqual({ 'content-type': 'text/xml' });

    expect(
      res._getData().includes('<?xml version="1.0" encoding="UTF-8"?>'),
    ).toBeTruthy();
    expect(
      res
        ._getData()
        .includes(
          '<url><loc>https://old-norwegian-dictionary.test/word/spyrja</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>',
        ),
    ).toBeTruthy();
  });
});
