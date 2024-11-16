import type { Crosslink } from 'scandinavian-dictionary-crosslinker'
import { capitalize, getOlderSpelling } from 'lib/utils/strings'
import { type Abbreviation, addAbbreviationsToContent } from 'lib/services/abbreviations'
import type { DictionaryEntry } from 'lib/models/dictionary'
import Abbreviations from 'components/Abbreviations'
import Crosslinks from 'components/Crosslinks'
import styles from './WordDefinition.module.scss'

interface WordDefinitionProps{
  data: DictionaryEntry,
  abbreviations: Abbreviation[],
  crosslinks: Crosslink[],
  runes: string,
}

export default function WordDefinition({
  data, abbreviations, crosslinks, runes,
}: WordDefinitionProps) {
  const { word, partOfSpeech, definition } = data
  const olderForm = getOlderSpelling(word)
  const hasOlderForm = word !== olderForm

  return (
    <article className={styles.section}>
      <header>
        <h1 lang="non">{capitalize(word)}</h1>

        <small className={styles.subHeading}>
          Old Norwegian Dictionary - {word.toLowerCase()}
        </small>
        <p>Meaning of Old Norwegian word <em>&quot;{word}&quot;</em>
        {hasOlderForm && <> (or <em>{olderForm}</em>)</>} in Norwegian.</p>
        <p>As defined by the Johan Fritzer&apos;s Old Norwegian dictionary:</p>
      </header>

      <dl className={styles.definitionList}>
        <dt><strong>{word}</strong> {hasOlderForm && <>({olderForm})</>}</dt>
        <dd
          lang="nor"
          className={styles.itemDescription}
          dangerouslySetInnerHTML={{
            __html: addAbbreviationsToContent(definition, abbreviations),
          } }
        ></dd>
      </dl>

      <p><strong>Part of speech:</strong> <em>{partOfSpeech}</em></p>

      {hasOlderForm
        && <p>
          <strong>Orthography: </strong>Johan Fritzner&apos;s dictionary used the letter <em>ö </em>
          to represent the original Old Norwegian (or Old Norse) vowel <em>ǫ</em>.
          Therefore, <em>{word}</em> may be more accurately written as <em>{olderForm}</em>.
        </p>}

      <p>Possible runic inscription in <em>Medieval Futhork:</em>
        <span className={styles.rune}>{ runes }</span><br />
        <small>Medieval Runes were used in Norway from 11th to 15th centuries.</small><br />
        <small>
          Futhork was a continuation of earlier Younger Futhark runes,
          which were used to write Old Norse.
        </small>
      </p>

      <Abbreviations abbreviations={abbreviations} />
      <br />
      <Crosslinks crosslinks={crosslinks} />
    </article>
  )
}
