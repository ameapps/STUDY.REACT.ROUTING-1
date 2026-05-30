# STUDY 

## COME CREARE PROGETTO 

LIBRERIE DA INSTALLARE 
npm install react-router-dom
npm install @reduxjs/toolkit react-redux

ESEMPIO DI PROGETTO
https://stackblitz.com/edit/github-ik8fuwaf?file=src%2FApp.tsx,src%2Fvite-env.d.ts

## COMANDI REACT 

CREA PROGETTO REACT CON TYPESCRIPT
npm create vite@latest nome-progetto -- --template react-ts
cd nome-progetto
npm install

AVVIA IN SVILUPPO
npm run dev

BUILD PRODUZIONE
npm run build

## COME IMPLEMENTARE IL ROUTING IN REACT 

-nel file app.tsx, wrappare il componente App dentro il componente BrowserRouter
-in react non c'è un file app.router.ts: il routing va aggiunto in App.js
--> dentro <Routes> <Routes path="/" element={<Home />} > </Routes>
-nel link dove si vuole navigare, si può: 
--> usare il componente <Link to="">
--> usare l'hook useNavigate
