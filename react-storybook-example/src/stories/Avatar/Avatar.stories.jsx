import { Avatar } from "./Avatar";
import styles from "./Avatar.module.css"
import { getTemplate, getOptionsArgTypes, getListTemplate } from "../../../helpers/storybook";
import { options } from "./constants";

const Template = getTemplate(Avatar, styles)
const ListTemplate = getListTemplate(Avatar, styles)

export default {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://picsum.photos/id/1027/200/200",
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
  parameters: {
    __sb: {fd: "row"}
  }
};

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
