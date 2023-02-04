import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { DictionarySource } from 'scandinavian-dictionary-crosslinker'
import WordDefinition from './index'

const word = {
  word: 'þrályndi',
  partOfSpeech: 'n',
  definition: 'þrályndi, n. d. s.; hélt honum aptr fornsiðvenja ok mykyt þrályndi Barl. 12524;Fgrdl. 5816.',
  slug: 'thralyndi',
}

const abbreviations = [
  {
    abbreviation: 'n.',
    explanation: 'Neutrum.',
  },
  {
    abbreviation: 's.',
    explanation: 'substantiv.',
  },
]

const crosslinks = [
  {
    url: 'https://old-icelandic.vercel.app/word/fadir',
    source: DictionarySource.OldIcelandic,
  },
  {
    url: 'https://old-swedish-dictionary.vercel.app/word/fadhir',
    source: DictionarySource.OldSwedish,
  },
]

describe('WordDefinition component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordDefinition data={word} abbreviations={abbreviations} crosslinks={crosslinks}/>)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <WordDefinition data={word} abbreviations={abbreviations} crosslinks={crosslinks} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct label', () => {
    const tree = renderer.create(
      <WordDefinition data={word} abbreviations={abbreviations} crosslinks={crosslinks} />,
    )
    const { root } = tree

    expect(root.findByType('h1').children).toEqual(['Þrályndi'])
  })
})
