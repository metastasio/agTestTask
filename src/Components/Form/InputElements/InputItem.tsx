import cn from 'classnames';
import { useFormContext } from 'react-hook-form';

import styles from './inputelements.module.css';

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  error?: string;
};

export const InputItem = (props: InputProps) => {
  const { label, name, placeholder, type, error } = props;
  const { register } = useFormContext();

  return (
    <>
      <label className={styles.form_label} htmlFor={name}>
        {label}
      </label>
      <input
        className={cn(styles.form_input, {
          [styles.error]: error,
        })}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
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
