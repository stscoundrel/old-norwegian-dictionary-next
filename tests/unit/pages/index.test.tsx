import { createRenderer, renderToDOM } from '../../helpers/react';
import { matchesSchema } from 'jafningjar';
import Index, { getStaticProps } from 'pages/index';
import { getAlphabet } from 'lib/services/dictionary';

describe('Index page', () => {
  test('Does not crash', () => {
    renderToDOM(<Index letters={getAlphabet()} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(<Index letters={getAlphabet()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Index page: data fetching', () => {
  test('getStaticProps works', async () => {
    const expected = {
      props: {
        letters: [],
      },
    };

    const result = await getStaticProps();

    expect(matchesSchema(result, expected)).toBeTruthy();
  });
});
