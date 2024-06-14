import { Link } from 'react-router-dom';

import styles from './carditem.module.css';

type CardItemProps = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
};

export const CardItem = (props: CardItemProps) => {
  const { id, firstName, lastName, avatar } = props;
  return (
    <li className={styles.user_card}>
      <Link to={`user/${id}`}>
        <img
          className={styles.pfp}
          src={avatar}
          alt={`Фото пользователя ${firstName} ${lastName}`}
          width='124'
          height='124'
        />
        <p className={styles.profile_name}>
          {firstName} {lastName}
        </p>
      </Link>
      <button className={styles.card_button}>3</button>
    </li>
  );
};
