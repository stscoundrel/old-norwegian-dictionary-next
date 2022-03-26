import { ContentType } from 'lib/models/content-types'
import { slugifyLetter, slugifyWord } from 'lib/utils/slugs'
import { capitalize } from 'lib/utils/strings'

export interface Breadcrumb{
    label: string,
    url: string,
}

interface BreadcrumbRequest{
    type: ContentType,
    word?: string | null,
    letter?: string | null
}

const getFrontpage = () => ({
  label: 'Old Norwegian Dictionary',
  url: '/',
})

const getLetter = (letter: string) => ({
  label: `Letter ${letter.toUpperCase()}`,
  url: `/letter/${slugifyLetter(letter)}`,
})

const getWord = (word: string) => ({
  label: capitalize(word),
  url: `/word/${slugifyWord(word)}`,
})

export const getBreadcrumbs = (data: BreadcrumbRequest) => {
  const { type, word, letter } = data

  const breadcrumbs = [getFrontpage()]

  if ((type === ContentType.Letter || type === ContentType.Word) && letter) {
    breadcrumbs.push(getLetter(letter))
  }

  if (type === ContentType.Word && word) {
    breadcrumbs.push(getWord(word))
  }

  return breadcrumbs
}

export default getBreadcrumbs
