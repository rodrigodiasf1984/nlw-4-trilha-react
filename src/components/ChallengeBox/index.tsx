import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import { CountDownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const {activeChallenge, resetChallenge, completedChallenge} =  useContext(ChallengesContext);
  const {resetCountDown} = useContext(CountDownContext);

  function handleChallengeSucceeded(){
    completedChallenge();
    resetChallenge();
    resetCountDown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountDown();
  }

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
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeCompletedButton}
              onClick={handleChallengeSucceeded}
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