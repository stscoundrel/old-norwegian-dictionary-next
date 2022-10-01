import { capitalize } from 'lib/utils/strings'
import { lettersToShortTwigRunes } from 'younger-futhark'
import { Abbreviation, addAbbreviationsToContent } from 'lib/services/abbreviations'
import { DictionaryEntry } from 'lib/models/dictionary'
import Abbreviations from 'components/Abbreviations'
import styles from './WordDefinition.module.scss'

interface WordDefinitionProps{
  data: DictionaryEntry,
  abbreviations: Abbreviation[]
}

export default function WordDefinition({ data, abbreviations }: WordDefinitionProps) {
  const { word, partOfSpeech, definition } = data

  return (
    <article className={styles.section}>
      <header>
        <h1 lang="non">{capitalize(word)}</h1>

        <small className={styles.subHeading}>
          Old Norwegian Dictionary - {word.toLowerCase()}
        </small>
        <p>Meaning of Old Norwegian word <em>&quot;{word}&quot;</em> in Norwegian.</p>
        <p>As defined by the Johan Fritzer&apos;s Old Norwegian dictionary:</p>
      </header>

      <dl className={styles.definitionList}>
        <dt><strong>{word}</strong></dt>
        <dd
          lang="nor"
          className={styles.itemDescription}
          dangerouslySetInnerHTML={{
            __html: addAbbreviationsToContent(definition, abbreviations),
          } }
        ></dd>
      </dl>

      <p><strong>Part of speech:</strong> <em>{partOfSpeech}</em></p>

      <p>Possible runic inscription in <em>Younger Futhark:</em>
        <span className={styles.rune}>{ lettersToShortTwigRunes(word) }</span>
      </p>

      <Abbreviations abbreviations={abbreviations} />
    </article>
  )
}
