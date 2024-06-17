import { useAppDispatch } from '../../store/hooks';
import { logOut } from '../../store/usersSlice';
import { useNavigate } from 'react-router-dom';
import { LogOutButton } from '../LogOutButton/LogOutButton';
import { UserList } from './UserList';

import styles from './mainpage.module.css';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.header_nav}>
            <LogOutButton logOut={handleLogOut} />
          </nav>

          <h1 className={styles.header_title}>Наша команда</h1>
          <p className={styles.header_description}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </header>

      <UserList />
    </>
  );
};
