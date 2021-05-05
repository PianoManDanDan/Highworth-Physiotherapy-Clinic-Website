import React from 'react';
import { getPage } from 'next-page-tester';

describe('FAQ Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/faq',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
