import { NavbarProps } from '../subcomponents/Navbar/src';

export type telephoneProps = {
	text: string;
	href: string;
};

export type BannerProps = {
	name: string;
	address: string;
	telephone: telephoneProps;
	navbarLinks: NavbarProps;
};
