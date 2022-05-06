import { DictionaryEntry as RawDictionaryEntry } from 'old-norwegian-dictionary/dist'

export type OriginalDictionaryEntry = RawDictionaryEntry

export interface DictionaryEntry extends RawDictionaryEntry {
    slug: string,
}
