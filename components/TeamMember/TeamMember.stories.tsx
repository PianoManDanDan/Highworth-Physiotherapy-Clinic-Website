import { StoryObj, Meta } from '@storybook/react';
import { TeamMember } from 'components/TeamMember';
import { Person } from 'types/Person';

export default {
  component: TeamMember,
} as Meta;

const sharedProps: Partial<Person> = {
  name: 'John Smith',
  image: {
    src: 'https://picsum.photos/200',
    alt: 'team member',
  },
  bio: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sodales nisi. Nulla non ex at libero accumsan porttitor. Donec ultrices ullamcorper tortor ac dignissim. Donec rhoncus turpis nec lorem congue finibus. Donec euismod, diam ut sagittis euismod, magna justo mollis tortor, in mattis risus neque sit amet arcu. Mauris ut massa viverra est semper ullamcorper sit amet nec quam.',
    'Etiam aliquet et diam vitae cursus. Donec consectetur tristique lobortis. In vel rhoncus metus. Pellentesque et condimentum nulla. Quisque ut iaculis mauris. Nam id tellus mi. Aliquam placerat mauris eget risus malesuada ultricies. Ut eget mauris at nisl vulputate fermentum.',
    'Fusce dignissim viverra tellus, non suscipit tortor egestas sed. Praesent finibus gravida arcu. Nunc risus ligula, cursus vitae tellus quis, venenatis convallis turpis. Cras dignissim eleifend fermentum. Quisque aliquet lobortis efficitur. In lobortis ultricies odio quis auctor. Nunc iaculis nisi tempor malesuada vulputate. Integer rhoncus risus a velit interdum lacinia.',
    'Aenean at ullamcorper dui. Donec non dolor mauris. Duis ultrices lorem et nibh molestie, et facilisis lorem placerat. Sed sollicitudin, felis quis pulvinar eleifend, enim leo fermentum dolor, sed mattis nunc nisl vel urna. Curabitur arcu nibh, rhoncus quis suscipit vitae, faucibus volutpat mi. Nulla commodo est id risus auctor laoreet. Etiam id augue magna. Nulla nibh neque, lobortis quis nibh nec, commodo hendrerit lectus.'
  ],
}

export const physiotherapist: StoryObj<typeof TeamMember> = {
  args: {
    ...sharedProps,
    qualification: 'MCSP',
    yearQualified: 2005,
    specialities: [
      'Head',
      'Neck',
      'Spine',
      'Knee',
    ],
  }
};

export const frontDeskStaff: StoryObj<typeof TeamMember> = {
  args: sharedProps as Person,
  parameters: {
    controls: {
      exclude: ['qualification', 'yearQualified', 'specialities']
    },
  },
};
