import ConfirmPopup from './ConfirmPopup';

export default {
  title: 'Components/ConfirmPopup',
  component: ConfirmPopup,
  tags: ['autodocs'],
  argTypes: {
    questionConfirm: { control: { type: 'text' } },
    onTogglePopup: { action: 'handleClick' },
    onConfirm: { action: 'handleClick' },
  },
};

const Template = (args) => <ConfirmPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
  questionConfirm: 'Are you sure to delete customer?',
};
