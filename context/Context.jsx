import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [inputString, setInputString] = useState("New String");
  return (
    <StoreContext.Provider value={{ show, setShow, inputString }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
