import React from 'react';
import { useTimer1 } from '../context/timer-state-context';

export default function DisplayTimer1() {
  const { secondi, avviaTimer, fermaTimer, resettaTimer } = useTimer1();

  console.log("%c[Render] DisplayTimer1", "color: green");

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
      <h3>Display del Tempo 1</h3>
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