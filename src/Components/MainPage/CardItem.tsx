import { Link } from 'react-router-dom';

type CardItemProps = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
};

export const CardItem = (props: CardItemProps) => {
  const { id, firstName, lastName, avatar } = props;
  return (
    <li>
      <Link to={`user/${id}`}>
        <img src={avatar} alt={`Фото пользователя ${firstName} ${lastName}`} />
        {firstName} {lastName}
      </Link>
    </li>
  );
};
