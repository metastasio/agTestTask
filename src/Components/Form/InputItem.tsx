import styles from './inputitem.module.css';

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  type: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
};

export const InputItem = (props: InputProps) => {
  const { label, name, placeholder, value, handleChange, type } = props;
  return (
    <>
      <label className={styles.form_label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.form_input}
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
};
