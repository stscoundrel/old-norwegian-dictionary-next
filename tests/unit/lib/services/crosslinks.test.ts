import {
  DictionaryEntry,
} from 'lib/models/dictionary'
import {
  getCrossLinks,
} from 'lib/services/crosslinks'

// Entry which does not produce crosslink matches.
const entry1: DictionaryEntry = {
  word: 'loremipsum',
  definition: '',
  partOfSpeech: '',
  slug: 'loremipsum',
}

// Dummy entry which produces cross links
const entry2: DictionaryEntry = {
  word: '',
  definition: '',
  partOfSpeech: '',
  slug: 'fadir',

}

describe('Crosslinks service tests', () => {
  test('Returns empty list when no crosslinks results', () => {
    const result = getCrossLinks(entry1)
    expect(result.length).toEqual(0)
  })

  test('Returns crosslinks when slugs match', () => {
    const expected = [
      {
        url: 'https://cleasby-vigfusson-dictionary.vercel.app/word/fadir',
        source: 'old-norse',
      },
      {
        url: 'https://old-icelandic.vercel.app/word/fadir',
        source: 'old-icelandic',
      },
      {
        url: 'https://old-danish-dictionary.vercel.app/word/fader',
        source: 'old-danish',
      },
      {
        url: 'https://old-swedish-dictionary.vercel.app/word/fadhir',
        source: 'old-swedish',
      },
    ]

    const result = getCrossLinks(entry2)
    expect(result).toEqual(expected)
  })
})
