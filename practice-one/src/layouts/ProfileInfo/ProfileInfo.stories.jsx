import ProfileInfo from "./ProfileInfo";

export default {
  title: "Layouts/ProfileInfo",
  component: ProfileInfo,
  tags: ["autodocs"],
};

const Template = (args) => <ProfileInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};
