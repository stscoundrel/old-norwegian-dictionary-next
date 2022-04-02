import React from 'react'
import renderer from 'react-test-renderer'
import Abbreviations from './index'

describe('Abbreviations component', () => {
  const abbreviations = [
    {
      abbreviation: 'adj.',
      explanation: 'Adjectiv.',
    },
    {
      abbreviation: 'f.',
      explanation: 'Feminin.',
    },
  ]

  test('Matches the snapshot', () => {
    const tree = renderer.create(
      <Abbreviations abbreviations={abbreviations} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
