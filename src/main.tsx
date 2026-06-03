import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ColorCtxProvider } from "./context/color-context.tsx";
import { TimerProvider1 } from "./context/timer-state-context.tsx";
import { TimerProvider2 } from "./context/timer-reducer-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TimerProvider2>
        <TimerProvider1>
          <ColorCtxProvider>
            <App />
          </ColorCtxProvider>
        </TimerProvider1>
      </TimerProvider2>
    </BrowserRouter>
  </StrictMode>,
);
