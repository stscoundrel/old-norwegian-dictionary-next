import { DictionaryEntry as RawDictionaryEntry } from 'old-norwegian-dictionary/dist/models'

export type OriginalDictionaryEntry = RawDictionaryEntry

export interface DictionaryEntry extends RawDictionaryEntry {
    slug: string,
}
