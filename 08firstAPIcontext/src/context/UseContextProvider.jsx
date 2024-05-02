// 2nd this one 
import React from "react";
import UserContext from "./UserContext";
// like outlet in prev project same type of concept we use here is children-> same type of concept , whichever props we are getting as a children keep it as it is  childern aeere those divs and other components
const UserContextProvider = ({ children }) => {
  //2> BUt only passing the context will not work because it does provide the context but what will it access we need data as well so for data we are using state hook

  const [user, setUser] = React.useState(null)

  // 1> do it as it is this return, now we have to wrap it , (wraping hi to providing hai ) and accessing its property       .Provider and which value we are passing so we use value in herewe passing a object and in it we can give any data as values

  return(
    <UserContext.Provider value={{user,setUser}}>
    {children}</UserContext.Provider>
  ) 
}

export default UserContextProvider;
