import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import Footer from 'components/Footer'

const letters = [
  {
    slug: 'a',
    letter: 'A',
  },
  {
    slug: 'b',
    letter: 'B',
  },
]

describe('Footer component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Footer letters={letters}/>)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Footer letters={letters} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
