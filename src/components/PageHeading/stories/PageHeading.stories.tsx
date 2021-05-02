import React from 'react';
import { PageHeading, PageHeadingProps } from '../src';

export default {
	title: 'Page Heading',
	component: PageHeading,
};

export const Story = (args: PageHeadingProps) => {
	return <PageHeading {...args} />;
};
Story.args = {
	heading: 'Page Heading',
};
