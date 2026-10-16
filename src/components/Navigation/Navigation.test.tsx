import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import { getAlphabet } from 'lib/services/dictionary';
import Navigation from './index';

const letters = getAlphabet();

describe('Navigation component', () => {
  test('Does not crash', () => {
    renderToDOM(<Navigation letters={letters} noSearch={false} />);
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <Navigation letters={letters} noSearch={false} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
