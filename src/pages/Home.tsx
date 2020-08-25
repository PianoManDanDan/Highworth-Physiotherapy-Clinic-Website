import React from 'react';
import { PageHeading } from '../components/PageHeading/src';
import { PageSubHeading } from '../components/PageSubHeading/src';

export const Home: React.FC<{}> = () => {
	document.title = 'Highworth Physiotherapy Clinic';
	return (
		<div className="page">
			<div className="page-home">
				<div className="app-content-container">
					{/* TODO: Add images */}
					<PageHeading heading="Home" />
					<div className="page-content">
						<div>
							<p>
								Highworth Physiotherapy Clinic is a private physiotherapy and
								sports injury clinic conveniently located on the high street in
								the market town of Highworth, north east of Swindon. If you
								think we may be able to help you, the fastest way to make an
								appointment or contact us is to give us a ring. You do not need
								a doctor&apos;s referral unless it is required by your insurance
								company. Two of the physiotherapists at the clinic are also
								trained to treat animals but if you wish us to treat your pet
								then your vet must agree this in advance.
							</p>
							<p>
								Physiotherapy is the treatment of a wide variety of injuries and
								conditions using a range of manual techniques, advice, exercise
								and electrotherapy. When appropriate, a lot of time is spent
								teaching the patient self help exercises so that they can manage
								their own condition. All the physiotherapists at the clinic are
								experienced Chartered Physiotherapists who treat sports
								injuries, back pain, neck pain, arthritis, aches, strains and
								pains. We are committed to a high level of clinical expertise
								and customer satisfaction.
							</p>
							<p>
								Highworth Physiotherapy clinic was started in 1989 by Sonya
								Nightingale. It expanded and moved to its current location in a
								grade II listed building in the High Street of Highworth in
								2003. It is conveniently situated between a pub and a bakery for
								after treatment refreshments! We have three fully equipped
								treatment rooms, including one on the ground floor for patients
								unable to use the stairs.
							</p>
						</div>

						<div>
							<PageSubHeading text="What to expect from your treatment" />
							<p>
								We usually allow 45 minutes for your initial assessment, and 30
								minutes for any follow up treatments. However these times may
								vary depending on the condition being treated, and this time
								also includes time to write up your notes.
							</p>
							<p>
								{/* TODO: Reword */}
								At the assessment your physiotherapist will ask you questions
								about your condition and general health. They will carry out an
								examination which includes some treatment in order to assess how
								you respond to treatment as some people respond better than
								others. Your physiotherapist will then agree a treatment plan
								with you and, depending on the physiotherapists findings, they
								may recommend further treatments. You will also be given advice
								on self management of your condition and may be given exercises
								to carry out yourself at home.
							</p>
							<p>
								It is best to wear loose fitting clothing for your treatments
								and your physiotherapist may require you to remove some clothing
								to assist in the assessment and treatment.
							</p>
							<p>
								Your physiotherapy treatment like any other medical treatments
								is confidential. No information about you will be divulged to
								anyone else except your GP or consultant, without your prior
								written permission.
							</p>
						</div>

						<div className="insurance">
							{/* TODO: Reword */}
							We work with several insurance providers. If you would like to
							take advantage of this, please check with your insurance provider
							to see if we are an approved provider.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
