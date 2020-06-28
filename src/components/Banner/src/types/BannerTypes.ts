import { NavbarProps } from '../subcomponents/Navbar/src';

export type BannerProps = {
	name: string;
	address: string;
	telephone: {
		text: string;
		href: string;
	};
	navbarLinks: NavbarProps;
};
