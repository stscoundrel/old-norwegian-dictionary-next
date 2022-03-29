import Link from 'next/link'
import styles from './WordLink.module.scss'

interface WordLinkPros{
  data: {
    slug: string,
    word: string,
  }
}

export default function WordLink({ data: { slug, word } }: WordLinkPros) {
  return (
   <Link key={`link${slug}`} href={`/word/${slug}`}>
      <a className={styles.link}>{word.toLowerCase()}</a>
    </Link>
  )
}
