import React from 'react';
import { getPage } from 'next-page-tester';

describe('PageNotFound Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/404',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
