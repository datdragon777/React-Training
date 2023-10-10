import { MESSAGES, REGEX } from '@constants';
import FormInput from './FormInput';

export default {
  title: 'Components/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'select', options: ['text', 'tel', 'email'] },
    errorMessage: {
      control: 'select',
      options: [
        MESSAGES.FORM.USERNAME,
        MESSAGES.FORM.AVATAR,
        MESSAGES.FORM.EMAIL,
        MESSAGES.FORM.PHONENUMBER,
        MESSAGES.FORM.DESCRIPTION,
        MESSAGES.FORM.ADDRESS,
      ],
    },
    pattern: {
      control: 'select',
      option: [
        REGEX.USERNAME,
        REGEX.AVATAR,
        REGEX.EMAIL,
        REGEX.PHONENUMBER,
        REGEX.DESCRIPTION,
        REGEX.ADDRESS,
      ],
    },
  },
};

const Template = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
