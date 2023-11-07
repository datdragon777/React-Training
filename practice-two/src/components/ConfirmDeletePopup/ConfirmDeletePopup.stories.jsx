import ConfirmDeletePopup from './ConfirmDeletePopup';

export default {
  title: 'Components/ConfirmDeletePopup',
  component: ConfirmDeletePopup,
  tags: ['autodocs'],
  argTypes: {},
};

const Template = (args) => <ConfirmDeletePopup {...args} />;

export const Default = Template.bind({});
Default.args = {};
