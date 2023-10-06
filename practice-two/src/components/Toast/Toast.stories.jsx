import { toastTheme } from "../../themes";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
    backgroundColor: {
      control: "select",
      options: { success: toastTheme.success, error: toastTheme.error },
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Success",
  backgroundColor: "#5cb85c",
};

export const Danger = Template.bind({});
Danger.args = {
  message: "Error",
  backgroundColor: "#d9534f",
};
