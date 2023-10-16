import FormValidation from "./FormValidation";

export default {
  title: "Components/FormValidation",
  component: FormValidation,
  tags: ["autodocs"],
};

const Template = (args) => <FormValidation {...args} />;

export const Default = Template.bind({});
Default.args = {};