import React from 'react';
import { PageHeading } from '../components/PageHeading/src';
import { PageSubHeading } from '../components/PageSubHeading/src';

export const Physiotherapy: React.FC<{}> = () => {
	document.title = 'Physiotherapy | Highworth Physiotherapy Clinic';
	return (
		<div className="page-physiotherapy">
			{/* TODO: Add images */}
			<div className="app-content-container">
				<PageHeading heading="About Physiotherapy" />

				<div className="page-content">
					<div>
						<PageSubHeading text="Physiotherapy" />
						<div>
							Physiotherapy is the treatment of a wide variety of injuries and
							conditions using a range of manual techniques, manipulation,
							massage, advice, exercise and electrotherapy. When appropriate, a
							lot of time is spent teaching the patient self help exercises so
							that they can manage their own condition. All the physiotherapists
							at this practice are experienced Chartered Physiotherapists who
							treat sports injuries, back pain, neck pain, arthritis, aches,
							strains and pains. We are committed to a high level of clinical
							expertise and customer satisfaction.
						</div>
						<div>
							All our physiotherapists undertake at least 25 hours post graduate
							education every year.
						</div>
						<div>
							After qualification many physiotherapists go on to train in
							specialist areas including acupuncture, pilates and animal
							therapy. As we have several physiotherapists at the clinic, with a
							range of different specialisms, we may transfer you to a different
							physiotherapist within the clinic whose skills, we believe, will
							more successfully treat your condition.
						</div>
					</div>

					<div>
						<PageSubHeading text="Common conditions treated by physiotherapy include:" />
						<div>
							<PageSubHeading text="Tennis Elbow" />
							<div>
								A common term used to describe pains in the forearm and elbow
								area. However this condition is not restricted to tennis players
								but can affect golfers, gardeners and factory workers who strain
								their arm. The condition can be treated with manual therapy,
								ultrasound and often the use of an arm brace can help prevent
								the condition returning.
							</div>
						</div>
						<div>
							<PageSubHeading text="Upper and Lower back pain" />
							<div>
								These can have a variety of causes from poor posture to whiplash
								and even uneven leg length. Most can be successfully treated
								with a combination of manual therapy, advice, postural
								correction and exercises. Lumbar rolls, seat wedges and neck
								pillows can also help maintain improvement as can workplace
								assessments.
							</div>
						</div>
						<div>
							<PageSubHeading text="Headaches" />
							<div>
								Headaches are often caused by problems in the top part of the
								neck at the base of the skull. Headaches with this cause can
								therefore be treated as a neck problem and do respond well to
								manual therapy and exercises.
							</div>
						</div>
						<div>
							<PageSubHeading text="Strains" />
							<div>
								Muscle and ligament strains are very common and not just in
								sports men and women. They can be extremely painful and
								debilitating but fortunately do respond very well to
								electrotherapy such as ultrasound or laser treatment. Graded
								exercises and advice on how quickly to return to your normal
								activity are also very important.
							</div>
						</div>
						<div>
							<PageSubHeading text="Arthritis" />
							<div>
								Although the actual arthritis cannot be treated by
								physiotherapy, the pain, swelling and muscle weakness can.
								Physiotherapy can therefore make life much more comfortable and
								even delay or prevent the need for surgery.
							</div>
						</div>
						<div>
							<PageSubHeading text="Sports Injuries" />
							<div>
								Often injuries occur during training and whilst rest would be
								the first choice treatment upcoming events e.g. a marathon or a
								football tournament don&apos;t allow this. Physiotherapy can
								speed up the healing process and specific training advice will
								ensure training can continue without causing further injury.
								RICE is the recognised first intervention, meaning rest, ice,
								compression and elevation. Physiotherapists are experts in the
								initial treatment and follow up rehabilitation of these types of
								injuries.
							</div>
						</div>
					</div>

					<div>
						<PageSubHeading text="Homeopathy" />
						<div>
							Homeopathy is a safe, complementary medicine suitable for all
							ages. It can be used to treat stress and anxiety, migraines,
							eczema, childhood illness and behaviour problems.
						</div>
					</div>

					<div>
						<PageSubHeading text="Steroid Injection Therapy" />
						<div>
							<PageSubHeading text="Why would I need a local Steroid Injection?" />
							<div>
								Steroid Injections can be given to treat inflammation or pain.
								They are usually injected into the joint of the surrounding soft
								tissue. Sometimes they are used alone, other times they will be
								followed by physiotherapy. Reducing pain and swelling with a
								steroid injection can help make the physiotherapy work better.
								The steroid injection is usually combined with local
								anaesthetic. Local anaesthetic is used to increase the volume of
								the injection and help us know that the injection is in the
								right place.
							</div>
						</div>
						<div>
							<PageSubHeading text="How long will the Steroid Injection take to work and how long will it last?" />
							<div>
								This varies between different people, but usually improvement
								starts after one or two days. Sometimes it can take up to 6
								weeks for the benefits to take effect. The benefit usually lasts
								from a few weeks to several months.
							</div>
						</div>
						<div>
							<PageSubHeading text="Do I need to do anything after the injection?" />
							<div>
								After the injection it is advisable to rest the injected limb
								for the first 3 to 7 days. Try to avoid activities that make the
								symptoms worse. Limit walking and don&apos;t participate in
								sports.
							</div>
						</div>
					</div>

					<div>
						<PageSubHeading text="Orthotics" />
						<div>
							Excessive pronation of the foot (flat feet) causes the arch of the
							foot to flatten and can result in heel, knee, hip and back pain.
							It is very common and in most cases can be treated by a
							physiotherapist with supportive insoles. The insoles support the
							arch, realigning the lower limb correctly which alleviates the
							resulting pain. Incorrect foot posture and leg length
							discrepancies can also be corrected with appropriately positioned
							additional wedges. For more complicated conditions we can refer
							you to a specialist podiatrist.
						</div>
						<div className="orthotics__example-images">
							The sequence of pictures below show: 1. Normal foot; 2. Flat foot
							with collapsed arch; 3. Over arched foot; 4. Patient with excess
							pronation commonly known as flat feet.
							{/* Add images */}
						</div>
					</div>

					<div>
						<PageSubHeading text="Glossary of initials" />
						<div>
							<PageSubHeading text="MCSP - Member of the Chartered Society of Physiotherapists" />
							To become CSP registered you must have completed a recognised
							degree course in physiotherapy. Membership of the CSP also gives
							the physiotherapist essential insurance to practice. Your
							physiotherapist MUST be a member of the CSP to practice
							physiotherapy.
						</div>
						<div>
							<PageSubHeading text="HCPC - Health and Care Professions Council" />
							The Health and Care Professions Council controls a number of
							health professions and police the quality of treatments the
							professions give. Your physiotherapist MUST be a member of the
							HCPC to practice physiotherapy.
						</div>
						<div>
							<PageSubHeading text="AACP - Acupuncture Association of Chartered Physiotherapists" />
							Some physiotherapists use acupuncture as a treatment for pain
							relief. They will have had post graduate training in acupuncture.
						</div>
						<div>
							<PageSubHeading text="ACPAT - Association of Chartered Physiotherapists in Animal Therapy" />
							Some physiotherapists have undertaken further training to become
							category A members of ACPAT. These physiotherapists are allowed to
							treat animals referred by a vet. These are usually horses and dogs
							but can include cows, sheep and pigs or indeed any mammal.
						</div>
						<div>
							<PageSubHeading text="RAMP - Register of Animal Musculoskeletal Practitioners" />
							RAMP is a voluntary register of animal musculoskeletal
							professionals (including Physiotherapists, Chiropractors and
							Osteopaths) with a goal of maintaining a gold standard in the
							musculoskeletal treatment of animals. The register is designed to
							provide vets and owners with a list of professionals that have
							shown competency in their field.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
