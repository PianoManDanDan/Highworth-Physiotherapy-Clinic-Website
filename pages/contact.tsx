import Head from 'next/head';
import { Map } from 'components/Map';

export const ContactUs = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact Us | Highworth Physiotherapy Clinic</title>
      </Head>
      <main id="main-content">
        <h1>CONTACT US</h1>
        <p>
          If you wish to book an appointment, please call us on <a href="tel:+441793763814">01793 763814</a>.
        </p>

        <h2>How to find us</h2>
        <p>
          We are located at 13 High Street, Highworth, just down from the main square, located between the King and
          Queen Pub and the Old Bakery.
        </p>
        <Map />

        <h2>Opening hours</h2>
        <p>Our opening hours are</p>
        <table>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>9:00 - 17:00</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9:00 - 16:00</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>9:00 - 15:00</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>9:00 - 16:30</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9:00 - 16:00</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default ContactUs;
