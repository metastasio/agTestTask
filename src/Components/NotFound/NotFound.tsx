import { Link } from 'react-router-dom';

import styles from './notFound.module.css'

export const NotFound = () => {
  return (
    <>
      <h2 className={styles.title}>Такой страницы нет :(</h2>
      <Link className={styles.redirect} to='/'>На главную</Link>
    </>
  );
};
