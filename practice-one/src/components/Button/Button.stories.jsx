import Button from "./Button";
import plus from "../../assets/images/plus.svg"

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const HasIcon = Template.bind({});
HasIcon.args = {
  children: "Add Customer",
  width: "10.3125rem",
  height: "2.625rem",
  color: "btn__text--white",
  background: "btn__bg--blue",
  border: "btn__border--lg",
  fontSize: "btn__fs--lg",
  fontWeight: "btn__fw--md",
  align: "align-default",
  icon: plus
};
