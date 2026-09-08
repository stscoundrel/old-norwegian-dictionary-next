import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Head from 'components/Head'
import { getByLetter, getWord } from 'lib/services/dictionary'
import { ContentType } from 'lib/models/content-types'

describe('Head component', () => {
  describe('Letter head', () => {
    test('Does not crash', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Head content={aWords} type={ContentType.Letter} letter={{ letter: 'A', slug: 'a' }} />)
    })

    test('Matches snapshot', () => {
      const aWords = getByLetter('a').slice(0, 10)
      const tree = renderer.create(<Head content={aWords} type={ContentType.Letter} letter={{ letter: 'A', slug: 'a' }} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Word head', () => {
    const word = getWord('skilja')

    test('Does not crash', () => {
      const div = document.createElement('div')
      const root = ReactDOM.createRoot(div)
      root.render(<Head content={word} type={ContentType.Word} letter={null} />)
    })

    test('Matches snapshot', () => {
      const tree = renderer.create(
        <Head content={word} type={ContentType.Word} letter={null} />,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
