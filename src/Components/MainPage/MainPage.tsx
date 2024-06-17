import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CardItem } from './CardItem/CardItem';
import { setUsers, showMoreUsers } from '../../store/usersSlice';
import { useNavigate } from 'react-router-dom';
import { LogOutButton } from '../LogOutButton/LogOutButton';

import styles from './mainpage.module.css';

const MAX_USERS = 12;

export const MainPage = () => {
  const { userList, usersPerPage } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    dispatch(setUsers(usersPerPage));
  }, [dispatch, usersPerPage]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.header_nav}>
            <LogOutButton logOut={logOut} />
          </nav>

          <h1 className={styles.header_title}>Наша команда</h1>
          <p className={styles.header_description}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </header>
      <main className={styles.main_wrapper}>
        {
          userList && userList?.length > 0 ? (
            <ul className={styles.userlist}>
              {userList.map((user) => (
                <CardItem
                  key={user.id}
                  id={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                  avatar={user.avatar}
                />
              ))}
            </ul>
          ) : null
          //  {status !== 'Idle' ?  <p>{status} </p> : null}
        }
        {usersPerPage < MAX_USERS ? (
          <button className={styles.more_users} onClick={() => dispatch(showMoreUsers())}>
            Показать еще
          </button>
        ) : null}
      </main>
    </>
  );
};
