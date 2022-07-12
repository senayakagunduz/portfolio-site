import { useCallback, useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context";
import About from "./PortfolioContainer/About/About";
import Contact from "./PortfolioContainer/Contact/Contact";
import Profile from "./PortfolioContainer/Home/Profile";
import Intro from "./PortfolioContainer/intro/Intro";
import ProductList from "./PortfolioContainer/ProductList/ProductList";
import Toggle from "./PortfolioContainer/Toggle/Toggle";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
