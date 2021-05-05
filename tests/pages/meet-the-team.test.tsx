import React from 'react';
import { getPage } from 'next-page-tester';

describe('MeetTheTeam Page', () => {
  test('matches the snapshot', async () => {
    const { render } = await getPage({
      route: '/meet-the-team',
    });

    const page = render();

    expect(page).toMatchSnapshot();
  });
});
