import { signOut, useSession } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

import Button from 'components/button';

import styles from './style.module.css';

function UserCard() {
  const { data } = useSession();
  if (!data) return null;

  const {
    user: { email, image, name },
  } = data;
  return (
    <article className={styles['user-card']}>
      <div className={styles['user-card-info-wrapper']}>
        <img src={image} alt={email} />
        <div className={styles['user-card-info']}>
          <p>
            <strong>Github</strong>
          </p>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <Button onClick={signOut}>
        <span>Salir</span>
        <FiLogOut />
      </Button>
    </article>
  );
}

export default UserCard;
