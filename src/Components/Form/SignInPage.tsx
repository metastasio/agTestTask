import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signIn } from '../../store/usersSlice';
import { InputItem } from './InputElements/InputItem';
import { InputPassword } from './InputElements/InputPassword';
import { FormButton } from './FormButton/FormButton';
import { InputFieldsLogIn } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './formstyles.module.css';

const schema = yup
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

export const SignInPage = () => {
  const { statusSignIn } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<InputFieldsLogIn>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<InputFieldsLogIn> = (data) => {
    dispatch(signIn(data))
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
        <h2 className={styles.form_register_title}>Вход</h2>

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
          placeholder='cityslicka'
          error={errors.password?.message}
        />

        <FormButton status={statusSignIn}>Войти</FormButton>

        <p className={styles.form_input_redirect}>
          Нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
        </p>
      </form>
    </FormProvider>
  );
};
