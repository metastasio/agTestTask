import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signIn } from '../../store/usersSlice';
import { InputItem } from './InputItem';
import { InputPassword } from './InputPassword';
import { FormButton } from './FormButton';
import { InputFields } from './types';

import styles from './formstyles.module.css';

const rulesEmail = {
  required: 'Пожалуйста, укажите email',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Неверный формат email',
  },
};

const rulesPassword = {
  required: 'Пожалуйста, укажите пароль',
  minLength: {
    value: 3,
    message: 'Слишком короткий пароль',
  },
  maxLength: {
    value: 20,
    message: 'Пароль не должен превышать 20 символов',
  },
};

export const SignInPage = () => {
  const { statusSignIn } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<InputFields>({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<InputFields> = (data) => {
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
          options={rulesEmail}
          error={errors.email?.message}
        />

        <InputPassword
          label='Пароль'
          name='password'
          placeholder='cityslicka'
          options={rulesPassword}
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
