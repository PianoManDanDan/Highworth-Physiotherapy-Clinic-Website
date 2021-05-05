import React from 'react';
import { render } from '@testing-library/react';
import { TeamMember } from '../../../components/TeamMember';
import { Person } from '../../../types';

describe('TeamMember Component snapshot test', () => {
  describe('When passed only required props', () => {
    test('it renders correctly, with the Person\'s name, image and bio', () => {
      // Arrange
      const teamMemberData: Person = {
        name: 'Team member name test',
        image: {
          src: '/Team member image src test',
          altText: 'Team member image alt test',
        },
        bio: ['Team member bio paragraph 1 test', 'Team member bio paragraph 2 test'],
      };
      
      const { asFragment } = render(
        <TeamMember {...teamMemberData} />
      );
  
      // Act
      const renderedTeamMember = asFragment();
  
      // Assert
      expect(renderedTeamMember).toMatchSnapshot();
    });
  });
  describe('When passed all props', () => {
    test('it renders correctly, with the Person\'s name, image, qualification, year of qualification, specialities and bio', () => {
      // Arrange
      const teamMemberData: Person = {
        name: 'Team member name test',
        image: {
          src: '/Team member image src test',
          altText: 'Team member image alt test',
        },
        qualification: 'Team member qualification test',
        yearQualified: 1234,
        specialities: ['Team member specialities 1 test', 'Team member specialities 2 test'],
        bio: ['Team member bio paragraph 1 test', 'Team member bio paragraph 2 test'],
      };

      const { asFragment } = render(
        <TeamMember {...teamMemberData} />
      );

      // Act
      const renderedTeamMember = asFragment();

      // Assert
      expect(renderedTeamMember).toMatchSnapshot();
    });
  });
});
