// Services.
import { getAlphabet, AlphabetLetter } from 'lib/services/dictionary'

// Components.
import Layout from 'components/Layout'
import ContentArea from 'components/ContentArea'
import Link from 'next/link'
import { ContentType } from 'lib/models/content-types'

interface IndexProps{
  letters: AlphabetLetter[]
}

export async function getStaticProps() {
  const letters = getAlphabet()

  return {
    props: {
      letters,
    },
  }
}

export default function Index({ letters }: IndexProps) {
  return (
    <Layout letters={letters} type={ContentType.Page} content={null} letter={null} noSearch={false}>
      <ContentArea>
        <h1 className="h2">Dictionary of the Old Norwegian Language</h1>
        <p>Online version of the `&quot;<em>Ordbog over det gamle norske Sprog`</em>&quot;
        dictionary by Johan Fritzner, originally published in the late 1800s</p>

        <p>The dictionary contains over 40 000 translations
          from Old Norwegian/Norse to Norwegian</p>

        <Link href="/search">
         <a className="button">Search the dictionary</a>
        </Link>
      </ContentArea>
    </Layout>
  )
}
