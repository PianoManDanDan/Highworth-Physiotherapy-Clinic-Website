import {
	NavbarProps,
	NavbarLink,
} from '../../components/Banner/src/subcomponents/Navbar/src';

const navbarLinks: NavbarLink[] = [
	{
		// TODO: Remove Home Link? Not needed in modern web design
		text: 'Home',
		href: '/',
	},
	{
		text: ' Our Team',
		href: '/people',
	},
	{
		text: 'Facilities',
		href: '/facilities',
	},
	{
		text: 'Animals',
		href: '/animals',
	},
	{
		text: 'Physiotherapy',
		href: '/physiotherapy',
	},
	{
		text: 'Contact Us',
		href: '/contact',
	},
];

export const navbarData: NavbarProps = {
	links: navbarLinks,
};
