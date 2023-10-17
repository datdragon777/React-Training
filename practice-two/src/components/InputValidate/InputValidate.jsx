import './InputValidate.css';
import PropTypes from 'prop-types';
import { Validation } from '@helpers';
import { MESSAGES } from '@constants';

const InputValidate = (props) => {
  const {
    type,
    value,
    errorMessage,
    genderType,
    onChange,
    errors,
    setErrors,
    ...inputProps
  } = props;

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = Validation(name, value);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  return (
    <div className='input__group'>
      <input
        id={genderType}
        type={type}
        value={value}
        className={type === 'radio' ? 'input__choose' : 'input__field'}
        onChange={onChange}
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

InputValidate.defaultProps = {
  type: 'text',
  placeholder: 'Please enter full name',
  errorMessage: MESSAGES.FORM.USERNAME,
  value: '',
  name: '',
  genderType: '',
};

export default InputValidate;
