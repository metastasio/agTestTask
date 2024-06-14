import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CardItem } from './CardItem';
import { setUsers } from '../../store/usersSlice';

import styles from './mainpage.module.css';

export const MainPage = () => {
  const { userList, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header_title}>Наша команда</h1>
        <p className={styles.header_description}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </header>
      <main>
        {userList && userList?.length > 0 ? (
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
        ) : (
          <p>{error}</p>
        )}
      </main>
    </>
  );
};
