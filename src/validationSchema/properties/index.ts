import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  business_id: yup.string().nullable(),
});
