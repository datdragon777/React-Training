import CustomerItem from "./CustomerItem";
import { accountAvatar } from "@assets/images";

export default {
  title: "Components/CustomerItem",
  component: CustomerItem,
  tags: ["autodocs"],
  argTypes: {
    avatar: { control: { type: "file", accept: "image/*" } },
    name: { type: "text" },
    email: { type: "text" },
    phoneNumber: { type: "text" },
    gender: { control: "radio", options: ["Male", "Female"] },
  },
};

const Template = (args) => <CustomerItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: accountAvatar,
  name: "Peter Parker",
  email: "ducdat612001@gmail.com",
  phoneNumber: "0378543899",
  gender: "Male",
};
