# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
***PRODUCTION LEVEL**
second way of writing API context
1. creating a context folder in src then created a file name theme.js 
   a. importing createContext and useContext from "react" it required in almost all file  
   b. export const ThemeContext = createContext({}) 
        now in here  createContext() we can pass default values like in create context as in inital state we can give some value ie when the context is created which values are already feeded  
    in previous type we have not taken any value ---------   
         -->in the object 
            a themeMode --> alteast a basic theme mode or default theme mode so that the app not get crashed 
        ---> exporting ThemeProvider -> passing the provider which we are doing in previous type we are wraping the children in useContextProvider 
        ---> we can pass a custom hooks which is ussually done or export from here

***App.jsx***  
2. wraping the div with the provide here <ThemeProvider> </ThemeProvider>   what will happen was  in app. js  whichever component will come we will get the access of the values like this <ThemeProvider values={{themeMode,lighttheme,darkTheme}}>
    --->   const [themeMode, setThemeMode] = useState("light");
     as here the taken values methods are not define in theme.js so we are defining here it will autometically redirected there(theme.js)
    
    const lightTheme=()=>{
    setThemeMode("light")
    }
    const darkTheme=()=>{  setThemeMode("dark")}

    ---> Actual change in theme (***How actually theme changes *** will be done via js )
  