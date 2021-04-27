import React from 'react';
import Image from 'next/image';
import { Person } from '../../types';
import styles from './TeamMember.module.scss';

export const TeamMember: React.FC<Person> = ({
  name,
  image,
  bio,
  qualification,
  yearQualified,
  specialities,
}) => {
  return (
    <div>
      <div>
        <Image
          src={image.src}
          alt={image.altText}
          height={160}
          width={160}
          layout='intrinsic'
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
}

export default TeamMember;