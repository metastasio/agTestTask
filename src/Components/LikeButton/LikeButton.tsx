import { useLocalStorage } from 'usehooks-ts';

import styles from './likeButton.module.css';

type LikeButtonProps = {
  id: number;
};

export const LikeButton = (props: LikeButtonProps) => {
  const [like, setLike] = useLocalStorage(String(props.id), Boolean(0));

  const handleClick = () => {
    setLike((prev) => Boolean(!prev));
  };

  return (
    <button className={styles.like} onClick={handleClick}>
      {like ? <img src='/img/like.svg' /> : <img src='/img/dislike.svg' />}
    </button>
  );
};
