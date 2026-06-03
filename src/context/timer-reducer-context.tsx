import { createContext, useContext, useReducer, useRef, useState } from 'react';

const TimerContext = createContext(null);

export function TimerProvider2({ children }) {
  const [state, dispatch] = useReducer(reducer, { secondi: 0 });
  const timerRef = useRef(null);

  const avviaTimer = () => {
    //fermo eventuale timer già attivo
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      dispatch({ type: 'incrementa' });
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
    dispatch({ type: 'resetta' });
  };

  // Esponiamo i dati e i metodi di controllo attraverso il Context
  return (
    <TimerContext.Provider value={{ secondi: state.secondi, avviaTimer, fermaTimer, resettaTimer }}>
      {children}
    </TimerContext.Provider>
  );
}

// Custom Hook - per non scrivere useContext(TimerContext) in ogni componente che vuole accedere al timer
export function useTimer2() {
  const cts = useContext(TimerContext);
  if (cts === null) {
    throw new Error("useTimer2 deve essere usato all'interno di un TimerProvider2");
  }
  return cts;
}

export function reducer(state, action) {
  switch (action.type) {
    case 'incrementa':
      return { ...state, secondi: state.secondi + 1 };
    case 'resetta':
      return { ...state, secondi: 0 };
    default:
      throw new Error(`Azione sconosciuta: ${action.type}`);
  }
}