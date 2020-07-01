import { FooterProps, AffiliateLink } from '../../components/Footer/src';

const affiliateList: AffiliateLink[] = [
	{
		name: 'CSP',
		href: 'https://www.csp.org.uk/',
		abbrTitle: 'Chartered Society of Physiotherapists',
	},
	{
		name: 'HCPC',
		href: 'https://www.hcpc-uk.org/',
		abbrTitle: 'Health and Care Professions Council',
	},
	{
		name: 'Physio First',
		href: 'https://www.physiofirst.org.uk/',
	},
	{
		name: 'AACP',
		href: 'https://www.aacp.org.uk/',
		abbrTitle: 'Acupuncture Association of Chartered Physiotherapists',
	},
	{
		name: 'ACPAT',
		href: 'https://www.acpat.org/',
		abbrTitle: 'Association of Chartered Physiotherapists in Animal Therapy',
	},
	{
		name: 'RAMP',
		href: 'https://www.rampregister.org/',
		abbrTitle: 'Register of Animal Musculoskeletal Practitioners',
	},
	{
		name: 'Highworth Business Group',
		href: 'http://www.highworth.co.uk/',
	},
];

export const footerData: FooterProps = {
	affiliateLinks: affiliateList,
};
