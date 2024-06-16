import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signUp } from '../../store/usersSlice';
import { InputItem } from './InputItem';
import { InputPassword } from './InputPassword';
import { FormButton } from './FormButton';
import { InputFields } from './types';

import styles from './formstyles.module.css';

const rulesName = {
  required: 'Пожалуйста, укажите имя',
  minLength: {
    value: 3,
    message: 'Не должно быть меньше двух символов',
  },
  maxLength: {
    value: 20,
    message: 'Не должно превышать 20 символов',
  },
};

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

export const SignUpPage = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('eve.holt@reqres.in');
  // const [password, setPassword] = useState('pistol');
  // const [passwordConfirm, setPasswordConfirm] = useState('pistol');
  const { statusSignUp } = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<InputFields>({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
      confirmPassword: 'pistol',
    },
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<InputFields> = (data) => {
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
          options={rulesName}
          error={errors.name?.message}
        />

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
          placeholder='pistol'
          options={rulesPassword}
          error={errors.password?.message}
        />

        <InputPassword
          label='Подтвердите пароль'
          name='confirmPassword'
          placeholder='pistol'
          options={rulesPassword}
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
