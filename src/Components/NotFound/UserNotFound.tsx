import { Link } from 'react-router-dom';

import styles from './notFound.module.css';

export const UserNotFound = () => {
  return (
    <>
      <h2 className={styles.title}>Пользователь не найден</h2>
      <Link className={styles.redirect} to='/'>
        На главную
      </Link>
    </>
  );
};
