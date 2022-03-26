import { capitalize } from 'lib/utils/strings'
import { slugifyLetter } from 'lib/utils/slugs'
import { getWordLink, getLetterLink } from 'lib/utils/links'
import { DictionaryEntry } from 'lib/models/dictionary'
import { ContentType } from 'lib/models/content-types'
import { Breadcrumb } from 'lib/utils/breadcrumbs'

interface SchemaListItem{
    '@type': string,
    position: number
    name: string,
    item: string,
}

interface SchemaDefinition {
    '@context': string,
    '@type': string,
    '@id'?: string,
    name?: string,
    description?: string,
    itemListElement?: SchemaListItem[],
    inDefinedTermSet?: string,
}

const getDefinedTermSetData = (content: DictionaryEntry[]): SchemaDefinition => {
  const letter = {
    letter: content[0].word.charAt(0),
    slug: slugifyLetter(content[0].word.charAt(0)),
  }

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': getLetterLink(letter),
    name: `Old Norwegian Dictionary - Letter ${letter.letter.toUpperCase()}`,
    description: `Old Norwegian words starting with letter ${letter.letter.toUpperCase()}`,
  }
}

const getDefinedTermData = (content: DictionaryEntry): SchemaDefinition => ({
  '@context': 'https://schema.org/',
  '@type': 'DefinedTerm',
  '@id': getWordLink(content),
  name: `Old Norwegian Dictionary - ${capitalize(content.word)}`,
  description: content.definition,
  inDefinedTermSet: process.env.NEXT_PUBLIC_SITE_URL,
})

const getBreadcrumbListData = (content: Breadcrumb[]): SchemaDefinition => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  const listItems: SchemaListItem[] = content.map(({ label, url }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: label,
    item: siteUrl + url,
  }))

  return {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  }
}

const getDefault = (): SchemaDefinition => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  return {
    '@context': 'https://schema.org/',
    '@type': 'DefinedTermSet',
    '@id': `${siteUrl}`,
    name: 'Old Norwegian Dictionary',
    description: 'Old Norwegian words with Norwegian definitions',
  }
}

/**
 * Get schema.org JSON-LD by type.
 */
export const getSchema = (
  content?: DictionaryEntry | DictionaryEntry[] | Breadcrumb[],
  type?: ContentType,
): string => {
  if (type === ContentType.Word && !Array.isArray(content)) {
    const data = getDefinedTermData(content as DictionaryEntry)

    return JSON.stringify(data)
  }

  if (type === ContentType.Letter && Array.isArray(content)) {
    const termSet = getDefinedTermSetData(content as DictionaryEntry[])
    return JSON.stringify(termSet)
  }

  if (type === ContentType.Breadcrumbs && Array.isArray(content)) {
    const data = getBreadcrumbListData(content as unknown as Breadcrumb[])

    return JSON.stringify(data)
  }

  const data = getDefault()
  return JSON.stringify(data)
}

export default getSchema
