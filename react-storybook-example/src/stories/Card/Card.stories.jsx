import { Card } from "./Card";
import { options } from "./constants";
import styles from './Card.module.css'
import { getListTemplate, getOptionsArgTypes, getTemplate } from "../../../helpers/storybook";


const Template = getTemplate(Card, styles)
const ListTemplate = getListTemplate(Card, styles)

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: "This is CARD",
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
};

export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
};

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
