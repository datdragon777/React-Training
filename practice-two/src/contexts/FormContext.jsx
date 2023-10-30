import {
  createContext,
  useState,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { Validation } from '@helpers';
import { createCustomerService } from '@services';
import { CustomerContext } from './CustomerContext';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [createResult, setCreateResult] = useState(null);
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
  const { handleCreateCustomer } = useContext(CustomerContext);

  const handleShowForm = useCallback(() => {
    setIsShowForm(!isShowForm);
  }, [isShowForm]);

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

  const resetForm = () => {
    setFormData({
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
  };

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
          handleShowForm();
          setCreateResult('failed');
          resetForm();
          return;
        } else {
          handleShowForm();
          handleCreateCustomer(response.data);
          setCreateResult('success');
          resetForm();
        }
      }
    },
    [formData, setErrors, handleShowForm]
  );

  const formContextValue = {
    formData,
    errors,
    setErrors,
    isShowForm,
    handleShowForm,
    handleChange,
    handleBlur,
    handleSubmit,
    createResult,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};
