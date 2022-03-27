import { getAllWords } from 'lib/services/dictionary'
import { searchDictionary } from 'lib/services/search'

describe('Search tests', () => {
  const dictionary = getAllWords()

  test('Returns results in correct formatting', () => {
    const result = searchDictionary('atskiljanligr', dictionary)

    const expected = {
      word: 'atskiljanligr',
      definition: 'atskiljanligr, adj. forskjellig, afvigende. Klm. 206; Æf. 6527.',
      partOfSpeech: 'adj',
      slug: 'atskiljanligr',
      foundIn: [
        '<mark>atskiljanligr</mark>, <abbr title="Adjectiv.">adj.</abbr> forskjellig, afvigende. Kl<abbr title="Masculin.">m.</abbr> 206; Æ<abbr title="Feminin.">f.</abbr> 6527.',
      ],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from descriptions', () => {
    const result = searchDictionary('sexæringr', dictionary)

    const expected = {
      word: '-æringr',
      partOfSpeech: 'uten ordklasse',
      definition: '-æringr (af ár dvs. Aare) i sexæringr, átt-æringr, teinæringr.',
      slug: 'aeringr',
      foundIn: [
        '-æringr (af ár dv<abbr title="substantiv.">s.</abbr> Aare) i <mark>sexæringr</mark>, átt-æringr, teinærin<abbr title="græft.">gr.</abbr>',
      ],
    }

    expect(result[0]).toEqual(expected)
  })

  test('Finds results from slug', () => {
    const result = searchDictionary('afarúðigr', dictionary)

    const expected = {
      word: 'afarúðigr',
      definition: 'afarúðigr, adj. overmodig. Fm. VII, 20 &vl',
      partOfSpeech: 'adj',
      slug: 'afarudigr',
      foundIn: [
        '<mark>afarúðigr</mark>, <abbr title="Adjectiv.">adj.</abbr> overmodig. F<abbr title="Masculin.">m.</abbr> VII, 20 &vl',
      ],
    }

    expect(result[0]).toEqual(expected)
  })
})
