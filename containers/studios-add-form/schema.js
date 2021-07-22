import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  website: yup.string().url().required(),
  twitter: yup.string().url(),
  facebook: yup.string().url(),
  instagram: yup.string().url(),
});
