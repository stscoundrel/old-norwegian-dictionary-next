// Services.
import { AlphabetLetter, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import SearchForm from 'components/SearchForm'
import { ContentType } from 'lib/models/content-types'

interface SearchPageProps{
    letters: AlphabetLetter[]
}

interface SearchPageStaticProps{
    props: SearchPageProps
}

export async function getStaticProps(): Promise<SearchPageStaticProps> {
  const letters = getAlphabet()

  return {
    props: {
      letters,
    },
  }
}

export default function Search({ letters }: SearchPageProps) {
  return (
    <Layout type={ContentType.Page} letters={letters} noSearch={true} letter={null} content={null}>
      <SearchForm />
    </Layout>
  )
}
