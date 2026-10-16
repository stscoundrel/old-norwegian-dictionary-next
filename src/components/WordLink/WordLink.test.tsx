import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import WordLink from './index';

const word = {
  word: 'af-burðr',
  slug: 'af-burdr',
};

describe('WordLink component', () => {
  test('Does not crash', () => {
    renderToDOM(<WordLink data={word} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(<WordLink data={word} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Has correct label', () => {
    const tree = createRenderer(<WordLink data={word} />);
    const { root } = tree;

    expect(root.findByType('a').children).toEqual([word.word]);
  });
});
