import './InputValidate.css';
import PropTypes from 'prop-types';
import { memo } from 'react';

const InputValidate = (props) => {
  const {
    type='text',
    value,
    errorMessage,
    genderType,
    handleChange,
    handleBlur,
    ...inputProps
  } = props;

  console.log("InputValidate is rendering");

  return (
    <div className='input__group'>
      <input
        id={genderType}
        type={type}
        value={value}
        className={type === 'radio' ? 'input__choose' : 'input__field'}
        onChange={handleChange}
        defaultChecked={value === 'male'}
        onBlur={handleBlur}
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
  type: PropTypes.oneOf(['text', 'radio']),
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  genderType: PropTypes.string,
};

export default memo(InputValidate);
