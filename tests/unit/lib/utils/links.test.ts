import { getWordLink, getLetterLink, getCanonicalUrl } from 'lib/utils/links'

describe('Link utils', () => {
  process.env.NEXT_PUBLIC_SITE_URL = 'https://old-norwegian-dictionary.test'

  const word = {

    word: 'aflsmaðr',
    partOfSpeech: 'adj',
    definition: 'aflsmaðr, adj. stærk, kraftig Person; kapp-gjarnir ok alfsmenn (for aflsmenn) íguðu verki Leif. 1811.',

    slug: 'aflsmadr',
  }

  const letter = {
    letter: 'æ',
    slug: 'ae',
  }

  test('Formats word links', () => {
    const expected = 'https://old-norwegian-dictionary.test/word/aflsmadr'

    const result = getWordLink(word)

    expect(result).toEqual(expected)
  })

  test('Formats letter links', () => {
    const expected = 'https://old-norwegian-dictionary.test/letter/ae'

    const result = getLetterLink(letter)

    expect(result).toEqual(expected)
  })

  test('Gets canonical urls', () => {
    const expectedMain = process.env.NEXT_PUBLIC_SITE_URL
    const expectedWord = 'https://old-norwegian-dictionary.test/word/aflsmadr'
    const expectedLetter = 'https://old-norwegian-dictionary.test/letter/ae'

    const result1 = getCanonicalUrl(word, 'letter', letter)
    const result2 = getCanonicalUrl(word, 'word')
    const result3 = getCanonicalUrl(null, 'main')

    expect(result1).toEqual(expectedLetter)
    expect(result2).toEqual(expectedWord)
    expect(result3).toEqual(expectedMain)
  })
})
