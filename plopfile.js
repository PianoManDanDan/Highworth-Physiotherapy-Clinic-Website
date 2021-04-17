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
}