import React from 'react';
import Head from 'next/head';

export const ContactUs = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact Us | Highworth Physiotherapy Clinic</title>
      </Head>
      <main>
        <h1>CONTACT US</h1>
        <p>
          If you wish to book an appointment, please call us on <a href="tel:+441793763814">01793 763814</a>.
        </p>

        <h2>How to find us</h2>
        <p>
          We are located at 13 High Street, Highworth, just down from the main square, located between the King and
          Queen Pub and the Old Bakery.
        </p>
        <iframe
          title="Map to Highworth Physiotherapy Clinic"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880.7373636506683!2d-1.7109584980516754!3d51.63042301069111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487148625caf79a5%3A0xfd8b60c3a023fce!2sHighworth%20Physiotherapy%20Clinic!5e1!3m2!1sen!2suk!4v1619650580444!5m2!1sen!2suk"
          allowFullScreen
          loading="lazy"
        />

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
