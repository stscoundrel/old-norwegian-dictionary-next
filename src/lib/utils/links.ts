import { DictionaryEntry } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'
import { ContentType } from 'lib/models/content-types'

export const getWordLink = (word: DictionaryEntry): string => `${process.env.NEXT_PUBLIC_SITE_URL}/word/${word.slug}`

export const getLetterLink = (letter: AlphabetLetter): string => `${process.env.NEXT_PUBLIC_SITE_URL}/letter/${letter.slug}`

export const getWordPath = (word: DictionaryEntry): string => `/word/${word.slug}`

export const getMainUrl = (): string => process.env.NEXT_PUBLIC_SITE_URL ?? ''

export const getCanonicalUrl = (
  content: DictionaryEntry | DictionaryEntry[] | null,
  type: ContentType,
  letter: AlphabetLetter | null,
) => {
  if (type === ContentType.Word && content !== null && !Array.isArray(content)) {
    return getWordLink(content)
  }

  if (type === ContentType.Letter && letter) {
    return getLetterLink(letter)
  }

  return getMainUrl()
}
