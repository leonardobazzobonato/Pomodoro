import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/leonardobazzobonato.png" alt="Leonardo" />

      <div>
        <strong> Leonardo Bazzo Bonato </strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
