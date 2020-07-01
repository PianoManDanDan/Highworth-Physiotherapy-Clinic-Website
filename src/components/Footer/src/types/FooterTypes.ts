export type AffiliateLink = {
	name: string;
	href: string;
	abbrTitle?: string;
};

export type FooterProps = {
	affiliateLinks: AffiliateLink[];
};
