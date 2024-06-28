import { Link } from 'react-router-dom';
import { LikeButton } from '../../LikeButton/LikeButton';

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
    <li className={styles.wrapper}>
      <Link className={styles.user_card} to={`user/${id}`}>
          <img
            className={styles.user_card_pfp}
            src={avatar}
            alt={`Фото пользователя ${firstName} ${lastName}`}
            width='124'
            height='124'
          />
          <p className={styles.user_card_profile_name}>
            {firstName} {lastName}
          </p>
      </Link>
      <LikeButton id={id} />
    </li>
  );
};
