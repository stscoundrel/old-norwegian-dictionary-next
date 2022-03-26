import { ContentType } from 'lib/models/content-types'
import { getSeo } from 'lib/utils/seo'

describe('SEO / meta tags tests', () => {
  const words = [

    {
      word: 'úfriðr',
      partOfSpeech: 'm',
      definition: 'úfriðr, m. Ufred, Strid, Krig. Flat. II,5632; Fm. VI, 286; Sturl. II, 11212.',
      slug: 'ufridr',
    },
    {
      word: 'úfriðsamliga',
      partOfSpeech: 'adv',
      definition: 'úfriðsamliga, adv.  1)  paa en ufredeligMaade som úfriðarmenn; þeir fara núsunnan fyrir landit ófriðsamliga, herjaþar ok ræna Fm. XI, 12211.  2)  paaen Maade der betyder Ufred; úfriðsam-liga hefir mik dreymt Laxd. (Udg. 1826)S. 37419.',
      slug: 'ufridsamliga',
    },
    {
      word: 'úfriðsamligr',
      partOfSpeech: 'adj',
      definition: 'úfriðsamligr, adj. forbunden med Ufred;fékk þaðan þá eina spurn, at ófrið-samligt myndi þangat at fara OH. 2004.',
      slug: 'ufridsamligr',
    },
    {
      word: 'úfriðsamr',
      partOfSpeech: 'adj',
      definition: 'úfriðsamr, adj. ufredelig, ufredsommelig;bœndr munu vilja vitja vár með ófriði,ok er þat ok vel, er vér höfum veritof ófriðsamir Fm. XI, 2701; VIII, 26621.',
      slug: 'ufridsamr',
    },
    {
      word: 'úfriðvænn',
      partOfSpeech: 'adj',
      definition: 'úfriðvænn, adj. = úfriðarvænn; nú mun-um vér sigla at landi, þvíat úgjörlaveit, ef hafviðri kemr á hvast, hvarvér náum þá landi, en heldr úfriðvæntfyrir í flestum stöðum Eg. 60 (13315).',
      slug: 'ufridvaenn',
    },
    {
      word: 'úfrjáls',
      partOfSpeech: 'adj',
      definition: 'úfrjáls, adj.  1)  ufri, underkastet andresHerredømme som en Træl; oft verðr yðrúdrjúg hin úfrjálsa ættin til dreng-skaparins Flat. I, 33521.  2)  som manuhindret af Heftelse eller Paatale kanbeholde og benytte; om Jordegods: DN.II, 263. 252.',
      slug: 'ufrjals',
    },
    {
      word: 'úfrjálsleikr',
      partOfSpeech: 'm',
      definition: 'úfrjálsleikr, m. Omstændighed som hindreren i hans Raadighed over eller Besiddelseaf en Jordeiendom. DN. II, 25014. 263.',
      slug: 'ufrjalsleikr',
    },
  ]

  test('Handles "word" seo fields', () => {
    const expected = {
      title: 'Old Norwegian Dictionary - Úfriðr',
      description: 'Meaning of Old Norwegian word "úfriðr"',
    }

    const result = getSeo(words[0], ContentType.Word)

    expect(result).toEqual(expected)
  })

  test('Handles "letter" seo fields', () => {
    const expected = {
      title: 'Old Norwegian words starting with letter Ú',
      description: 'Meanings of Old Norwegian words starting with "Ú", such as úfriðr, úfriðsamliga, úfriðsamligr and úfriðsamr',
    }

    const result = getSeo(words, ContentType.Letter)

    expect(result).toEqual(expected)
  })

  test('Handles default response', () => {
    const expected = {
      title: 'Old Norwegian Dictionary - Johan Fritzner',
      description: 'Dictionary of the Old Norwegian Language - 40 000+ words',
    }

    const result = getSeo()

    expect(result).toEqual(expected)
  })
})
