// Services.
import { AlphabetLetter, getAlphabet } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import { ContentType } from 'lib/models/content-types'

/**
 * Get navigations.
 */
export async function getStaticProps() {
  const letters = getAlphabet()

  return {
    props: {
      letters,
    },
  }
}

interface Error404Props{
  letters: AlphabetLetter[]
}

export default function ErrorPage404({ letters }: Error404Props) {
  return (
    <Layout type={ContentType.Page} letters={letters} letter={null} content={null} noSearch={false}>
      <ContentArea>
        <h1>Page not found</h1>
        <p>Huh, that&apos;s weird.</p>
      </ContentArea>
    </Layout>
  )
}
