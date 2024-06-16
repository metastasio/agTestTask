import { useFormContext } from 'react-hook-form';
import styles from './formstyles.module.css';

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
        className={styles.form_input}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p role='alert'>{error}</p>}
    </>
  );
};
