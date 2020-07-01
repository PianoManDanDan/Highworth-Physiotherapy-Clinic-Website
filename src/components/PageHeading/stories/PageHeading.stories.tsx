import React from 'react';
import { text } from '@storybook/addon-knobs';
import { PageHeading, PageHeadingProps } from '../src';

const getPageHeadingProps = (): PageHeadingProps => ({
	heading: text('Heading', 'Page Heading'),
});

export default {
	title: 'PageHeading',
	component: PageHeading,
};

export const Story = () => {
	return <PageHeading {...getPageHeadingProps()} />;
};
