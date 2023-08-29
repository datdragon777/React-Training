import { BrowserRouter } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

export default {
  title: "Layouts/Left Sidebat",
  component: LeftSidebar,
  tags: ["autodocs"],
};

const Template = (args) => (
  <BrowserRouter>
    <LeftSidebar {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
