import { createRenderer, renderToDOM } from '../../../tests/helpers/react';
import ContentArea from './index';

describe('ContentArea component', () => {
  test('Does not crash', () => {
    renderToDOM(
      <ContentArea>
        <p>Content</p>
      </ContentArea>,
    );
  });

  test('Matches snapshot', () => {
    const tree = createRenderer(
      <ContentArea>
        <p>Content</p>
      </ContentArea>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
