import React from 'react';
import { getPage } from 'next-page-tester';

describe('Facilities Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/facilities',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
