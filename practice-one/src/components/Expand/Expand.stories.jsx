import Expand from "./Expand";

export default {
  title: "Components/Expand",
  component: Expand,
  tags: ["autodocs"],
};

const Template = (args) => <Expand {...args} />;

export const Default = Template.bind({});
Default.args = {
    expandName: "Email"
};
