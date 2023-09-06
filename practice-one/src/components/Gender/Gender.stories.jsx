import Gender from "./Gender";

export default {
  title: "Components/Gender",
  component: Gender,
  tags: ["autodocs"],
};

const Template = (args) => <Gender {...args} />;

export const Default = Template.bind({});
Default.args = {
  gender: "Male",
};

export const Female = Template.bind({});
Female.args = {
  gender: "Female",
};
