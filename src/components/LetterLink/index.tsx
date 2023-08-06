import Link from 'next/link'
import { AlphabetLetter } from 'lib/services/dictionary'
import styles from './LetterLink.module.scss'

interface LetterLinkProps{
  letter: AlphabetLetter
}

export default function LetterLink({ letter }: LetterLinkProps) {
  return (
   <Link href={`/letter/${letter.slug}`} className={styles.link} prefetch={false}>
      {letter.letter}
    </Link>
  )
}
