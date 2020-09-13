import React from 'react';
import { PageSubHeading, PageSubHeadingProps } from '../src';

export default {
	title: 'Page Subheading',
	component: PageSubHeading,
};

export const Story = (args: PageSubHeadingProps) => {
	return <PageSubHeading {...args} />;
};
Story.args = {
	text: 'Subheading',
};
