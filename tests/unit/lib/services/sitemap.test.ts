import { createSitemap } from 'lib/services/sitemap';
import { getAllWords, getAlphabet } from 'lib/services/dictionary';
import { readFileSync } from 'node:fs';

const readEntries = (xml: string) => {
  const document = new DOMParser().parseFromString(xml, 'application/xml');
  expect(document.querySelector('parsererror')).toBeNull();
  expect(document.documentElement.localName).toBe('urlset');
  expect(document.documentElement.namespaceURI).toBe(
    'http://www.sitemaps.org/schemas/sitemap/0.9',
  );
  return Array.from(document.querySelectorAll('url')).map((entry) => ({
    url: entry.querySelector('loc')?.textContent,
    changefreq: entry.querySelector('changefreq')?.textContent,
    priority: Number(entry.querySelector('priority')?.textContent),
  }));
};

const hostname = 'https://old-norwegian-dictionary.vercel.app';
const expectedEntries = () => [
  ...getAllWords().map(({ slug }) => ({
    url: new URL(`/word/${slug}`, hostname).href,
    changefreq: 'monthly',
    priority: 0.5,
  })),
  ...getAlphabet().map(({ slug }) => ({
    url: new URL(`/letter/${slug}`, hostname).href,
    changefreq: 'monthly',
    priority: 0.5,
  })),
];

describe('Sitemap tests', () => {
  beforeAll(() => {
    jest.useRealTimers();
    process.env.NEXT_PUBLIC_SITE_URL = hostname;
  });

  test('Generates valid XML containing every dictionary and letter entry', async () => {
    expect(readEntries(await createSitemap())).toEqual(expectedEntries());
  }, 5000);

  test('Public sitemap contains the current dictionary and letter entries', () => {
    const xml = readFileSync(
      `${__dirname}/../../../../public/sitemap.xml`,
      'utf8',
    );
    expect(readEntries(xml)).toEqual(expectedEntries());
  }, 5000);
});
