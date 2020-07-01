import React from 'react';
import { text } from '@storybook/addon-knobs';
import { PageSubHeading, PageSubHeadingProps } from '../src';

const getPageSubHeadingProps = (): PageSubHeadingProps => ({
	text: text('Subheading text', 'Subheading'),
});

export default {
	title: 'PageSubHeading',
	component: PageSubHeading,
};

export const Story = () => {
	return <PageSubHeading {...getPageSubHeadingProps()} />;
};
