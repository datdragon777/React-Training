/** @type { import('@storybook/react-vite').StorybookConfig } */
const cssModules = require("../config/cssModules").default;

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  webpackFinal: cssModules(),
  docs: {
    autodocs: "tag",
  },
};
export default config;
