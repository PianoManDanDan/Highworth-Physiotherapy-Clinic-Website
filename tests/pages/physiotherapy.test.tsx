import React from 'react';
import { getPage } from 'next-page-tester';

describe('Physiotherapy Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/physiotherapy',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
