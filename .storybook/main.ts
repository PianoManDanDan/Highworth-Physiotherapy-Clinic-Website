import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    { directory: "../components/", titlePrefix: "components" },
    { directory: "../stories/", titlePrefix: "pages" },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
