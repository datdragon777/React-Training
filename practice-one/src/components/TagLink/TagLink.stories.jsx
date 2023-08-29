import TagLink from "./TagLink";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "../../assets/images/dashboard.svg"

export default {
  title: "Components/Tag Link",
  component: TagLink,
  tags: ["autodocs"]
};

const Template = (args) => (
  <BrowserRouter>
    <TagLink {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({})
Default.args = {
    icon: Dashboard,
    name: "Default Link",
    path: "/",
    isActive: false
}

export const Active = Template.bind({})
Active.args = {
    icon: Dashboard,
    name: "Active Link",
    path: "/",
    isActive: true
}
