import { Link, useNavigate } from 'react-router-dom';
import { FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { singUp } from '../../store/usersSlice';
import { InputItem } from './InputItem';
import { InputPassword } from './InputPassword';
import { FormButton } from './FormButton';

import styles from './formstyles.module.css';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('pistol');
  const [passwordConfirm, setPasswordConfirm] = useState('pistol');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(singUp({ email, password }));
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  };

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
        placeholder='eve.holt@reqres.in'
        type='text'
        handleChange={setEmail}
      />
      <p className={styles.form_input_error}>{}</p>

      <InputPassword
        label='Пароль'
        name='password'
        value={password}
        placeholder='pistol'
        handleChange={setPassword}
      />
      <p className={styles.form_input_error}>{}</p>

      <InputPassword
        label='Подтвердите пароль'
        name='confirmPassword'
        value={passwordConfirm}
        placeholder='pistol'
        handleChange={setPasswordConfirm}
      />
      <p className={styles.form_input_error}>{}</p>
      <FormButton content='Зарегистрироваться'></FormButton>

      <p className={styles.form_input_redirect}>
        Есть аккаунт? <Link to={'/login'}>Войти</Link>
      </p>
    </form>
  );
};
