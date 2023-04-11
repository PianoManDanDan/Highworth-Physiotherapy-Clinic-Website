import { ImageWithFallback } from 'components/ImageWithFallback';
import { Person } from 'types/Person';
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
    <div className={styles.teamMember}>
      <div className={styles.teamMemberPicture}>
        <ImageWithFallback
          src={image.src}
          alt={image.alt}
          height={image.width}
          width={image.height}
          fallbackSrc={teamMemberFallback}
        />
      </div>
      <div className={styles.teamMemberBody}>
        <h2 className={styles.teamMemberName}>{name} {qualification || null}</h2>
        {
          yearQualified
          ? <p className={styles.yearQualified}>Qualified {yearQualified}</p>
          : null
        }
        {
          specialities && specialities.length !== 0
          ? <p className={styles.specialities}>Speciality: {specialities.join(', ')}</p>
          : null
        }
        {bio.map((paragraph, index) => <p key={index} className={styles.teamMemberBio}>{paragraph}</p>)}
      </div>
    </div>
  );
};

export default TeamMember;
