import React, { createContext, useContext, useRef, useState } from 'react';

const TimerContext = createContext(null);

export function TimerProvider({ children }) {
  // Questo useState serve SOLO per mostrare i secondi sulla UI
  const [secondi, setSecondi] = useState(0);

  // Questo useRef memorizza l'ID del setInterval. 
  // Modificare .current NON causerà ri-render inutili.
  const timerRef = useRef(null);

  const avviaTimer = () => {
    // Se c'è già un timer attivo, lo fermiamo per evitare duplicati
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

// Custom Hook per usare il servizio facilmente
export function useTimer() {
  const cts = useContext(TimerContext);
  if (cts === null) {
    throw new Error("useTimer deve essere usato all'interno di un TimerProvider");
  }
    return cts;
}