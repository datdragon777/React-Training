import { useState } from 'react';
import './InputValidate.css';
import PropTypes from 'prop-types';
import { MESSAGES, REGEX } from '@constants';

const InputValidate = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    errorMessage,
    onChange,
    type,
    value,
    genderType,
    ...inputProps
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className='input__group'>
      <input
        id={genderType}
        type={type}
        className={type === 'radio' ? 'input__choose' : 'input__field'}
        {...inputProps}
        onChange={onChange}
        defaultChecked={value === 'male'}
        onBlur={handleFocus}
        value={value}
        // eslint-disable-next-line react/no-unknown-property
        focused={focused.toString()}
      />
      {type === 'radio' && <label className='input__option' htmlFor={genderType}>{genderType}</label>}
      {errorMessage && <span className='error__message'>{errorMessage}</span>}
    </div>
  );
};

InputValidate.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'radio']),
  errorMessage: PropTypes.oneOf([
    MESSAGES.FORM.USERNAME,
    MESSAGES.FORM.AVATAR,
    MESSAGES.FORM.EMAIL,
    MESSAGES.FORM.PHONENUMBER,
    MESSAGES.FORM.DESCRIPTION,
    MESSAGES.FORM.ADDRESS,
    MESSAGES.FORM.EMPTY,
  ]),
  pattern: PropTypes.string,
};

InputValidate.defaultProps = {
  label: 'Full name:',
  type: 'text',
  placeholder: 'Please enter full name',
  errorMessage: MESSAGES.FORM.USERNAME,
  pattern: REGEX.USERNAME,
};

export default InputValidate;
