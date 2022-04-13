import React, { useContext, useState } from "react";

export interface Context {
  searchValue: string;
  setSearchValue: (val: string) => void;
  searchHistory: string[];
}
const defaultVal = {
  searchValue: "",
  setSearchValue: () => {},
  searchHistory: [],
} as Context;

const context = React.createContext(defaultVal);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [searchValue, setSearchValue] = useState(defaultVal.searchValue);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  React.useEffect(() => {
    if (!searchHistory) {
      // TODO check if searchHistory is empty
      const localSearchHistory = localStorage.getItem("searchHistory");
      if (localSearchHistory) {
        setSearchHistory(JSON.parse(localSearchHistory));
      }
    }

    const updatedSearchHistory = [...searchHistory, searchValue];

    setSearchHistory(updatedSearchHistory);
  }, [searchValue]);

  return (
    <Provider value={{ searchValue, setSearchValue, searchHistory }}>
      {children}
    </Provider>
  );
};

export const useAppContext = () => useContext(context);
