import React from 'react';
import { Map } from '../src';

export default {
	title: 'Map',
	component: Map,
};

export const Story = () => {
	return <Map />;
};
Story.parameters = {
	controls: { hideNoControlsWarning: true },
};
