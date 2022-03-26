import { DictionaryEntry } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'

enum LinkType {
    Word = 'word',
    Letter = 'letter',
    Other = 'other'
}

export const getWordLink = (word: DictionaryEntry): string => `${process.env.NEXT_PUBLIC_SITE_URL}/word/${word.slug}`

export const getLetterLink = (letter: AlphabetLetter): string => `${process.env.NEXT_PUBLIC_SITE_URL}/letter/${letter.slug}`

export const getMainUrl = (): string => process.env.NEXT_PUBLIC_SITE_URL ?? ''

export const getCanonicalUrl = (
  content: DictionaryEntry | null,
  type: LinkType,
  letter?: AlphabetLetter,
) => {
  if (type === LinkType.Word && content !== null) {
    return getWordLink(content)
  }

  if (type === LinkType.Letter && letter) {
    return getLetterLink(letter)
  }

  return getMainUrl()
}
