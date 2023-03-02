import Head from 'next/head';

export const Faq = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>FAQ's | Highworth Physiotherapy Clinic</title>
      </Head>
      <main>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        
        <h2>How long will my appointment be?</h2>
        <p>
          An initial appointment will last 45 minutes with follow up appointments being half an hour. Please note that
          this includes the time taken by the physio to write up your notes.
        </p>

        <h2>What do all the acronyms mean?</h2>
        <p>
          Across the website, you may have seen several titles and acronyms used to describe governing bodies and
          qualifications. Listed below are the various initials used throughout the website. More information on each
          of the organisations can be found on their websites, linked at the bottom of each page.
        </p>
        <ul>
          <li>
            <h3>MCSP - Member of the Chartered Society of Physiotherapists</h3>
            <p>
              The CSP regulates and monitors physiotherapy practice in the UK. To be registered with the CSP, your
              physiotherapist must have completed a recognised degree course in physiotherapy. Membership to the
              CSP also gives your physiotherapy insurance to practice. CSP membership is compulsory for anyone
              practicing physiotherapy in the UK.
            </p>
          </li>
          <li>
            <h3>HCPC - Health and Care Professions Council</h3>
            <p>
              The HCPC controls and monitors several different healthcare professions and police the quality of
              treatments offered. HCPC membership is compulsory for your physiotherapist to practice in the UK.
            </p>
          </li>
          <li>
            <h3>ACPAT - Association of Chartered Physiotherapists in Animal Therapy</h3>
            <p>
              Some physiotherapists have taken on further study to treat animals referred to them by a vet. ACPAT is
              the organisation that regulates and certifies this training. Most commonly, ACPAT registered
              physiotherapists treat horses and dogs, but their training allows them to treat any mammals, including
              cats, cows, sheep and pigs.
            </p>
          </li>
          <li>
            <h3>RAMP - Register of Animal Musculoskeletal Practitioners</h3>
            <p>
              RAMP is a voluntary register of animal musculoskeletal healthcare practitioners, including 
              chiropractors, osteopaths and physiotherapists. It is aimed to help vets and the general public to
              choose qualified and competent practitioners for the treatment of their animals.
            </p>
          </li>
          <li>
            <h3>AACP - Acupuncture Association of Chartered Physiotherapists</h3>
            <p>
              Some physiotherapists use acupuncture as a form of treatment for pain relief. In order to administer
              acupuncture, these physiotherapists will need to have undertaken postgraduate training in acupuncture.
              The AACP regulate and provide this training.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Faq;
