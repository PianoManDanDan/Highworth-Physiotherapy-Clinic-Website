export type ProfileProps = {
	name: string;
	image?: {
		src: string;
		altText: string;
	};
	bio: string[];
	qualification?: string;
	yearQualified?: number;
	specialities?: string[];
};
