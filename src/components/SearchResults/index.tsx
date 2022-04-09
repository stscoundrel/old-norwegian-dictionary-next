import { SearchResult } from 'lib/services/search'
import SearchTeaser from './SearchTeaser'
import styles from './SearchResults.module.scss'

interface SearchResultsProps{
  words: SearchResult[]
}

export default function SearchResults({ words }: SearchResultsProps) {
  return (
    <>
      <p className="blue">{words.length} results found</p>
      <ul className={styles.list}>
        { words.map((word) => (
          <li key={word.slug}>
            <SearchTeaser data={word} />
          </li>
        )) }
      </ul>
    </>
  )
}
