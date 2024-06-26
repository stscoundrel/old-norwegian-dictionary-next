import { capitalize, getOlderSpelling } from 'lib/utils/strings'

describe('String utils tests', () => {
  test('Capitalizes text', () => {
    expect(capitalize('ja nyt kun mä meen')).toBe('Ja nyt kun mä meen')
    expect(capitalize('MITÄÄN KADU EN')).toBe('Mitään kadu en')
  })

  test('Replaces with older forms', () => {
    expect(getOlderSpelling('völlr')).toBe('vǫllr')
    expect(getOlderSpelling('vollr')).toBe('vollr')
  })
})
