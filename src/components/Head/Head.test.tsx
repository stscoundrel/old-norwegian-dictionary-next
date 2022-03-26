import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Head from './index'

describe('Head component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Head />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Head />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
