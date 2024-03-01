import { createContext } from "react";

export const product = createContext(null);

export const ProductProvider = ({ children }) => {
  return <ContextProvider.Provider>{children}</ContextProvider.Provider>;
};
