import { StoryObj, Meta } from '@storybook/react';
import { MeetTheTeam } from 'pages/meet-the-team';
import pageData from 'data/people.json'

export default { component: MeetTheTeam } as Meta;

export const meetTheTeam: StoryObj<typeof MeetTheTeam> = {
  render: () => {
    const props = { people: pageData };
    return (
      <MeetTheTeam {...props} />
    );
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
