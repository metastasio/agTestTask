import { useLocalStorage } from 'usehooks-ts';

import styles from './likeButton.module.css';

type LikeButtonProps = {
  id: number;
};

export const LikeButton = (props: LikeButtonProps) => {
  const [like, setLike] = useLocalStorage(String(props.id), 'dislike');

  const handleClick = () => {
    setLike((prev: string) => (prev === 'dislike' ? 'like' : 'dislike'));
  };

  return (
    <button className={styles.like} onClick={handleClick}>
      {like === 'like' ? (
        <img src='/img/like.svg' />
      ) : (
        <img src='/img/dislike.svg' />
      )}
    </button>
  );
};
