import Button from "./Button";
import plusIcon from "../../assets/images/plus.svg"
import editIcon from "../../assets/images/edit.svg"
import deleteIcon from "../../assets/images/delete.svg"
import { BUTTON_VARIANTS } from "../../constants/buttons";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: { onClick: {action: "handleClick"} }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: BUTTON_VARIANTS.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: BUTTON_VARIANTS.SECONDARY,
  icon: plusIcon
};

export const AlignLeftEdit = Template.bind({})
AlignLeftEdit.args = {
  children: "Edit",
  variant: BUTTON_VARIANTS.EDIT,
  icon: editIcon
}

export const AlignLeftDelete = Template.bind({})
AlignLeftDelete.args = {
  children: "Delete",
  variant: BUTTON_VARIANTS.DELETE,
  icon: deleteIcon
}
