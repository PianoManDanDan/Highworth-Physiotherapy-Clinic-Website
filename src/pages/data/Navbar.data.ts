import {
	NavbarProps,
	NavbarLink,
} from '../../components/Banner/src/subcomponents/Navbar/src';

const navbarLinks: NavbarLink[] = [
	{
		text: 'Home',
		href: '/',
	},
	{
		text: 'People',
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
