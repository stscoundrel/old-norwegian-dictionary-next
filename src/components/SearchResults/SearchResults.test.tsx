import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { SearchResult } from 'lib/services/search'
import SearchResults from './index'

const words: SearchResult[] = [
  {
    word: 'AF',
    definition: 'lorem ipsum',
    slug: 'af',
    partOfSpeech: 'dgdg',
    foundIn: [
      '<strong>4.</strong> denoting <i>distance;</i> þat er komit af þjóðleið, <i>out of the high road, remote,</i> Eg. 369; af þjóðbraut, Grág. ii. 264, i. 15; Otradalr (a farm) var mjök af vegi, <i>far out of the way,</i> Háv. 53.',
    ],
  },
  {
    word: 'AF',
    definition: 'lorem ipsum',
    slug: 'af',
    partOfSpeech: 'dgdg',
    foundIn: [
      '<strong>4.</strong> denoting <i>distance;</i> þat er komit af þjóðleið, <i>out of the high road, remote,</i> Eg. 369; af þjóðbraut, Grág. ii. 264, i. 15; Otradalr (a farm) var mjök af vegi, <i>far out of the way,</i> Háv. 53.',
    ],
  },
  {
    word: 'AF',
    definition: 'lorem ipsum',
    slug: 'af',
    partOfSpeech: 'dgdg',
    foundIn: [
      '<strong>4.</strong> denoting <i>distance;</i> þat er komit af þjóðleið, <i>out of the high road, remote,</i> Eg. 369; af þjóðbraut, Grág. ii. 264, i. 15; Otradalr (a farm) var mjök af vegi, <i>far out of the way,</i> Háv. 53.',
    ],
  },
]

describe('SearchResults component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<SearchResults words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<SearchResults words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
