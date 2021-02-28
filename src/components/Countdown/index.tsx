import React, { useState, useEffect, useContext } from 'react';
import { CountDownContext } from '../../contexts/CountdownContext';

import styles from '../../styles/components/CountDown.module.css';

const Countdown: React.FC = () => {
  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountDown, 
    startCountDown
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      
      {hasFinished ? (
        <button 
          disabled                    
          className={styles.countDownButton}
        >
          Ciclo encerrado        
        </button>
      ):(
        <>
          {isActive ? 
            (
              <button 
                onClick={resetCountDown} 
                type="button" 
                className=
                {
                  `${styles.countDownButton} ${styles.countDownButtonActive}`
                }
              >
                Abandonar ciclo        
              </button>                  
              ):(
              <button 
                onClick={startCountDown} 
                type="button" 
                className={styles.countDownButton}
              >
                Iniciar um ciclo    
              </button>
            )
          }
        </>  
      )}      
    </div>
  );
}

export default Countdown;