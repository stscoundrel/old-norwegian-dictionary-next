import { getDictionary } from 'old-norwegian-dictionary'
import { matchesSchema } from 'jafningjar'
import {
  getAllWords, getByLetter, getWord, getAlphabet,
} from 'lib/services/dictionary'

describe('Dictionary tests', () => {
  const dictionary = getAllWords()
  test('Dictionary is not identical with original source.', () => {
    const originalDictionary = getDictionary()

    expect(originalDictionary).not.toMatchObject(dictionary)
  })

  test('Enrichened dictionary has equal amount of entries as the original one', () => {
    expect(getDictionary().length).toBe(getAllWords().length)
  })

  test('Dictionary has added url slugs to source', () => {
    dictionary.forEach((entry) => {
      expect(Object.keys(entry)).toEqual(['word', 'definition', 'partOfSpeech', 'slug'])
    })
  })

  test('Dictionary slugs are unique', () => {
    const slugs = new Set()

    dictionary.forEach((entry) => {
      slugs.add(entry.slug)
    })

    expect(slugs.size).toEqual(dictionary.length)
  })

  test('Dictionary gets words by letter', () => {
    const aWords = getByLetter('A')
    const þWords = getByLetter('þ')

    expect(aWords.length).toBe(1876)
    expect(þWords.length).toBe(1126)

    aWords.forEach((entry) => {
      expect(entry.word.charAt(0).toLowerCase()).toBe('a')
    })

    þWords.forEach((entry) => {
      expect(entry.word.charAt(0).toLowerCase()).toBe('þ')
    })
  })

  test('Dictionary gets individual words by slug', () => {
    const word1 = getWord('aflsmadr')
    const word2 = getWord('ablastarfreistni')
    const word3 = getWord('thyrnikorona')

    expect(word1.word.toLowerCase()).toBe('aflsmaðr')
    expect(word1.slug).toBe('aflsmadr')
    expect(word1.partOfSpeech).toBe('adj')
    expect(word1.definition).toEqual('aflsmaðr, adj. stærk, kraftig Person; kapp-gjarnir ok alfsmenn (for aflsmenn) íguðu verki Leif. 1811.')

    expect(word2.word.toLowerCase()).toBe('ablástarfreistni')
    expect(word2.slug).toBe('ablastarfreistni')
    expect(word2.partOfSpeech).toBe('f')
    expect(word2.definition).toEqual('ablástarfreistni, f. onde Indskydelser, hvor-ved et Menneske fristes; smiðbelgir hans(ero) áblástarfreistni Elucid. 1363.')

    expect(word3.word.toLowerCase()).toBe('þyrnikóróna')
    expect(word3.slug).toBe('thyrnikorona')
    expect(word3.partOfSpeech).toBe('f')
    expect(word3.definition).toEqual('þyrnikóróna, f. Tornekrone. Mar. 79131.')
  })

  test('Dictionary gets alphabet constants with slugs', () => {
    const alphabet = getAlphabet()

    const expected = {
      letter: '',
      slug: '',
    }

    alphabet.forEach((entry) => {
      expect(matchesSchema(entry, expected)).toBeTruthy()
    })
  })

  test('Alphabet does not contain invalid chars.', () => {
    const alphabet = getAlphabet()
    const invalids = ['ǫ', 'ø']

    alphabet.forEach((letter) => {
      expect(invalids.includes(letter.letter)).toBeFalsy()
    })
  })

  test('Alphabet contains added ö letter.', () => {
    const alphabet = getAlphabet()
    let foundÖ = false

    alphabet.forEach((letter) => {
      if (letter.letter === 'ö') {
        foundÖ = true
      }
    })

    expect(foundÖ).toBeTruthy();
  })
})
