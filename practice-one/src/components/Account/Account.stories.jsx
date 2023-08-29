import Account from "./Account";

export default {
    title: "Components/Account",
    component: Account,
    tags: ["autodocs"]
}

const Template = (args) => <Account {...args} />

export const Default = Template.bind({})
Default.args = {}
