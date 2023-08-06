import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { matchesSchema } from 'jafningjar'
import Index, { getStaticProps } from 'pages/index'
import { getAlphabet } from 'lib/services/dictionary'

describe('Index page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Index letters={getAlphabet()} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Index letters={getAlphabet()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Index page: data fetching', () => {
  test('getStaticProps works', async () => {
    const expected = {
      props: {
        letters: [],
      },
    }

    const result = await getStaticProps()

    expect(matchesSchema(result, expected)).toBeTruthy()
  })
})
