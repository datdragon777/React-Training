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
Default.args = {};

export const Email = Template.bind({});
Email.args = {
  type: 'text',
  placeholder: 'example@gmail.com',
  errorMessage: MESSAGES.FORM.EMAIL,
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  type: 'text',
  placeholder: 'Please enter your phone number',
  errorMessage: MESSAGES.FORM.PHONENUMBER,
};

export const GenderRadio = Template.bind({});
GenderRadio.args = {
  type: 'radio',
  errorMessage: '',
  value: 'male',
  name: 'gender',
  genderType: 'male',
};
