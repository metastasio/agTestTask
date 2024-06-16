import cn from 'classnames';
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
          className={cn(styles.form_input, {
            [styles.error]: error,
          })}
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
            <img
              className={styles.form_input_show_psswd_img}
              src='/img/eye-password-hide-svgrepo-com.svg'
              alt='Скрыть пароль'
            />
          ) : (
            <img
              className={styles.form_input_show_psswd_img}
              src='/img/eye-password-show-svgrepo-com.svg'
              alt='Показать пароль'
            />
          )}
        </button>
      </div>
      <div className={styles.input_error_wrapper}>
        {error && (
          <p className={styles.input_error} role='alert'>
            {error}
          </p>
        )}
      </div>
    </>
  );
};
