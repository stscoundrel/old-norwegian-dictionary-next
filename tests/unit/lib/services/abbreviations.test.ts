import {
  getAbbreviations,
  addAbbreviationsToContent,
} from 'lib/services/abbreviations'

describe('Abbreviations tests', () => {
  const entry = {
    word: 'þrályndi',
    partOfSpeech: 'n',
    definition: 'þrályndi, n. d. s.; hélt honum aptr fornsiðvenja ok mykyt þrályndi Barl. 12524;Fgrdl. 5816.',
    slug: 'thralyndi',
  }

  test('Abbreviations have expected content', () => {
    const result = getAbbreviations(entry)

    const expected = [
      {
        abbreviation: 'n.',
        explanation: 'Neutrum.',
      },
      {
        abbreviation: 's.',
        explanation: 'substantiv.',
      },
    ]

    expect(result).toEqual(expected)
  })

  test('Adds abbr tags to content', () => {
    const abbreviations = getAbbreviations(entry)

    const result = addAbbreviationsToContent(entry.definition, abbreviations)
    const expected = 'þrályndi, <abbr title="Neutrum.">n.</abbr> d. <abbr title="substantiv.">s.</abbr>; hélt honum aptr fornsiðvenja ok mykyt þrályndi Barl. 12524;Fgrdl. 5816.'

    expect(result).toEqual(expected)
  })
})
