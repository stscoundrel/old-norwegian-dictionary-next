import { getDictionary } from 'old-norwegian-dictionary'
import { VALID_AS_FIRST } from 'old-norse-alphabet'
import { slugifyWord, slugifyLetter } from '../utils/slugs'
import { OriginalDictionaryEntry, DictionaryEntry } from '../models/dictionary'

export interface AlphabetLetter{
  letter: string,
  slug: string,
}

const addSlugs = (words: OriginalDictionaryEntry[]): DictionaryEntry[] => {
  const existingSlugs = {}

  const formattedWords = words.map((word) => {
    let slug = slugifyWord(word.word).toLowerCase()

    if (existingSlugs[slug]) {
      // Double slug, make unique.
      existingSlugs[slug] += 1
      slug = `${slug}-${existingSlugs[slug]}`
    } else {
      existingSlugs[slug] = 1
    }

    return {
      ...word,
      slug,
    }
  })

  return formattedWords
}

export const getAllWords = (): DictionaryEntry[] => {
  const words = getDictionary()

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words)

  return formattedWords
}

export const getByLetter = (letter: string): DictionaryEntry[] => {
  const words = getAllWords()
  const byLetter = words.filter((entry) => (
    entry.word.charAt(0).toLowerCase() === letter.toLowerCase()))

  return byLetter
}

export const getWord = (word: string): DictionaryEntry => (
  getAllWords().filter((entry) => entry.slug === word)[0]
)

export const getAlphabet = (): AlphabetLetter[] => {
  const letters = [...VALID_AS_FIRST.filter((letter) => letter !== 'ǫ' && letter !== 'ø'), 'ö']

  const formattedLetters = letters.map((letter) => ({
    letter,
    slug: slugifyLetter(letter),
  }))

  return formattedLetters
}
