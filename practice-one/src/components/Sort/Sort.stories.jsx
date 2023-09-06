import Sort from "./Sort";

export default {
  title: "Components/Sort",
  component: Sort,
  tags: ["autodocs"],
};

const Template = (args) => <Sort {...args} />;

export const Default = Template.bind({});
Default.args = {
    sortName: "Email"
};
