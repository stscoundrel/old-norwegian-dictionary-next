import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import Layout from 'components/Layout';
import { getByLetter, getWord, getAlphabet } from 'lib/services/dictionary';
import { ContentType } from 'lib/models/content-types';

describe('Layout component', () => {
  describe('Letter layout', () => {
    const aWords = getByLetter('a').slice(0, 10);

    test('Does not crash', () => {
      renderToDOM(
        <Layout
          content={aWords}
          type={ContentType.Letter}
          letters={getAlphabet()}
          letter={{ letter: 'a', slug: 'a' }}
          noSearch={false}
        />,
      );
    });

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Layout
          content={aWords}
          type={ContentType.Letter}
          letters={getAlphabet()}
          letter={{ letter: 'a', slug: 'a' }}
          noSearch={false}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Word layout', () => {
    const word = getWord('skilja');

    test('Does not crash', () => {
      renderToDOM(
        <Layout
          content={word}
          type={ContentType.Word}
          letters={getAlphabet()}
          letter={{ letter: 'a', slug: 'a' }}
          noSearch={false}
        />,
      );
    });

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Layout
          content={word}
          type={ContentType.Word}
          letters={getAlphabet()}
          letter={{ letter: 'a', slug: 'a' }}
          noSearch={false}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
