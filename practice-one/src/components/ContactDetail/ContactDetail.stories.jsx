import ContactDetail from "./ContactDetail";
import { email } from "@assets/images";

export default {
  title: "Components/ContactDetail",
  component: ContactDetail,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: { type: "file", accept: ".svg" } },
    info: { control: "text" },
  },
};

const Template = (args) => <ContactDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: email,
  info: "kajope5182@ummoh.com",
};
