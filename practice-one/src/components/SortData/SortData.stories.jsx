import SortData from "./SortData";

export default {
  title: "Components/SortData",
  component: SortData,
  tags: ["autodocs"],
  argTypes: {
    name: {
      options: ["Name", "Email", "Phone number", "Gender"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <SortData {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Email",
};
