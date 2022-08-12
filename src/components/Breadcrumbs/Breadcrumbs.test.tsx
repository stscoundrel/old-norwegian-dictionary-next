import { ContentType } from 'lib/models/content-types'
import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Breadcrumbs from './index'

describe('Breadcrumbs component', () => {
  const word = {
    word: 'úfrjáls',
    partOfSpeech: 'adj',
    definition: 'úfrjáls, adj.  1)  ufri, underkastet andresHerredømme som en Træl; oft verðr yðrúdrjúg hin úfrjálsa ættin til dreng-skaparins Flat. I, 33521.  2)  som manuhindret af Heftelse eller Paatale kanbeholde og benytte; om Jordegods: DN.II, 263. 252.',
    slug: 'ufrjals',
  }

  test('Default page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs type={ContentType.Page} content={null} />)
  })

  test('Default page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs type={ContentType.Page} content={null} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Default page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs type={ContentType.Page} content={null} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(1)
  })

  test('Letter page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs type={ContentType.Letter} content={[word]} />)
  })

  test('Letter page: matches snapshot', () => {
    const tree = renderer.create(
      <Breadcrumbs type={ContentType.Letter} content={[word]} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Letter page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs type={ContentType.Letter} content={[word]} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(2)
  })

  test('Word page: does not crach', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Breadcrumbs type={ContentType.Word} content={word} />)
  })

  test('Word page: matches snapshot', () => {
    const tree = renderer.create(<Breadcrumbs type={ContentType.Word} content={word} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Word page: renders correct amount of breadcrumbs', () => {
    const tree = renderer.create(<Breadcrumbs type={ContentType.Word} content={word} />)
    const { root } = tree

    expect(root.findAllByType('a').length).toEqual(3)
  })
})
