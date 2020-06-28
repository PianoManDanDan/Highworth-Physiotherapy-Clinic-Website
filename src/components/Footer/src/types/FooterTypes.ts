export type AffiliateLink = {
	name: string;
	href: string;
	abbrTitle?: string;
};

export type FooterProps = {
	insuranceProviders: string[];
	affiliateLinks: AffiliateLink[];
};
