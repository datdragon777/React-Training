import Expand from "./Expand";

export default {
  title: "Components/Expand",
  component: Expand,
  tags: ["autodocs"],
  argTypes: {
    expandName: {
      options: ["Name", "Email", "Phone number", "Gender"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Expand {...args} />;

export const Default = Template.bind({});
Default.args = {
  expandName: "Email",
};
