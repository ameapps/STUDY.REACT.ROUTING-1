import React, { createContext, useContext, useRef, useState } from 'react';

const TimerContext = createContext(null);

export function TimerProvider1({ children }) {
  const [secondi, setSecondi] = useState(0);
  const timerRef = useRef(null);

  const avviaTimer = () => {
    //fermo eventuale timer già attivo
    if (timerRef.current !== null) return; 

    timerRef.current = setInterval(() => {
      setSecondi((prev) => prev + 1);
    }, 1000);
    console.log("Timer avviato! ID:", timerRef.current);
  };

  const fermaTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      console.log("Timer fermato. Era l'ID:", timerRef.current);
      timerRef.current = null; // Resettiamo il ref
    }
  };

  const resettaTimer = () => {
    fermaTimer();
    setSecondi(0);
  };

  // Esponiamo i dati e i metodi di controllo attraverso il Context
  return (
    <TimerContext.Provider value={{ secondi, avviaTimer, fermaTimer, resettaTimer }}>
      {children}
    </TimerContext.Provider>
  );
}

// Custom Hook - per non scrivere useContext(TimerContext) in ogni componente che vuole accedere al timer
export function useTimer1() {
  const cts = useContext(TimerContext);
  if (cts === null) {
    throw new Error("useTimer1 deve essere usato all'interno di un TimerProvider1");
  }
    return cts;
}