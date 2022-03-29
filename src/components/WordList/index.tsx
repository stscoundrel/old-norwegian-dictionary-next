import WordLink from 'components/WordLink'
import { DictionaryEntry } from 'lib/models/dictionary'
import styles from './WordList.module.scss'

interface WordListProps{
  words: DictionaryEntry[]
}

export default function WordList({ words }: WordListProps) {
  return (
    <ul className={styles.list}>
      { words.map((word) => (
        <li key={word.slug}>
          <WordLink data={word} />
        </li>
      )) }
    </ul>
  )
}
