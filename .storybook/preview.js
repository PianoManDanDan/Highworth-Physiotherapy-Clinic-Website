import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../src/globalStyles/global.scss';

import { addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addParameters({
	options: {
		panelPosition: 'bottom',
	},
});

addDecorator(StoryRouter());
