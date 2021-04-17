module.exports = (plop) => {
  plop.setGenerator('Page', {
    description: 'Generate a new page',
    prompts: [
      {
        type: 'input',
        name: 'pagePath',
        message: 'URL of new page:',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Pick a name for the page\'s React component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'pages/{{lowerCase pagePath}}.tsx',
        templateFile: 'plop-templates/Page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'tests/pages/{{lowerCase pagePath}}.test.tsx',
        templateFile: 'plop-templates/Page/Page.test.tsx.hbs',
      }
    ],
  });
  plop.setGenerator('Component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Pick a name for the Component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}Props.ts',
        templateFile: 'plop-templates/Component/ComponentProps.ts.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'plop-templates/Component/Component.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'stories/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'tests/components/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
      },
    ],
  });
}