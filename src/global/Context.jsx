import React from 'react'
import { createContext, useState } from 'react'
const Context = createContext()

const ContextProvider = ({ children }) => {

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Context.Provider value={{ showNavbar, setShowNavbar }}>
        {children}
    </Context.Provider>
    )
}

export default ContextProvider