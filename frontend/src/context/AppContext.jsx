import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
 
  const value = {
    login, setLogin,
    show, setShow,currentUser,setCurrentUser
  }

  return (

    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>

  )

}

export default AppContextProvider