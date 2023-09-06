import Account from "./Account";
import { accountAvatar, logoutIcon } from "@assets/images";

export default {
  title: "Components/Account",
  component: Account,
  tags: ["autodocs"],
};

const Template = (args) => <Account {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "Easin Arafat",
  avatar: accountAvatar,
  desc: "Free Account",
  icon: logoutIcon,
};
