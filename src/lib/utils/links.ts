import { DictionaryEntry } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'
import { ContentType } from 'lib/models/content-types'

export const getWordLink = (word: DictionaryEntry): string => `${process.env.NEXT_PUBLIC_SITE_URL}/word/${word.slug}`

export const getLetterLink = (letter: AlphabetLetter): string => `${process.env.NEXT_PUBLIC_SITE_URL}/letter/${letter.slug}`

export const getMainUrl = (): string => process.env.NEXT_PUBLIC_SITE_URL ?? ''

export const getCanonicalUrl = (
  content: DictionaryEntry | null,
  type: ContentType,
  letter?: AlphabetLetter,
) => {
  if (type === ContentType.Word && content !== null) {
    return getWordLink(content)
  }

  if (type === ContentType.Letter && letter) {
    return getLetterLink(letter)
  }

  return getMainUrl()
}
