import { memo, useState, useCallback, useEffect } from 'react';
import './FormValidation.css';
import { InputValidate, Button } from '@components';
import {
  BUTTON_VARIANTS,
  MESSAGES,
  ACTION_TYPES,
  GENDER_TYPES,
} from '@constants';
import { Validation } from '@helpers';
import { createCustomerService } from '@services';
import { useCustomerContext } from '@hooks';
import { actionReducerCustomer } from '@stores';

const FormValidation = ({ handleShowForm, selectedCustomer }) => {
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    mail: '',
    phoneNumber: '',
    description: '',
    address: '',
    gender: 'Male',
  });
  const [errors, setErrors] = useState({
    name: '',
    avatar: '',
    mail: '',
    phoneNumber: '',
    description: '',
    address: '',
  });
  const { dispatch, showToastInfo } = useCustomerContext();

  // Set value for form data
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    [setFormData]
  );

  // Check validate input when click outside
  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      const errorMessage = Validation(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    },
    [setErrors]
  );

  // Reset form value
  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      avatar: '',
      mail: '',
      phoneNumber: '',
      description: '',
      address: '',
      gender: 'Male',
    });
    setErrors({
      name: '',
      avatar: '',
      mail: '',
      phoneNumber: '',
      description: '',
      address: '',
    });
    handleShowForm();
  };

  useEffect(() => {
    if (selectedCustomer && selectedCustomer.id) {
      const {
        id,
        name,
        avatar,
        mail,
        phoneNumber,
        description,
        address,
        gender,
      } = selectedCustomer;
      setFormData({
        id: id,
        name: name,
        avatar: avatar,
        mail: mail,
        phoneNumber: phoneNumber,
        description: description,
        address: address,
        gender: gender,
      });
    }
  }, [selectedCustomer]);

  // Submit form
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Check validation form when submiting
      const newErrors = {};
      for (const field in formData) {
        const errorMessage = Validation(field, formData[field]);
        if (errorMessage) {
          newErrors[field] = errorMessage;
        }
      }
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        const response = await createCustomerService(formData);

        if (response.error) {
          showToastInfo(MESSAGES.GET.ERRORS.ADD_FAILED);
          resetForm();
          return;
        } else {
          dispatch(actionReducerCustomer(ACTION_TYPES.CREATE, response.data));
          showToastInfo(MESSAGES.GET.SUCCESSES.ADD_SUCCESSED);
          resetForm();
        }
      }
    },
    [formData, setErrors]
  );

  return (
    <div className='form__background'>
      <form className='form__validation' onSubmit={handleSubmit}>
        <p className='form__title'>
          {selectedCustomer ? 'Update customer' : 'Add customer'}
        </p>
        <div className='form__row'>
          <div className='col-6'>
            <InputValidate
              label='Full name'
              value={formData.name}
              errorMessage={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name='name'
            />
          </div>
          <div className='col-6'>
            <InputValidate
              label='Avatar'
              value={formData.avatar}
              placeholder='Enter avatar URL'
              errorMessage={errors.avatar}
              onChange={handleChange}
              onBlur={handleBlur}
              name='avatar'
            />
          </div>
        </div>
        <div className='form__row'>
          <div className='col-6'>
            <InputValidate
              label='Email'
              value={formData.mail}
              placeholder='example@gmail.com'
              errorMessage={errors.mail}
              onChange={handleChange}
              onBlur={handleBlur}
              name='mail'
            />
          </div>
          <div className='col-6'>
            <InputValidate
              label='Phone number'
              value={formData.phoneNumber}
              placeholder='Vietnamese phone number'
              errorMessage={errors.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              name='phoneNumber'
            />
          </div>
        </div>
        <div className='form__row'>
          <div className='col-6'>
            <InputValidate
              label='Job'
              value={formData.description}
              errorMessage={errors.description}
              onChange={handleChange}
              onBlur={handleBlur}
              name='description'
            />
          </div>
          <div className='col-6'>
            <label className='input__label'>Gender</label>
            <div className='input__row'>
              <InputValidate
                type='radio'
                placeholder=''
                genderType='Male'
                onChange={handleChange}
                name='gender'
                value='Male'
                errorMessage=''
                checked={formData.gender === GENDER_TYPES.MALE}
              />
              <InputValidate
                type='radio'
                placeholder=''
                genderType='Female'
                onChange={handleChange}
                name='gender'
                value='Female'
                errorMessage=''
                checked={formData.gender === GENDER_TYPES.FEMALE}
              />
            </div>
          </div>
        </div>
        <InputValidate
          label='Address'
          value={formData.address}
          errorMessage={errors.address}
          onChange={handleChange}
          onBlur={handleBlur}
          name='address'
        />

        <div className='form__button'>
          <Button variant={BUTTON_VARIANTS.TOGGLE} onClick={resetForm}>
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

export default memo(FormValidation);
