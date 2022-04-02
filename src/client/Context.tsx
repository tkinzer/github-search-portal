import React, { useContext, useState } from "react";

export interface Context {
  searchValue: string;
  setSearchValue: (val: string) => void;
}
const defaultVal = {
  searchValue: "",
  setSearchValue: () => {},
} as Context;

const context = React.createContext(defaultVal);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [searchValue, setSearchValue] = useState(defaultVal.searchValue);
  return (
    <Provider value={{ searchValue, setSearchValue }}>{children}</Provider>
  );
};

export const useAppContext = () => useContext(context);
