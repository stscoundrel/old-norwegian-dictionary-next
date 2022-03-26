import { joinWithConj } from 'teljari'
import { capitalize } from 'lib/utils/strings'
import { ContentType } from 'lib/models/content-types'
import { DictionaryEntry } from 'lib/models/dictionary'

interface SEO {
    title: string,
    description: string
}

/**
 * Get meta tags by type.
 */
export const getSeo = (
  content: DictionaryEntry | DictionaryEntry[] | null,
  type: ContentType,
): SEO => {
  if (content) {
    if (type === ContentType.Word && !Array.isArray(content)) {
      return {
        title: `Old Norwegian Dictionary - ${capitalize(content.word)}`,
        description: `Meaning of Old Norwegian word "${content.word.toLowerCase()}"`,
      }
    }

    if (type === ContentType.Letter && Array.isArray(content)) {
      const firstWords = content.slice(0, 4).map((word) => word.word.toLowerCase())
      return {
        title: `Old Norwegian words starting with letter ${firstWords[0].charAt(0).toUpperCase()}`,
        description: `Meanings of Old Norwegian words starting with "${firstWords[0].charAt(0).toUpperCase()}", such as ${joinWithConj(firstWords)}`,
      }
    }
  }

  // Default tags.
  return {
    title: 'Old Norwegian Dictionary - Johan Fritzner',
    description: 'Dictionary of the Old Norwegian Language - 40 000+ words',
  }
}

export default getSeo
