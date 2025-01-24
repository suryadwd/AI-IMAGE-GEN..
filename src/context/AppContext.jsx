import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [login, setLogin] = useState(!true);
  const [show, setShow] = useState(false)

  const value = {
    login, setLogin,
    show, setShow
  }

  return (

    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>

  )

}

export default AppContextProvider