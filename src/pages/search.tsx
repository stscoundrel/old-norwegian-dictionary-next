// Services.
import { AlphabetLetter, getAllWords, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import SearchForm from 'components/SearchForm'
import { ContentType } from 'lib/models/content-types'
import { DictionaryEntry } from 'lib/models/dictionary'

interface SearchPageProps{
    words: DictionaryEntry[],
    letters: AlphabetLetter[]
}

interface SearchPageStaticProps{
    props: SearchPageProps
}

export async function getStaticProps(): Promise<SearchPageStaticProps> {
  const words = getAllWords()
  const letters = getAlphabet()

  return {
    props: {
      words,
      letters,
    },
  }
}

export default function Search({ words, letters }: SearchPageProps) {
  return (
    <Layout type={ContentType.Page} letters={letters} noSearch={true} letter={null} content={null}>
      <SearchForm words={words} />
    </Layout>
  )
}
