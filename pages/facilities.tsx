import Head from 'next/head';

export const Facilities = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Facilities | Highworth Physiotherapy Clinic</title>
      </Head>
      <main id="main-content">
        <h1>FACILITIES</h1>
        <p>
          We have three fully equipped treatment rooms including one on the ground floor for patients unable to use
          the stairs.
        </p>
        <p>
          For the convenience of our patients, the clinic also has a separate reception area, waiting room and toilet
          facilities. We have a small kitchen and can provide refreshments for patients if they are required. At the
          front of the clinic there is a small shop stocking common rehabilitation items such as: TENS machines; knee,
          elbow, thumb and wrist braces; Orthaheel insoles and wedges; orthopaedic pillows and glucosamine. We are
          also happy to order specialist braces for patients if required.
        </p>
        <p>
          Rehabilitation equipment available at the clinic includes: back swing, gym balls, Fitter exerciser, and
          wobble boards.
        </p>
        <p>
          Treatment equipment available includes: ultrasound, laser, megapulse, infra-red, interferential. The
          physiotherapists will use the most appropriate equipment for your treatment if they believe it is required.
        </p>
        <p>
          We also operate a free loan system for our patients where we will loan out equipment such as TENS machines,
          pillows, seat wedges, wobble boards and home traction kits for patients to try before they buy.
        </p>
      </main>
    </>
  );
}

export default Facilities;
