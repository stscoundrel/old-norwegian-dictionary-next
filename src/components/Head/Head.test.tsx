import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import Head from 'components/Head';
import { getByLetter, getWord } from 'lib/services/dictionary';
import { ContentType } from 'lib/models/content-types';

describe('Head component', () => {
  describe('Letter head', () => {
    test('Does not crash', () => {
      const aWords = getByLetter('a').slice(0, 10);
      renderToDOM(
        <Head
          content={aWords}
          type={ContentType.Letter}
          letter={{ letter: 'A', slug: 'a' }}
        />,
      );
    });

    test('Matches snapshot', () => {
      const aWords = getByLetter('a').slice(0, 10);
      const tree = createRenderer(
        <Head
          content={aWords}
          type={ContentType.Letter}
          letter={{ letter: 'A', slug: 'a' }}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Word head', () => {
    const word = getWord('skilja');

    test('Does not crash', () => {
      renderToDOM(
        <Head content={word} type={ContentType.Word} letter={null} />,
      );
    });

    test('Matches snapshot', () => {
      const tree = createRenderer(
        <Head content={word} type={ContentType.Word} letter={null} />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
