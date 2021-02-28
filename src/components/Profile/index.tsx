import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rodrigodiasf1984.png" alt="Profile"/>
      <div>
        <strong>Rodrigo Figueiredo</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>            
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;