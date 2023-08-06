import ReactDOM from 'react-dom/client'
import renderer from 'react-test-renderer'
import { DictionarySource } from 'scandinavian-dictionary-crosslinker'
import Word, { getStaticProps, getStaticPaths } from 'pages/word/[word]'
import { getAlphabet } from 'lib/services/dictionary'

const mockHandler = jest.fn()

/**
 * Mock router
 */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: undefined,
      defaultLocale: undefined,
      asPath: '/test',
      back: mockHandler,
    }
  },
}))

describe('Word page: render & usage', () => {
  const word = {
    word: 'þrályndi',
    partOfSpeech: 'n',
    definition: 'þrályndi, n. d. s.; hélt honum aptr fornsiðvenja ok mykyt þrályndi Barl. 12524;Fgrdl. 5816.',
    slug: 'thralyndi-2',
  }

  const abbreviations = [
    {
      abbreviation: 'f.',
      explanation: 'Feminin.',
    },
    {
      abbreviation: 'L.',
      explanation: 'Linje.',
    },
    {
      abbreviation: 'm.',
      explanation: 'Masculin.',
    },
  ]

  const crosslinks = [
    {
      url: 'https://old-icelandic.vercel.app/word/fadir',
      source: DictionarySource.OldIcelandic,
    },
    {
      url: 'https://old-swedish-dictionary.vercel.app/word/fadhir',
      source: DictionarySource.OldSwedish,
    },
  ]

  test('Does not crash', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(
      <Word
        entry={word}
        letters={getAlphabet()}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    )
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(
      <Word
        entry={word}
        letters={getAlphabet()}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Returns null if entry is unavailable', () => {
    const tree = renderer.create(
      <Word
        entry={null}
        letters={getAlphabet()}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    ).toJSON()
    expect(tree).toBeNull()
  })

  test('Back button works', async () => {
    const tree = renderer.create(
      <Word
        entry={word}
        letters={getAlphabet()}
        abbreviations={abbreviations}
        crosslinks={crosslinks}
      />,
    )

    // Click back btn.
    await renderer.act(async () => {
      expect(mockHandler).not.toHaveBeenCalled()
      await tree.root.findByProps({ text: 'Back' }).props.action()

      // Assert mockrouter received a push.
      expect(mockHandler).toHaveBeenCalled()
      expect(mockHandler.mock.calls.length).toBe(1);
    })
  })
})

describe('Word page: data fetching', () => {
  test('getStaticPaths works', async () => {
    const expected = {
      paths: [],
      fallback: 'blocking',
    }

    const result = await getStaticPaths()

    expect(result).toMatchObject(expected)
  })

  test('getStaticProps works', async () => {
    const expected = {
      props: {
        entry: {
          word: 'þrályndi',
          partOfSpeech: 'n',
          definition: 'þrályndi, n. d. s.; hélt honum aptr fornsiðvenja ok mykyt þrályndi Barl. 12524;Fgrdl. 5816.',
          slug: 'thralyndi-2',
        },
        abbreviations: [
          {
            abbreviation: 'n.',
            explanation: 'Neutrum.',
          },
          {
            abbreviation: 's.',
            explanation: 'substantiv.',
          },
        ],
        crosslinks: [],
        letters: getAlphabet(),
      },
    }

    const result = await getStaticProps({ params: { word: 'thralyndi-2' } })

    expect(result).toEqual(expected)
  })

  test('getStaticProps returns 404 redirect for unkown words', async () => {
    const expected = {
      props: {},
      notFound: true,
    }

    const result = await getStaticProps({ params: { word: 'loremipsum' } })

    expect(result).toEqual(expected)
  })
})
