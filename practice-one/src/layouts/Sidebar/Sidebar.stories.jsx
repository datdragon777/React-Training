import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

const Template = (args) => (
  <BrowserRouter>
    <Sidebar {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
