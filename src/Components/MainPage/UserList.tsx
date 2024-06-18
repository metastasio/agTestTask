import { useEffect } from 'react';
import { CardItem } from './CardItem/CardItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUsers } from '../../store/usersSlice';

import styles from './mainpage.module.css';

const USERS_PER_PAGE = 6;

export const UserList = () => {
  const { usersData, userStatus } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!usersData?.data) {
      dispatch(setUsers(USERS_PER_PAGE));
    }
  }, [dispatch, usersData?.data]);

  if (userStatus.status === 'loading') {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  if (userStatus.status === 'error') {
    return <p className={styles.error}>Произошла ошибка</p>;
  }

  if (!usersData?.data.length) {
    return <p className={styles.error}>Нет пользователей</p>;
  }

  const onClick = () => {
    dispatch(setUsers(usersData.per_page + USERS_PER_PAGE));
  };

  return (
    <main className={styles.main_wrapper}>
      <ul className={styles.userlist}>
        {usersData.data.map((user) => (
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
        <button className={styles.more_users} onClick={onClick}>
          Показать еще
        </button>
      )}
    </main>
  );
};
