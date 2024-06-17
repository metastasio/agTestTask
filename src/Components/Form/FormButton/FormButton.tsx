import React from 'react';
import cn from 'classnames';

import styles from './formbutton.module.css';

type FormButtonProps = React.PropsWithChildren & {
  isDisabled: boolean;
};

export const FormButton = (props: FormButtonProps) => {
  return (
    <button
      className={cn(styles.form_input_submit, {
        [styles.pending]: props.isDisabled,
      })}
    >
      {props.children}
    </button>
  );
};
