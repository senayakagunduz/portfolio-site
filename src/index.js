import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { ThemeProvider } from "./context";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ThemeProvider>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
