import { MESSAGES, REGEX } from '@constants';
import InputValidate from './InputValidate';

export default {
  title: 'Components/InputValidate',
  component: InputValidate,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'radio'] },
    errorMessage: {
      control: 'select',
      options: [
        MESSAGES.FORM.USERNAME,
        MESSAGES.FORM.AVATAR,
        MESSAGES.FORM.EMAIL,
        MESSAGES.FORM.PHONENUMBER,
        MESSAGES.FORM.DESCRIPTION,
        MESSAGES.FORM.ADDRESS,
        MESSAGES.FORM.EMPTY,
      ],
    },
    pattern: {
      control: 'text',
    },
  },
};

const Template = (args) => <InputValidate {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  placeholder: 'example@gmail.com',
  type: 'email',
  errorMessage: MESSAGES.FORM.EMAIL,
  pattern: REGEX.EMAIL,
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  label: 'Phone number',
  placeholder: 'Please enter your phone number ',
  type: 'text',
  errorMessage: MESSAGES.FORM.PHONENUMBER,
  pattern: REGEX.PHONENUMBER,
};

export const GenderRadio = Template.bind({});
GenderRadio.args = {
  label: 'Gender',
  type: 'radio',
  name: 'gender',
  value: 'male',
  genderType: 'male',
  pattern: '',
  errorMessage: '',
};
