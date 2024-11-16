import { useRouter } from 'next/router'

// Services.
import type { Crosslink } from 'scandinavian-dictionary-crosslinker'
import {
  getWord, getAlphabet, type AlphabetLetter, getInitialWordsToBuild,
} from 'lib/services/dictionary'
import { type Abbreviation, getAbbreviations } from 'lib/services/abbreviations'

// Utils.
import { type Redirect404ResponseSchema, redirect404 } from 'lib/utils/redirect-404'

// Components.
import Layout from 'components/Layout'
import WordDefinition from 'components/WordDefinition'
import Button from 'components/Button'
import { ContentType } from 'lib/models/content-types'
import type { DictionaryEntry } from 'lib/models/dictionary'
import { getCrossLinks } from 'lib/services/crosslinks'
import { lettersToRunes } from 'riimut/dist/dialects/medieval-futhork'

interface WordPageProps{
    entry: DictionaryEntry,
    letters: AlphabetLetter[],
    abbreviations: Abbreviation[],
    crosslinks: Crosslink[],
    runes: string
}

interface WordPageParams{
    params: {
        word: string
    }
}

interface WordPath{
  params: {
      word: string
  }
}

interface WordPageStaticPathsResponseSchema{
  paths: WordPath[]
  fallback: string | boolean
}

interface WordPageStaticPropsResponseSchema{
    props: WordPageProps
}

/**
 * There are too many word paths for Vercel to build.
 * It hits 16 000 file limit.
 *
 * Build around 6000 pages initially and rest as they are accessed
 * or remotely revalidated via API.
 */
export async function getStaticPaths(): Promise<WordPageStaticPathsResponseSchema> {
  const initialPages = getInitialWordsToBuild()

  return {
    paths: initialPages.map((slug) => ({
      params: { word: slug },
    })),
    fallback: 'blocking',
  }
}

/**
 * Get word by slug.
 */
export async function getStaticProps(
  { params }: WordPageParams,
): Promise<WordPageStaticPropsResponseSchema | Redirect404ResponseSchema> {
  const { word } = params
  const entry = getWord(word)

  if (!entry) {
    return redirect404()
  }

  const letters = getAlphabet()
  const abbreviations = getAbbreviations(entry)
  const crosslinks = getCrossLinks(entry)
  const runes = lettersToRunes(entry.word)

  return {
    props: {
      entry,
      letters,
      abbreviations,
      crosslinks,
      runes,
    },
  }
}

export default function Word({
  entry, letters, abbreviations, crosslinks, runes,
}: WordPageProps) {
  const router = useRouter()

  if (!entry) {
    return null
  }

  return (
    <Layout
        type={ContentType.Word}
        content={entry}
        letters={letters}
        letter={null}
        noSearch={false}
    >
      <WordDefinition
        data={entry}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
        runes={runes}
      />
      <Button text="Back" action={() => router.back()} />
    </Layout>
  )
}
