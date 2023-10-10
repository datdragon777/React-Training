import { useState } from 'react';
import './FormInput.css';
import PropTypes from 'prop-types';
import { MESSAGES, REGEX } from '@constants';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className='form__input'>
      <label className='input__label'>{label}</label>
      <input
        className='input__field'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />
      <span className='error__message'>{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel', 'email']),
  errorMessage: PropTypes.oneOf([
    MESSAGES.FORM.USERNAME,
    MESSAGES.FORM.AVATAR,
    MESSAGES.FORM.EMAIL,
    MESSAGES.FORM.PHONENUMBER,
    MESSAGES.FORM.DESCRIPTION,
    MESSAGES.FORM.ADDRESS,
  ]),
  pattern: PropTypes.oneOf([
    REGEX.USERNAME,
    REGEX.AVATAR,
    REGEX.EMAIL,
    REGEX.PHONENUMBER,
    REGEX.DESCRIPTION,
    REGEX.ADDRESS,
  ]),
};

FormInput.defaultProps = {
  label: 'Full name:',
  type: 'text',
  placeholder: 'Type name',
  errorMessage: MESSAGES.FORM.USERNAME,
  pattern: REGEX.USERNAME,
};

export default FormInput;
