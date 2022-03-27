// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'
import Breadcrumbs from 'components/Breadcrumbs'
import Navigation from 'components/Navigation'
import BackToTop from 'components/BackToTop'
import { ContentType } from 'lib/models/content-types'
import { DictionaryEntry } from 'lib/models/dictionary'
import { AlphabetLetter } from 'lib/services/dictionary'

interface LayoutProps{
  type: ContentType,
  content: DictionaryEntry | DictionaryEntry[] | null,
  letters: AlphabetLetter[],
  letter: AlphabetLetter | null,
  noSearch: boolean,
  children: JSX.Element | JSX.Element[],
}

export default function Layout({
  type, letters, content = null, children, letter = null, noSearch = false,
}: LayoutProps) {
  return (
    <>
      <Head type={type} content={content} letter={letter} />
      <header>
        <Navigation letters={letters} noSearch={noSearch}/>
        <Breadcrumbs type={type} content={content} />
      </header>
      <main className="container">
        {children}
        <BackToTop />
      </main>
      <Footer letters={letters}/>
    </>
  )
}
