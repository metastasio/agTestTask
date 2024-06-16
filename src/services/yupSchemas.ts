import * as yup from 'yup';

export const signInSchema = yup
  .object({
    email: yup
      .string()
      .email('Неверный формат email')
      .required('Пожалуйста, укажите email'),
    password: yup
      .string()
      .required('Пожалуйста, укажите пароль')
      .min(6, 'Пароль не должен быть меньше 6 символов')
      .max(20, 'Пароль не должен превышать 20 символов')
      .trim(),
  })
  .required();

export const signUpSchema = yup
  .object({
    name: yup.string().trim(),
    email: yup
      .string()
      .email('Неверный формат email')
      .required('Пожалуйста, укажите email'),
    password: yup
      .string()
      .required('Пожалуйста, укажите пароль')
      .min(6, 'Пароль не должен быть меньше 6 символов')
      .max(20, 'Пароль не должен превышать 20 символов')
      .trim(),
    confirmPassword: yup
      .string()
      .required('required')
      .oneOf([yup.ref('password')], 'Пароли должны совпадать')
      .trim(),
  })
  .required();
