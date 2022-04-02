import React from "react";
import { useAppContext } from "../../Context";

export const SearchBar = (): JSX.Element => {
  const { searchValue, setSearchValue: setName } = useAppContext();
  return (
    <input
      placeholder={"Type here to search github repositories"}
      onChange={(e) => setName(e.currentTarget.value)}
      style={{ background: "#8080802e" }}
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md p-2"
    />
  );
};
