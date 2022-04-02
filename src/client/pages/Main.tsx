import React from "react";
import { Footer } from "../components/Footer/Footer";
import { RepoList } from "../components/RepoList/RepoList";
import { SearchBar } from "../components/Search/SearchBar";
import { useAppContext } from "../Context";

const Main = () => {
  const { searchValue } = useAppContext();
  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <div className="flex items-center flex-col pt-10">
        <h3 className="font-bold text-gray-900 text-3xl lg:text-7xl text-center ">
          Find github repositories
        </h3>
        <SearchBar />
        {/* <p className="font-bold text-blue-400 text-center ">
          {searchValue ? `, ${searchValue}!` : "Looking for a github repo?"}
        </p> */}
        <RepoList />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
