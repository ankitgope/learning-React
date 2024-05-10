import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  // as here the taken values methods are not define in theme.js so we are defining here it will autometically redirected there(theme.js)
const lightTheme=()=>{
  setThemeMode("light")
}
const darkTheme=()=>{
  setThemeMode("dark")
}
// Actuall change in theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme button  */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card */}
          <Card/>
          </div>
      </div>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
