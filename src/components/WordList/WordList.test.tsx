import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { DictionaryEntry } from 'lib/models/dictionary'
import WordList from './index'

const words: DictionaryEntry[] = [
  {
    word: 'af-burðr',
    definition: 'm. (also spelt abb-), <i>odds, balance, bias, success</i> (cp. bera af, <i>to prevail</i>); kvað honum eigi annat vænna til afburðar, <i>in order to get the better of it,</i> Sd. 166; sá hann at engi varð afburðrinn, <i>they fought ‘aequo Marte,’</i> Sturl. ii. 74; hann ætlaði sér afburð, <i>he meant to keep the odds in his own hand,</i> Ísl. ii. 450; skal nú faraí haustvíking, ok vilda ek, at hon yrði eigi með minnum afburðum, <i>less glorious,</i> Orkn. 464.',
    slug: 'af-burdr',
    partOfSpeech: 's',
  },
  {
    word: 'af-búð',
    definition: 'f. <i>an ‘off-booth,’ side-booth, apartment,</i> Korm. 116.',

    slug: 'af-bud',
    partOfSpeech: 's',
  },
  {
    word: 'af-dalr',
    definition:
      'm. <i>an ‘off-dale,’ remote valley;</i> freq. in tales and rhymes of <i>hidden valleys,</i> esp. in pl., e. g. Hvað hét hundr karls er í afdölum bjó, in a nursery rhyme, K. Þ. K. 38, Fms. v. 183.',

    slug: 'af-dalr',
    partOfSpeech: 's',
  },
  {
    word: 'af-deilingr',
    definition:
      'm. <i>part, portion, share,</i> Bs. i. 881.',

    slug: 'af-deilingr',
    partOfSpeech: 's',
  },
  {
    word: 'af-dráttr',
    definition:
      'm. [draga af, <i>to detract</i>], <i>diminution, deduction,</i> Ann. 1358 (of <i>duties, fines</i>), Dipl. i. 7, Jm. 135 <i>= costs.</i>',
    slug: 'af-drattr',
    partOfSpeech: 's',
  },
]

describe('WordList component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<WordList words={words} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<WordList words={words} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders correct amount of words', () => {
    const tree = renderer.create(<WordList words={words} />)
    const { root } = tree

    expect(root.findAllByType('ul').length).toEqual(1)
    expect(root.findAllByType('li').length).toEqual(5)
  })
})
