import { AlphabetLetter } from 'lib/services/dictionary'
import Link from 'next/link'
import styles from './LetterLink.module.scss'

interface LetterLinkProps{
  letter: AlphabetLetter
}

export default function LetterLink({ letter }: LetterLinkProps) {
  return (
   <Link href={`/letter/${letter.slug}`}>
      <a className={styles.link}>{letter.letter}</a>
    </Link>
  )
}
