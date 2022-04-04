import React from "react";
import { useAppContext } from "../../Context";

export const SearchBar = (): JSX.Element => {
  const { searchValue, setSearchValue } = useAppContext();

  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.debug("updateSearchValue", e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <input
      placeholder={"Type here to search github repositories"}
      onChange={updateSearchValue}
      style={{ background: "#8080802e" }}
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md p-2"
    />
  );
};
