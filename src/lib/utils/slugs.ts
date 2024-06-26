import slugify from 'slugify'

interface SlugMapping {
    letter: string,
    slug: string
}

const slugTable: SlugMapping[] = [
  {
    letter: 'á',
    slug: 'a2',
  },
  {
    letter: 'ó',
    slug: 'o2',
  },
  {
    letter: 'ö',
    slug: 'oe',
  },
  {
    letter: 'ø',
    slug: 'oe2',
  },
  {
    letter: 'œ',
    slug: 'oe3',
  },
  {
    letter: 'ǫ',
    slug: 'oe4',
  },
  {
    letter: 'ý',
    slug: 'y2',
  },
  {
    letter: 'ú',
    slug: 'u2',
  },
  {
    letter: 'í',
    slug: 'i2',
  },
  {
    letter: 'é',
    slug: 'e2',
  },
  {
    letter: 'þ',
    slug: 'th',
  },
  {
    letter: 'æ',
    slug: 'ae',
  },
]

export const slugifyLetter = (letter: string): string => {
  let slug = ''

  slugTable.forEach((entry) => {
    if (entry.letter === letter) {
      slug = entry.slug
    }
  })

  if (slug === '') {
    slug = slugify(letter)
  }

  return slug.toLowerCase()
}

export const slugifyWord = (word: string): string => slugify(word).toLowerCase()

export const decodeLetter = (slug: string): string => {
  let letter = ''

  slugTable.forEach((entry) => {
    if (entry.slug === slug) {
      letter = entry.letter
    }
  })

  if (letter === '') {
    letter = slug
  }

  return letter
}
