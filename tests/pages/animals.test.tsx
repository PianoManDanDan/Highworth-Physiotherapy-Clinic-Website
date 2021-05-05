import React from 'react';
import { getPage } from 'next-page-tester';

describe('Animals Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/animals',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
