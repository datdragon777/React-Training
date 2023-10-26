import { MESSAGES, REGEX } from '@constants';

const Validation = (name, value) => {
  const validationRules = {
    name: {
      regex: REGEX.USERNAME,
      message: MESSAGES.FORM.USERNAME,
    },
    avatar: {
      regex: REGEX.AVATAR,
      message: MESSAGES.FORM.AVATAR,
    },
    mail: {
      regex: REGEX.EMAIL,
      message: MESSAGES.FORM.EMAIL,
    },
    phoneNumber: {
      regex: REGEX.PHONENUMBER,
      message: MESSAGES.FORM.PHONENUMBER,
    },
    description: {
      regex: REGEX.DESCRIPTION,
      message: MESSAGES.FORM.DESCRIPTION,
    },
    address: {
      regex: REGEX.ADDRESS,
      message: MESSAGES.FORM.ADDRESS,
    },
  };

  if (!value.trim()) {
    return 'This field is required.';
  }

  if (validationRules[name]) {
    const { regex, message } = validationRules[name];
    if (!regex.test(value)) {
      return message;
    }
  }

  return '';
};

export default Validation;
