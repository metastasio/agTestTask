import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './inputelements.module.css';

type InputPasswordProps = {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
};

export const InputPassword = (props: InputPasswordProps) => {
  const { label, name, placeholder, error } = props;
  const [typePassword, toggleTypePassword] = useState('password');
  const { register } = useFormContext();

  const togglePassword = () => {
    toggleTypePassword((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <>
      <label className={styles.form_label} htmlFor='password'>
        {label}
      </label>
      <div className={styles.form_input_wrapper}>
        <input
          className={styles.form_input}
          id={name}
          type={typePassword}
          placeholder={placeholder}
          {...register(name)}
        />
        <button
          type='button'
          className={styles.form_input_show_psswd}
          onClick={() => togglePassword()}
        >
          {typePassword === 'password' ? (
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
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1 12C1 12 5 20 12 20C19 20 23 12 23 12'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <circle
                cx='12'
                cy='12'
                r='3'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </button>
      </div>
      {error && <p role='alert'>{error}</p>}
    </>
  );
};