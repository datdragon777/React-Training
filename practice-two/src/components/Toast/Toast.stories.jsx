import { MESSAGES } from '@constants';
import Toast from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
};

const Template = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: MESSAGES.GET.SUCCESSES.ADD_SUCCESSED,
};

export const Danger = Template.bind({});
Danger.args = {
  message: MESSAGES.GET.ERRORS.API_FAILED,
};
