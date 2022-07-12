import { StrictMode } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "./context";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
