import React from 'react';
import cn from 'classnames';

import styles from './formbutton.module.css';

type FormButtonProps = React.PropsWithChildren & {
  status: string;
};

export const FormButton = (props: FormButtonProps) => {
  return (
    <button
      className={cn(styles.form_input_submit, {
        [styles.pending]: props.status === 'pending',
      })}
    >
      {props.children}
    </button>
  );
};
