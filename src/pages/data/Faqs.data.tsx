import React from 'react';
import { FaqQuestionProps } from '../../components/FaqQuestion/src';

export const faqData: FaqQuestionProps[] = [
	{
		question: 'How long will my appointment be?',
		answer: `An initial appointment will last 45 minutes with follow 
				up appointments being half an hour. Please note that this 
				includes the time taken by the physio to write up your notes.`,
	},
	{
		question: 'What do the initials mean?',
		answer: (
			<>
				Across the website, you may have seen several titles and initials used
				to describe governing bodies and qualifications. Listed below are the
				various initials used throughout the website. Links to each of the
				organisations are provided at the bottom of each page.
				<ul className="faq__initials-list">
					<li>
						<div className="faq__initials-list__initial">
							MCSP - Member of the Chartered Society of Physiotherapists
						</div>
						<div className="faq__initials-list__meaning">
							The CSP regulates and monitors physiotherapy practice in the UK.
							To be registered with the CSP, your physiotherapist must have
							completed a recognised degree course in physiotherapy. Membership
							to the CSP also gives your physiotherapy insurance to practice.
							CSP membership is compulsory for anyone practicing physiotherapy
							in the UK.
						</div>
					</li>
					<li>
						<div className="faq__initials-list__initial">
							HCPC - Health and Care Professions Council
						</div>
						<div className="faq__initials-list__meaning">
							The HCPC controls and monitors several different healthcare
							professions and police the quality of treatments offered. HCPC
							membership is compulsory for your physiotherapist to practice in
							the UK.
						</div>
					</li>
					<li>
						<div className="faq__initials-list__initial">
							ACPAT - Association of Chartered Physiotherapists in Animal
							Therapy
						</div>
						<div className="faq__initials-list__meaning">
							Some physiotherapists have taken on further study to treat animals
							referred to them by a vet. ACPAT is the organisation that
							regulates and certifies this training. Most commonly, ACPAT
							registered physiotherapists treat horses and dogs, but their
							training allows them to treat any mammals, including cats, cows,
							sheep and pigs.
						</div>
					</li>
					<li>
						<div className="faq__initials-list__initial">
							RAMP - Register of Animal Musculoskeletal Practitioners
						</div>
						<div className="faq__initials-list__meaning">
							RAMP is a voluntary register of animal musculoskeletal healthcare
							practitioners, including chiropractors, osteopaths and
							physiotherapists. It is aimed to help vets and the general public
							to choose qualified and competent practitioners for the treatment
							of their animals.
						</div>
					</li>
					<li>
						<div className="faq__initials-list__initial">
							AACP - Acupuncture Association of Chartered Physiotherapists
						</div>
						<div className="faq__initials-list__meaning">
							Some physiotherapists use acupuncture as a form of treatment for
							pain relief. In order to administer acupuncture, these
							physiotherapists will need to have undertaken postgraduate
							training in acupuncture. The AACP regulate and provide this
							training.
						</div>
					</li>
				</ul>
			</>
		),
	},
];
