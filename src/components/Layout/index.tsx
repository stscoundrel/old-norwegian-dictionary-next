// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head></Head>
      <main className="container">
        {children}
      </main>
      <Footer/>
    </>
  )
}
