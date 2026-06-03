import React from 'react';
import { useTimer } from '../context/timer-context';

export default function DisplayTimer() {
  const { secondi, avviaTimer, fermaTimer, resettaTimer } = useTimer();

  console.log("%c[Render] DisplayTimer", "color: green");

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
      <h3>Display del Tempo</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Tempo trascorso: {secondi} secondi
      </p>
      <button className="start" onClick={avviaTimer}>
        Avvia Timer
      </button>
      <button className="stop" onClick={fermaTimer}>
        Ferma Timer
      </button>
      <button className="reset" onClick={resettaTimer}>
        Resetta Timer
      </button>
    </div>
  );
}