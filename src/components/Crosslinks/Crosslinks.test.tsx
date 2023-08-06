import renderer from 'react-test-renderer'
import { DictionarySource } from 'scandinavian-dictionary-crosslinker'
import { Crosslink } from 'lib/services/crosslinks'
import Crosslinks from './index'
import styles from './Crosslinks.module.scss'

describe('Crosslinks component', () => {
  const crosslinks: Crosslink[] = [
    {
      url: 'https://old-swedish-dictionary.vercel.app/word/fadhir',
      source: DictionarySource.OldSwedish,
    },
    {
      url: 'https://old-icelandic.vercel.app/word/fadir',
      source: DictionarySource.OldIcelandic,
    },
    {
      url: 'https://cleasby-vigfusson-dictionary.vercel.app/word/fadir',
      source: DictionarySource.OldNorse,
    },
  ]

  test('Matches the snapshot', () => {
    const tree = renderer.create(
      <Crosslinks crosslinks={crosslinks} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct amount of crosslinks', () => {
    const tree = renderer.create(<Crosslinks crosslinks={crosslinks} />)
    const { root } = tree

    expect(root.findAllByProps({ className: styles.listItem }).length).toEqual(3)
  })

  test('Has expected crosslink content', () => {
    const tree = renderer.create(<Crosslinks crosslinks={crosslinks} />)

    expect(JSON.stringify(tree)).toContain('Old Swedish - K.F Söderwall\'s Dictionary')
    expect(JSON.stringify(tree)).toContain('Old Norse - Cleasby & Vigfusson Dictionary')
    expect(JSON.stringify(tree)).toContain('Old Icelandic - Geir Zoëga\'s Dictionary')
  })
})
