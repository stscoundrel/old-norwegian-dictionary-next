// Services.
import { AlphabetLetter, getAlphabet, getByLetter } from 'lib/services/dictionary'
import { decodeLetter } from 'lib/utils/slugs'

// Components.
import Layout from 'components/Layout'
import LetterHeader from 'components/LetterHeader'
import WordList from 'components/WordList'
import { DictionaryEntry } from 'lib/models/dictionary'
import { ContentType } from 'lib/models/content-types'

interface LetterPath{
    params: {
        letter: string
    }
}

interface LetterPageStaticPaths{
    paths: LetterPath[]
    fallback: boolean
}

interface LetterPageProps{
    words: DictionaryEntry[] | null,
    letters: AlphabetLetter[],
    letter: AlphabetLetter
}

interface LetterPageStaticProps{
    props: LetterPageProps
}

/**
 * Get list of possible letter pages
 */
export async function getStaticPaths(): Promise<LetterPageStaticPaths> {
  const letters = getAlphabet()
  const paths = letters.map((letter) => ({
    params: { letter: letter.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

/**
 * Get words by letter.
 */
export async function getStaticProps({ params }): Promise<LetterPageStaticProps> {
  const { letter } = params
  const letters = getAlphabet()
  const decodedLetter = letters.filter(
    (alphabetLetter) => alphabetLetter.letter === decodeLetter(letter),
  )[0]
  const words = getByLetter(decodedLetter.letter)

  return {
    props: {
      words,
      letters,
      letter: decodedLetter,
    },
  }
}

export default function Letter({ words, letter, letters }: LetterPageProps) {
  if (!words) {
    return null
  }

  return (
     <Layout
        type={ContentType.Letter}
        content={words}
        letter={letter}
        letters={letters}
        noSearch={false}
    >
      <LetterHeader letter={letter.letter} count={words.length} />
      <WordList words={words} />
    </Layout>
  )
}
