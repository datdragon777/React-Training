import Contact from "./Contact";

export default {
  title: "Components/Contact",
  component: Contact,
  tags: ["autodocs"],
  argTypes: {},
};

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
