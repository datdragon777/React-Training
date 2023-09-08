import Analytics from "./Analytics";

export default {
  title: "Pages/Analytics",
  component: Analytics,
  tags: ["autodocs"],
};

const Template = (args) => <Analytics {...args} />;

export const Default = Template.bind({});
Default.args = {};
