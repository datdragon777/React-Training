import FormValidation from './FormValidation';
import { CustomerProvider, FormProvider } from '@contexts';

export default {
  title: 'Components/FormValidation',
  component: FormValidation,
  tags: ['autodocs'],
};

const Template = (args) => (
  <CustomerProvider>
    <FormProvider>
      <FormValidation {...args} />
    </FormProvider>
  </CustomerProvider>
);

export const Default = Template.bind({});
Default.args = {};
