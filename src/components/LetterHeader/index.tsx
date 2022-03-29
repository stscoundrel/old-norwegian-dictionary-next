import styles from './LetterHeader.module.scss'

interface LetterHeaderProps{
  letter: string,
  count: number,
}

export default function LetterHeader({ letter, count }: LetterHeaderProps) {
  return (
   <header className={styles.section}>
    <h1 className={styles.title}>Letter {letter.toUpperCase()}</h1>
    <small className={styles.subHeading}>
      Old Norwegian Dictionary - Letter {letter.toUpperCase()}
    </small>
    <p>Old Norwegian words starting with letter {letter.toUpperCase()}</p>
    <small className={styles.count}>Total of {count} words</small>
  </header>
  )
}
