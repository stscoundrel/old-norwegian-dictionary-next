import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import LetterLink from './index';

describe('LetterLink component', () => {
  test('Does not crash', () => {
    renderToDOM(<LetterLink letter={{ letter: 'a', slug: 'a' }} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <LetterLink letter={{ letter: 'a', slug: 'a' }} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
