import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { getAlphabet } from 'lib/services/dictionary'
import Navigation from './index'

const letters = getAlphabet()

describe('Navigation component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<Navigation letters={letters} noSearch={false} />)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Navigation letters={letters} noSearch={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
