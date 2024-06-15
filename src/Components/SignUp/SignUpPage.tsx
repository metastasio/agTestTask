import { FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { singUp } from '../../store/usersSlice';

import styles from './signuppage.module.css';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [typePassword, toggleTypePassword] = useState({
    password: 'password',
    confirmPassword: 'password',
  });
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const dataName = data.get('name');
    const dataEmail = data.get('email');
    const dataPassword = data.get('password');
    //взять из стейта -> валуе
    dispatch(
      singUp({ email: dataEmail, password: dataPassword, username: dataName }),
    );
  };

  const togglePassword = (name: 'password' | 'confirmPassword') => {
    toggleTypePassword((prev) => {
      return {
        ...prev,
        [name]: prev[name] === 'password' ? 'text' : 'password',
      };
    });
  };

  return (
    <form className={styles.form_register} onSubmit={handleSubmit}>
      <h2 className={styles.form_register_title}>Регистрация</h2>
      <label className={styles.form_label} htmlFor='name'>
        Имя
      </label>
      <input
        className={styles.form_input}
        id='name'
        type='text'
        name='name'
        value={name}
        placeholder='Введите имя'
        onChange={(e) => setName(e.target.value)}
      />
      <p className={styles.form_input_error}>{}</p>

      <label className={styles.form_label} htmlFor='email'>
        E-mail
      </label>
      <input
        className={styles.form_input}
        id='email'
        type='text'
        name='email'
        value={email}
        placeholder='Введите email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className={styles.form_input_error}>{}</p>

      <label className={styles.form_label} htmlFor='password'>
        Пароль
      </label>
      <div className={styles.form_input_wrapper}>
        <input
          className={styles.form_input}
          id='password'
          type={typePassword.password}
          name='password'
          value={password}
          placeholder='Введите пароль'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='button'
          className={styles.form_input_show_psswd}
          onClick={() => togglePassword('password')}
        >
          <svg
            className={styles.form_input_show_psswd_svg}
            width='24px'
            height='24px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 2L22 22'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
      <p className={styles.form_input_error}>{}</p>

      <label className={styles.form_label} htmlFor='confirmPassword'>
        Подтвердите пароль
      </label>
      <div className={styles.form_input_wrapper}>
        <input
          className={styles.form_input}
          id='confirmPassword'
          type={typePassword.confirmPassword}
          name='confirmPassword'
          value={passwordConfirm}
          placeholder='Повторите пароль'
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button
          type='button'
          className={styles.form_input_show_psswd}
          onClick={() => togglePassword('confirmPassword')}
        >
          {typePassword.confirmPassword === 'password' ? (
            <svg
              className={styles.form_input_show_psswd_svg}
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 2L22 22'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ) : (
            <svg
              className={styles.form_input_show_psswd_svg}
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1 12C1 12 5 20 12 20C19 20 23 12 23 12'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <circle
                cx='12'
                cy='12'
                r='3'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          )}
        </button>
      </div>
      <p className={styles.form_input_error}>{}</p>
      <button className={styles.form_input_submit}>Зарегистрироваться</button>
    </form>
  );
};
