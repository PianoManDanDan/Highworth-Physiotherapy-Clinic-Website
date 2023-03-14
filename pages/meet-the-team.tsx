import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Person } from 'types';
import { TeamMember } from 'components/TeamMember';
import data from 'data/people.json';

type MeetTheTeamProps = {
  people: Person[],
}

export const MeetTheTeam = ({ people }: MeetTheTeamProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Meet The Team | Highworth Physiotherapy Clinic</title>
      </Head>
      <main id="main-content">
        <h1>MEET THE TEAM</h1>
        {people.map((person) => 
          <TeamMember {...person} key={person.name} />
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  data.sort((person1, person2) => {
    return person1.order < person2.order ? -1
      : person1.order > person2.order ? 1
      : 0;
  });
  
  return {
    props: {
      people: data,
    }
  }
}

export default MeetTheTeam;
