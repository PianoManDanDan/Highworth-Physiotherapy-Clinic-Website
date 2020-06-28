export type ProfileProps = {
	image: {
		src: string;
		altText: string;
	};
	name: string;
	qualification?: string;
	yearQualified?: number;
	specialities?: string[];
	bio: string;
};
