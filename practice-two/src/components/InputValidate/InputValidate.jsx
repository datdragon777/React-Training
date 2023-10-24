import './InputValidate.css';
import PropTypes from 'prop-types';
import { memo } from 'react';

const InputValidate = (props) => {
  const {
    label,
    type = 'text',
    value,
    errorMessage,
    genderType,
    onChange,
    onBlur,
    ...inputProps
  } = props;

  return (
    <div
      className={`form__input ${
        type !== 'radio' ? 'form__input--field' : 'form__input--choose'
      }`}
    >
      {label && <label className='input__label'>{label}</label>}
      <input
        id={genderType}
        type={type}
        value={value}
        className={type === 'radio' ? 'input__choose' : 'input__field'}
        onChange={onChange}
        defaultChecked={value === 'Male'}
        onBlur={onBlur}
        {...inputProps}
      />
      {type === 'radio' && (
        <label className='input__option' htmlFor={genderType}>
          {genderType}
        </label>
      )}
      {errorMessage && <span className='error__message'>{errorMessage}</span>}
    </div>
  );
};

InputValidate.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'radio']),
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  genderType: PropTypes.string,
};

export default memo(InputValidate);
