import ReactDOM from 'react-dom'
import Index, { getStaticProps } from 'pages/index'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'
import { matchesSchema } from 'jafningjar'

describe('Index page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Index letters={getAlphabet()} />, div)
    ReactDOM.unmountComponentAtNode(div)
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
