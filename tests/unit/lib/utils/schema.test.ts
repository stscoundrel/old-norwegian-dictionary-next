import { ContentType } from 'lib/models/content-types'
import { getSchema } from 'lib/utils/schema'

describe('Schema structure tests', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://old-norwegian-dictionary.test'

  const words = [
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

  test('Handles "word" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTerm',
        '@id': 'https://old-norwegian-dictionary.test/word/ufrjalsleikr',
        name: 'Old Norwegian Dictionary - Úfrjálsleikr',
        description: 'úfrjálsleikr, m. Omstændighed som hindreren i hans Raadighed over eller Besiddelseaf en Jordeiendom. DN. II, 25014. 263.',
        inDefinedTermSet: 'https://old-norwegian-dictionary.test',
      },
    )

    const result = getSchema(words[1], ContentType.Word)

    expect(result).toEqual(expected)
  })

  test('Handles "letter" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://old-norwegian-dictionary.test/letter/u2',
        name: 'Old Norwegian Dictionary - Letter Ú',
        description: 'Old Norwegian words starting with letter Ú',
      },
    )

    const result = getSchema(words, ContentType.Letter)

    expect(result).toEqual(expected)
  })

  test('Handles "breadcrumbs" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'First breadcrumb',
            item: 'https://old-norwegian-dictionary.test/first-link',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Second breadcrumb',
            item: 'https://old-norwegian-dictionary.test/second-link',
          },
        ],
      },
    )

    const breadcrumbs = [
      {
        label: 'First breadcrumb',
        url: '/first-link',
      },
      {
        label: 'Second breadcrumb',
        url: '/second-link',
      },
    ]
    const result = getSchema(breadcrumbs, ContentType.Breadcrumbs)

    expect(result).toEqual(expected)
  })

  test('Handles "default" Schema', () => {
    const expected = JSON.stringify(
      {
        '@context': 'https://schema.org/',
        '@type': 'DefinedTermSet',
        '@id': 'https://old-norwegian-dictionary.test',
        name: 'Old Norwegian Dictionary',
        description: 'Old Norwegian words with Norwegian definitions',
      },
    )

    const result = getSchema()

    expect(result).toEqual(expected)
  })
})
