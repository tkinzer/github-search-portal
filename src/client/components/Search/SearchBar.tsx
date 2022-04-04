import React from "react";
import { useAppContext } from "../../Context";

export const SearchBar = (): JSX.Element => {
  const { searchValue, setSearchValue } = useAppContext();

  const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.debug("updateSearchValue", e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="p-2">
      <input
        placeholder={"Search repos"}
        onChange={updateSearchValue}
        style={{ background: "#8080802e" }}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-fit text-2xl border-gray-300 rounded-md p-2"
      />
    </div>
  );
};
