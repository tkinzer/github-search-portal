import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { RepoList } from "../components/RepoList/RepoList";
import { SearchBar } from "../components/Search/SearchBar";
import { useAppContext } from "../Context";

const Main = () => {
  const { searchValue } = useAppContext();
  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <Header />
      <div className="flex items-center flex-col pt-10">
        <SearchBar />
        <RepoList />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
