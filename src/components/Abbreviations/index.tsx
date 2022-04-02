import { Abbreviation } from 'lib/services/abbreviations'
import styles from './Abbreviations.module.scss'

interface AbbreviationProps{
  abbreviations: Abbreviation[]
}

export default function Abbreviations({ abbreviations }: AbbreviationProps) {
  return (
    <div className={styles.abbreviations}>
      {abbreviations.length > 0
        && <div className={styles.column}>
          <h4>Abbreviations used:</h4>
          {abbreviations.map(({ abbreviation, explanation }) => (
            <dl className={styles.wrap} key={abbreviation}>
              <dt className={styles.abbreviation}>
                <strong>{abbreviation}</strong>
              </dt>
              <dd className={styles.explanation}>{explanation}</dd>
            </dl>
          ))}
        </div>
      }
    </div>
  )
}
