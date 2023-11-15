import "minireset.css";
import "../styles/global.css";
import "../styles/tokens.css";
import { disableGlobalArgTypes } from "../helpers/storybook";

const getStyles = ({ __sb }) => ({
  display: "flex",
  flexDirection: __sb?.fd || "column",
  maxHeight: __sb?.mh || "auto",
  justifyContent: "flex-start",
  alignItem: "flex-start",
  flexWrap: __sb?.fw || "wrap",
  height: "100%",
  gap: "10px 30px",
  padding: "20px",
});

export const decorators = [
  (Story, { parameters }) =>
    disableGlobalArgTypes(parameters)("getStyles") || (
      <div style={getStyles(parameters)}>
        <Story />
      </div>
    ),
];

// /** @type { import('@storybook/react').Preview } */
// export const preview = {
//   parameters: {
//     // argTypes: {
//     //   getStyles: {
//     //     table: {disable: true}
//     //   }
//     // },
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

export const parameters = {
  argTypes: {
    getStyles: {
      table: {disable: true}
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export default parameters

// export default preview;
