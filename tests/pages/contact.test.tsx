import React from 'react';
import { getPage } from 'next-page-tester';

describe('ContactUs Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/contact',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
