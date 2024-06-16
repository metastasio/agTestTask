import styles from './formstyles.module.css';

type FormButtonProps = {
  content: string;
};

export const FormButton = (props: FormButtonProps) => {
  return <button className={styles.form_input_submit}>{props.content}</button>;
};
