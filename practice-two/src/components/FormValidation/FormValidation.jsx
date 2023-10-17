import { useCallback, useState } from 'react';
import './FormValidation.css';
import { InputValidate, Button } from '@components';
import { BUTTON_VARIANTS } from '@constants';
import { Validation } from '@helpers';

const FormValidation = (props) => {
  const { handleShowForm } = props;
  const [formData, setFormData] = useState({
    username: '',
    avatar: '',
    email: '',
    phonenumber: '',
    description: '',
    address: '',
    gender: 'male',
  });

  const [errors, setErrors] = useState({
    username: '',
    avatar: '',
    email: '',
    phonenumber: '',
    description: '',
    address: '',
  });

  const handleChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData, setFormData]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      const errorMessage = Validation(name, value);
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    },
    [errors, setErrors]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newErrors = {};
      for (const field in formData) {
        const errorMessage = Validation(field, formData[field]);
        if (errorMessage) {
          newErrors[field] = errorMessage;
        }
      }
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        console.log(formData);
      }
    },
    [formData, setErrors]
  );

  return (
    <div className='form__background'>
      <form className='form__validation' onSubmit={handleSubmit}>
        <p className='form__title'>Add customer</p>
        <div className='form__row'>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Full name</label>
              <InputValidate
                value={formData.username}
                errorMessage={errors.username}
                onChange={handleChange}
                onBlur={handleBlur}
                name='username'
              />
            </div>
          </div>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Avatar</label>
              <InputValidate
                value={formData.avatar}
                placeholder='Enter avatar URL'
                errorMessage={errors.avatar}
                onChange={handleChange}
                onBlur={handleBlur}
                name='avatar'
              />
            </div>
          </div>
        </div>
        <div className='form__row'>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Email</label>
              <InputValidate
                value={formData.email}
                placeholder='example@gmail.com'
                errorMessage={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
              />
            </div>
          </div>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Phone number</label>
              <InputValidate
                value={formData.phonenumber}
                placeholder='Vietnamese phone number'
                errorMessage={errors.phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
                name='phonenumber'
              />
            </div>
          </div>
        </div>
        <div className='form__row'>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Job</label>
              <InputValidate
                value={formData.description}
                errorMessage={errors.description}
                onChange={handleChange}
                onBlur={handleBlur}
                name='description'
              />
            </div>
          </div>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Gender</label>
              <div className='input__row'>
                <InputValidate
                  type='radio'
                  placeholder=''
                  genderType='Male'
                  onChange={handleChange}
                  name='gender'
                  value='male'
                  errorMessage=''
                />
                <InputValidate
                  type='radio'
                  placeholder=''
                  genderType='Female'
                  onChange={handleChange}
                  name='gender'
                  value='female'
                  errorMessage=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='form__input'>
          <label className='input__label'>Address</label>
          <InputValidate
            value={formData.address}
            errorMessage={errors.address}
            onChange={handleChange}
            onBlur={handleBlur}
            name='address'
          />
        </div>

        <div className='form__button'>
          <Button variant={BUTTON_VARIANTS.CANCEL} onClick={handleShowForm}>
            Cancel
          </Button>
          <Button type='submit' variant={BUTTON_VARIANTS.SECONDARY}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
