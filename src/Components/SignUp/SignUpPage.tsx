import { FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { singUp } from '../../store/usersSlice';
import { InputItem } from '../Form/InputItem';

import styles from './signuppage.module.css';
import { InputPassword } from '../Form/InputPassword';

export const SignUpPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  // const [typePassword, toggleTypePassword] = useState({
  //   password: 'password',
  //   confirmPassword: 'password',
  // });
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(singUp({ email, password, username: name }));
  };

  // const togglePassword = (name: 'password' | 'confirmPassword') => {
  //   toggleTypePassword((prev) => {
  //     return {
  //       ...prev,
  //       [name]: prev[name] === 'password' ? 'text' : 'password',
  //     };
  //   });
  // };

  return (
    <form className={styles.form_register} onSubmit={handleSubmit}>
      <h2 className={styles.form_register_title}>Регистрация</h2>
      <InputItem
        label='Имя'
        name='name'
        value={name}
        placeholder='Введите имя'
        type='text'
        handleChange={setName}
      />
      <p className={styles.form_input_error}>{}</p>

      <InputItem
        label='E-mail'
        name='email'
        value={email}
        placeholder='Введите email'
        type='text'
        handleChange={setEmail}
      />
      <p className={styles.form_input_error}>{}</p>

      <InputPassword
        label='Пароль'
        name='password'
        value={password}
        placeholder='Введите пароль'
        handleChange={setPassword}
      />
      <p className={styles.form_input_error}>{}</p>

      <InputPassword
        label='Подтвердите пароль'
        name='confirmPassword'
        value={passwordConfirm}
        placeholder='Повторите пароль'
        handleChange={setPasswordConfirm}
      />
      <p className={styles.form_input_error}>{}</p>
      <button className={styles.form_input_submit}>Зарегистрироваться</button>
    </form>
  );
};
