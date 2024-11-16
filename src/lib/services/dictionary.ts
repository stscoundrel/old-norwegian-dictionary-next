import { getDictionary } from 'old-norwegian-dictionary'
import { VALID_AS_FIRST } from 'old-norse-alphabet'
import { oldNorseSort } from 'old-norse-alphabet-sort'
import { slugifyWord, slugifyLetter } from '../utils/slugs'
import type { OriginalDictionaryEntry, DictionaryEntry } from '../models/dictionary'

let cachedDictionary: DictionaryEntry[] | null = null
let cachedInitialPages: string[] | null = null

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
  if (cachedDictionary) return cachedDictionary

  const words = getDictionary()

  /**
   * Add URL safe slugs.
   */
  const formattedWords = addSlugs(words)

  cachedDictionary = formattedWords

  return formattedWords
}

export const getByLetter = (letter: string): DictionaryEntry[] => {
  const words = getAllWords()
  const byLetter = words
    .filter((entry) => (
      entry.word.charAt(0).toLowerCase() === letter.toLowerCase()))
    .sort((a, b) => oldNorseSort(a.word, b.word))

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

/**
 * Initial word pages to build are basically 6000
 * headword pages based on modulus. Larger number
 * can not be deployed in one go.
 */
export const getInitialWordsToBuild = (): string[] => {
  if (cachedInitialPages) return cachedInitialPages

  const allWords = getAllWords()

  const result: string[] = []
  for (let i = 0; i < allWords.length; i += 7) {
    result.push(allWords[i].slug);
  }

  cachedInitialPages = result
  return cachedInitialPages
}
