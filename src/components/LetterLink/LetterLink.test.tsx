import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import LetterLink from './index'

describe('LetterLink component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<LetterLink letter={{ letter: 'a', slug: 'a' }} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<LetterLink letter={{ letter: 'a', slug: 'a' }} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
