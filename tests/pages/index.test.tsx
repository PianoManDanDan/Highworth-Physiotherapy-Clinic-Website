import React from 'react';
import { getPage } from 'next-page-tester';

describe('HomePage Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
