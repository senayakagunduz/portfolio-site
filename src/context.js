import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";
import Toggle from "./PortfolioContainer/Toggle/Toggle";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
