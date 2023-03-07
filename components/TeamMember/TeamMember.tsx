import { ImageWithFallback } from 'components/ImageWithFallback';
import { Person } from 'types';
import styles from './TeamMember.module.scss';
import teamMemberFallback from 'public/assets/people/placeholder.png';

export const TeamMember: React.FC<Person> = ({
  name,
  image,
  bio,
  qualification,
  yearQualified,
  specialities,
}) => {
  image.height = 160;
  image.width = 160;

  return (
    <div className={styles['team-member']}>
      <div className={styles['team-member__picture']}>
        <ImageWithFallback
          src={image.src}
          alt={image.alt}
          height={image.width}
          width={image.height}
          fallbackSrc={teamMemberFallback}
        />
      </div>
      <div>
        <h2>{name} {qualification || null}</h2>
        {
          yearQualified
          ? <p>Qualified {yearQualified}</p>
          : null
        }
        {
          specialities && specialities.length !== 0
          ? <p>Speciality: {specialities.join(', ')}</p>
          : null
        }
        {bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </div>
  );
};

export default TeamMember;
