import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ColorCtxProvider } from "./context/color-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ColorCtxProvider>
        <App />
      </ColorCtxProvider>
    </BrowserRouter>
  </StrictMode>,
);
