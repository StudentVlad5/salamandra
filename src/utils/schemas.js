import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email'
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email'
    )
    .required('Require field'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required('Require field'),
  name: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Name must includes only Latin alphabet'
    )
    .required('Require field'),
  phone: Yup.number()
    .nullable(true)
    .required('Require field')
    .min(99999)
    .max(999999999999),
});

const schemasLogin = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email'
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email'
    )
    .required('Require'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require'),
});

const schemasChangePassword = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require'),
});

const schemasMenuPosition = Yup.object().shape({
  article: Yup.number().required('Require field'),
  product: Yup.string().required('Require field'),
  category: Yup.string().required('Require field'),
  name: Yup.string().required('Require field'),
  latin_name: Yup.string().required('Require field'),
  alcohol: Yup.mixed(),
  details: Yup.array().nullable().min(2).required(),
  price: Yup.number().required('Require field'),
  currency: Yup.string(),
  images: Yup.string(),
  size: Yup.object().shape({
    value: Yup.number(),
    mesure: Yup.string(),
  }),
  admin: Yup.string(),
});

const schemas = {
  registerSchema,
  schemasLogin,
  schemasChangePassword,
  schemasMenuPosition,
};

export default schemas;
