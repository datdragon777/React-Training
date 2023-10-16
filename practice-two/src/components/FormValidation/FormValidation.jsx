import { useState } from 'react';
import './FormValidation.css';
import { InputValidate, Button } from '@components';
import { BUTTON_VARIANTS } from '@constants';
import { Validation } from '@helpers';

const FormValidation = () => {
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

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
  };

  return (
    <div className='form__background'>
      <form className='form__validation' onSubmit={handleSubmit}>
        <p className='form__title'>Add customer</p>
        <div className='form__row'>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Full name</label>
              <InputValidate
                type='text'
                value={formData.username}
                placeholder='Please enter full name'
                errorMessage={errors.username}
                onChange={onChange}
                name='username'
                errors={errors}
                setErrors={setErrors}
              />
            </div>
          </div>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Avatar</label>
              <InputValidate
                type='text'
                value={formData.avatar}
                placeholder='Please enter URL avatar'
                errorMessage={errors.avatar}
                onChange={onChange}
                name='avatar'
                errors={errors}
                setErrors={setErrors}
              />
            </div>
          </div>
        </div>
        <div className='form__row'>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Email</label>
              <InputValidate
                type='text'
                value={formData.email}
                placeholder='exmaple@gmail.com'
                errorMessage={errors.email}
                onChange={onChange}
                name='email'
                errors={errors}
                setErrors={setErrors}
              />
            </div>
          </div>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Phone number</label>
              <InputValidate
                type='text'
                value={formData.phonenumber}
                placeholder='E.g 5555-555-555'
                errorMessage={errors.phonenumber}
                onChange={onChange}
                name='phonenumber'
                errors={errors}
                setErrors={setErrors}
              />
            </div>
          </div>
        </div>
        <div className='form__row'>
          <div className='col-6'>
            <div className='form__input'>
              <label className='input__label'>Job</label>
              <InputValidate
                type='text'
                value={formData.description}
                placeholder='Please enter your job'
                errorMessage={errors.description}
                onChange={onChange}
                name='description'
                errors={errors}
                setErrors={setErrors}
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
                  onChange={onChange}
                  name='gender'
                  value='male'
                  errorMessage=''
                />
                <InputValidate
                  type='radio'
                  placeholder=''
                  genderType='Female'
                  onChange={onChange}
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
            type='text'
            value={formData.address}
            placeholder='Please enter your address'
            errorMessage={errors.address}
            onChange={onChange}
            name='address'
            errors={errors}
            setErrors={setErrors}
          />
        </div>

        <div className='form__button'>
          <Button>Cancel</Button>
          <Button type='submit' variant={BUTTON_VARIANTS.SECONDARY}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
