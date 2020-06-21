module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		// User input prompts provided as arguments to the template
		prompts: [
			{
				// Raw text input
				type: 'input',
				// Variable name for this input
				name: 'name',
				// Prompt to display on command line
				message: 'Name of new component:',
			},
		],
		actions: [
			{
				// Add a new file
				type: 'add',
				// Path for the new file
				path: 'src/components/{{pascalCase name}}/src/{{pascalCase name}}.tsx',
				// Handlebars template used to generate content of new file
				templateFile: 'plop-templates/Component/src/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/{{pascalCase name}}.scss',
				templateFile: 'plop-templates/Component/src/Component.scss.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/index.ts',
				templateFile: 'plop-templates/Component/src/index.ts.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/test/{{pascalCase name}}.test.tsx',
				templateFile: 'plop-templates/Component/test/Component.test.tsx.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/stories/{{pascalCase name}}.stories.tsx',
				templateFile:
					'plop-templates/Component/stories/Component.stories.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/types/{{pascalCase name}}Types.ts',
				templateFile: 'plop-templates/Component/src/types/Types.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/types/index.ts',
				templateFile: 'plop-templates/Component/src/types/TypeIndex.ts.hbs',
			},
		],
	});
	plop.setGenerator('page', {
		description: 'Create a new page',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name of new page:',
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{pascalCase name}}.tsx',
				templateFile: 'plop-templates/Page/Page.tsx.hbs',
			},
			{
				type: 'append',
				path: 'src/pages/index.ts',
				templateFile: 'plop-templates/Page/PageIndex.ts.hbs',
			},
		],
	});
};
