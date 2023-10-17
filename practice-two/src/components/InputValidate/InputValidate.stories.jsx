import { MESSAGES } from '@constants';
import InputValidate from './InputValidate';

export default {
  title: 'Components/InputValidate',
  component: InputValidate,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'radio'] },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    genderType: { control: 'text' },
  },
};

const Template = (args) => <InputValidate {...args} />;

export const Default = Template.bind({});
Default.args = {
  errorMessage: MESSAGES.FORM.USERNAME,
};

export const Email = Template.bind({});
Email.args = {
  placeholder: 'example@gmail.com',
  errorMessage: MESSAGES.FORM.EMAIL,
};

export const GenderRadio = Template.bind({});
GenderRadio.args = {
  type: 'radio',
  errorMessage: '',
  value: 'male',
  name: 'gender',
  genderType: 'male',
};
