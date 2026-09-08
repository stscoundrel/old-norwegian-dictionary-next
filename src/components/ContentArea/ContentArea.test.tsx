import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import ContentArea from './index'

describe('ContentArea component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(<ContentArea><p>Content</p></ContentArea>)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<ContentArea><p>Content</p></ContentArea>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
