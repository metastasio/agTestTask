import cn from 'classnames';
import { useAppSelector } from '../../store/hooks';

import styles from './formstyles.module.css';

type FormButtonProps = {
  content: string;
};

export const FormButton = (props: FormButtonProps) => {
  const { status } = useAppSelector((state) => state.users);

  return (
    <button
      className={cn(styles.form_input_submit, {
        [styles.pending]: status === 'pending',
      })}
    >
      {props.content}
    </button>
  );
};
