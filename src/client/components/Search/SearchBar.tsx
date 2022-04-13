import React from "react";
import { useAppContext } from "../../Context";

export const SearchBar = (): JSX.Element => {
  const { searchValue, setSearchValue, searchHistory } = useAppContext();
  const searchRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.debug("updateSearchValue", searchRef.current?.value);
    setSearchValue(searchRef.current?.value ?? "");
  };

  return (
    <div className="p-2">
      {searchHistory.length > 0 && (
        <div className="flex flex-row">{searchHistory.toString()}</div>
      )}
      <input
        ref={searchRef}
        defaultValue={searchValue}
        placeholder={"Search repos"}
        style={{ background: "#8080802e" }}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-fit text-2xl border-gray-300 rounded-md p-2"
      />
      <button
        onClick={(e) => updateSearchValue(e)}
        className="bg-gray-300 text-gray-800 rounded-md p-2"
      >
        Search
      </button>
    </div>
  );
};
