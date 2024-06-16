import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signUp } from '../../store/usersSlice';
import { InputItem } from './InputElements/InputItem';
import { InputPassword } from './InputElements/InputPassword';
import { FormButton } from './FormButton/FormButton';
import { InputFieldsRegister } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './formstyles.module.css';

const schema = yup
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

export const SignUpPage = () => {
  const { statusSignUp } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<InputFieldsRegister>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
      confirmPassword: 'pistol',
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<InputFieldsRegister> = (data) => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => navigate('/'))
      .catch(console.log);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.form_register}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h2 className={styles.form_register_title}>Регистрация</h2>
        <InputItem
          label='Имя'
          name='name'
          placeholder='Введите имя'
          type='text'
          error={errors.name?.message}
        />

        <InputItem
          label='E-mail'
          name='email'
          placeholder='eve.holt@reqres.in'
          type='text'
          error={errors.email?.message}
        />

        <InputPassword
          label='Пароль'
          name='password'
          placeholder='pistol'
          error={errors.password?.message}
        />

        <InputPassword
          label='Подтвердите пароль'
          name='confirmPassword'
          placeholder='pistol'
          error={errors.password?.message}
        />

        <FormButton status={statusSignUp}>Зарегистрироваться</FormButton>

        <p className={styles.form_input_redirect}>
          Есть аккаунт? <Link to={'/login'}>Войти</Link>
        </p>
      </form>
    </FormProvider>
  );
};
