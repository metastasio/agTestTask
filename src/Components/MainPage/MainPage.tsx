import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CardItem } from './CardItem/CardItem';
import { setUsers } from '../../store/usersSlice';
import { useNavigate } from 'react-router-dom';
import { LogOutButton } from '../LogOutButton/LogOutButton';

import styles from './mainpage.module.css';

const USERS_PER_PAGE = 6;

export const MainPage = () => {
  const { usersData } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    if (!usersData?.data) {
      dispatch(setUsers(USERS_PER_PAGE));
    }
  }, [dispatch, usersData?.data]);

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
          usersData?.data && usersData?.data.length > 0 ? (
            <>
              <ul className={styles.userlist}>
                {usersData?.data.map((user) => (
                  <CardItem
                    key={user.id}
                    id={user.id}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    avatar={user.avatar}
                  />
                ))}
              </ul>
              {usersData.page !== usersData.total_pages && (
                <button
                  className={styles.more_users}
                  onClick={() =>
                    dispatch(setUsers(usersData.per_page + USERS_PER_PAGE))
                  }
                >
                  Показать еще
                </button>
              )}
            </>
          ) : null
          //  {status !== 'Idle' ?  <p>{status} </p> : null}
        }
      </main>
    </>
  );
};
