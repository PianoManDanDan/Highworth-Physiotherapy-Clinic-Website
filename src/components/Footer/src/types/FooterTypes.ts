export type RegulatoryBodyLink = {
	name: string;
	href: string;
	abbrTitle?: string;
};

export type FooterProps = {
	regulatoryBodyLinks: RegulatoryBodyLink[];
};
