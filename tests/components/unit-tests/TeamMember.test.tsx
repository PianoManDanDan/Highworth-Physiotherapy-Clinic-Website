import { render, screen } from '@testing-library/react';
import { TeamMember } from 'components/TeamMember';
import { Person } from 'types';

describe('TeamMember Component', () => {
  let teamMemberContent: Person;
  beforeEach(() => {
    teamMemberContent = {
      name: 'Person name test',
      image: {
        src: '/person-image-src-test',
        alt: 'Person image alt test',
      },
      bio: ['Person bio test'],
    }
  });
  describe('When passed only essential props', () => {
    test('the TeamMember component renders a name, image and bio', () => {
      // Arrange
      render(
        <TeamMember {...teamMemberContent} />
      );
  
      // Assert
      expect(screen.getByAltText(teamMemberContent.image.alt)).toBeInTheDocument();
      expect(screen.getByRole('heading', {name: teamMemberContent.name})).toBeInTheDocument();
      teamMemberContent.bio.forEach((bioParagraph) => {
        expect(screen.getByText(bioParagraph)).toBeInTheDocument();
      });
    });
  });
  describe('When passed optional props', () => {
    test('the TeamMember component renders a name, image, bio, qualification, year qualified and any specialities', () => {
      // Arrange
      teamMemberContent.qualification = 'Person qualification test';
      teamMemberContent.yearQualified = 12345;
      teamMemberContent.specialities = ['Person speciality test'];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(screen.getByAltText(teamMemberContent.image.alt)).toBeInTheDocument();
      expect(screen.getByText(teamMemberContent.name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(teamMemberContent.qualification, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(`Qualified ${teamMemberContent.yearQualified}`)).toBeInTheDocument();
      teamMemberContent.specialities.forEach((speciality) => {
        expect(screen.getByText(speciality, { exact: false })).toBeInTheDocument();
      });
      teamMemberContent.bio.forEach((bioParagraph) => {
        expect(screen.getByText(bioParagraph)).toBeInTheDocument();
      });
    });
  });
  describe('When passed a bio prop of different lengths', () => {
    test('when passed a bio of length 1, it renders the bio with only 1 paragraph', () => {
      // Arrange
      teamMemberContent.bio = ['test bio 1'];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(teamMemberContent.bio).toHaveLength(1);
      expect(screen.getByText(teamMemberContent.bio[0])).toBeInTheDocument();
    });
    test('when passed a bio with multiple array values, it renders the bio correctly', () => {
      // Arrange
      teamMemberContent.bio = [
        'test bio 1',
        'test bio 2',
        'test bio 3',
        'test bio 4',
      ];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(teamMemberContent.bio).toHaveLength(4);
      teamMemberContent.bio.forEach((bioParagraph) => {
        expect(screen.getByText(bioParagraph)).toBeInTheDocument();
      });
    });
    test('When passed an empty bio array, it does not render any bio content', () => {
      // Arrange
      teamMemberContent.bio = [];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(teamMemberContent.bio).toHaveLength(0);
      expect(screen.queryByText('bio')).not.toBeInTheDocument();
    });
  });
  describe('When passed a specialities array of different lengths', () => {
    test('when passed a specialities array of length 1, it renders the single speciality', () => {
      // Arrange
      teamMemberContent.specialities = ['test speciality 1'];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(teamMemberContent.specialities).toHaveLength(1);
      expect(screen.getByText('Speciality:', { exact: false })).toBeInTheDocument();
      expect(screen.getByText(teamMemberContent.specialities[0], { exact: false })).toBeInTheDocument();
    });
    test('when passed a specialities array with multiple values, it renders all of the specialities', () => {
      // Arrange
      teamMemberContent.specialities = [
        'test speciality 1',
        'test speciality 2',
        'test speciality 3',
        'test speciality 4',
      ];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(teamMemberContent.specialities).toHaveLength(4);
      expect(screen.getByText('Speciality:', { exact: false })).toBeInTheDocument();
      teamMemberContent.specialities.forEach((speciality) => {
        expect(screen.getByText(speciality, { exact: false })).toBeInTheDocument();
      });
    });
    test('When passed an empty specialities array, it does not render any specialities', () => {
      // Arrange
      teamMemberContent.specialities = [];
      render(
        <TeamMember {...teamMemberContent} />
      );

      // Assert
      expect(teamMemberContent.specialities).toHaveLength(0);
      expect(screen.queryByText('Speciality:', {exact: false})).not.toBeInTheDocument();
    });
  });
});
