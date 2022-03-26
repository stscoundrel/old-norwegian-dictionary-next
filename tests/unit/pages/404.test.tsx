import ReactDOM from 'react-dom'
import Page404 from 'pages/404'
import renderer from 'react-test-renderer'

describe('404 page page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Page404/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Page404 />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
