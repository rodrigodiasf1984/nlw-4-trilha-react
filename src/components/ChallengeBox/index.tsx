import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const {activeChallenge, resetChallenge} =  useContext(ChallengesContext);

  return(
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img  src={`icons/${activeChallenge.type}.svg`} alt="Challenge"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeCompletedButton}
            >
              Completei
            </button>
          </footer>

        </div>
      ):(
        <div className={styles.challengeBoxInactive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Passe para o próximo nível completando desafios
          </p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;