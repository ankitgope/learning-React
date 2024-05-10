import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;
// making a customr Hooks
export default function useTheme() {
  // now we need context (the value/data) in useContext
  return useContext(ThemeContext);
}
