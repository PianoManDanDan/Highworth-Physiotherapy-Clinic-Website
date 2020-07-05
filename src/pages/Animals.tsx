import React from 'react';
import { PageHeading } from '../components/PageHeading/src';
import { PageSubHeading } from '../components/PageSubHeading/src';

export const Animals: React.FC<{}> = () => {
	document.title = 'Animals | Highworth Physiotherapy Clinic';
	return (
		<div className="page-animals">
			<div className="app-content-container">
				{/* TODO: Add images */}
				<PageHeading heading="Animals" />
				{/* TODO: Add page-content className to other pages */}
				<div className="page-content">
					<div>
						Animals also benefit from physiotherapy when they are suffering from
						muscular skeletal or neurological problems. This could be following
						a road traffic accident, surgery or other injury. The basic anatomy
						and physiology of animals is very similar to that of humans and many
						of the techniques and equipment used is the same. There are
						differences, but not as many as you may think!
					</div>
					<div>
						The most common animals treated are dogs, cats and horses, usually
						for &lsquo;sporting injuries&rsquo; or following surgery, road
						traffic accidents or for chronic pain from degenerative joint
						disease. However even cows have been successfully treated after they
						have injured themselves.
					</div>
					<div>
						There are around 300 physiotherapists in the UK who are ACPAT
						members (Association of Chartered Physiotherapists in Animal
						Therapy) and are qualified to treat animals. Currently two of us at
						Highworth Physiotherapy Clinic are members. Both are also registered
						with RAMP (The Register of Animal Musculoskeletal Practitioners)
						which monitors industry standards and acts as a voluntary regulator.
						Many animal insurance policies also include cover for physiotherapy
						treatment, although you should check before making an appointment.
					</div>

					<PageSubHeading text="The Veterinary Surgeons Act 1966" />
					<div>
						The Veterinary Surgeons act of 1966 states that only a veterinary
						surgeon, or someone authorised by one, can treat an animal. It is
						therefore illegal for a physiotherapist to treat an animal without
						prior consent from a vet. Most of the vets in this area know us and
						are more than happy to refer your pet to us if they believe
						physiotherapy is the appropriate course of treatment.
					</div>
				</div>
			</div>
		</div>
	);
};
