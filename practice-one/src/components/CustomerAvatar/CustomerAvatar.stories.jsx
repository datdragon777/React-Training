import CustomerAvatar from "./CustomerAvatar";
import { accountAvatar } from "@assets/images";

export default {
  title: "Components/CustomerAvatar",
  component: CustomerAvatar,
  tags: ["autodocs"],
  argTypes: {
    customerAvatar: { control: { type: "file", accept: "image/*" } },
    customerName: { control: "text" },
  },
};

const Template = (args) => <CustomerAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  customerAvatar: accountAvatar,
  customerName: "Openheimer",
};
