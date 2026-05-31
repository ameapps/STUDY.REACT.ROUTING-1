// context/ColorContext.tsx
import { createContext, useState, useContext } from 'react';

// il contenitore vuoto
export const ColorContext = createContext(null);

// il "servizio" — contiene lo useState
export function ColorCtxProvider({ children }) {
  const [color, setColor] = useState({ name: 'rosso', hex: '#FF0000' }); // 👈 useState sta qui

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}