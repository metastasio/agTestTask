import { Link, useNavigate } from 'react-router-dom';
import { FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { singIn } from '../../store/usersSlice';
import { InputItem } from './InputItem';
import { InputPassword } from './InputPassword';
import { FormButton } from './FormButton';

import styles from './formstyles.module.css';

export const SignInPage = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(singIn({ email, password }));
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  };

  return (
    <form className={styles.form_register} onSubmit={handleSubmit}>
      <h2 className={styles.form_register_title}>Вход</h2>

      <InputItem
        label='E-mail'
        name='email'
        value={email}
        placeholder='eve.holt@reqres.in'
        type='text'
        handleChange={setEmail}
      />
      <p className={styles.form_input_error}>{}</p>

      <InputPassword
        label='Пароль'
        name='password'
        value={password}
        placeholder='cityslicka'
        handleChange={setPassword}
      />
      <p className={styles.form_input_error}>{}</p>

      <FormButton content='Войти'></FormButton>

      <p className={styles.form_input_redirect}>
        Нет аккаунта? <Link to={'/register'}>Зарегистрироваться</Link>
      </p>
    </form>
  );
};
