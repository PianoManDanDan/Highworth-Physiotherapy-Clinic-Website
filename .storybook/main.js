const path = require('path');

module.exports = {
	stories: [
		'../src/components/**/*.stories.tsx',
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-viewport',
		'@storybook/addon-controls',
		'@storybook/addon-docs',
	],
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader'],
		include: path.resolve(__dirname, '../'),
		});
		
		return config;
	},
};