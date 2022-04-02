import React from "react";

export const Footer = () => {
  return (
    <footer className={"justify-center items-center"}>
      &copy; {new Date().getFullYear()} -{" "}
      <a href={"https://timothykinzer.com"}>Timothy Kinzer</a> -{" "}
      <a
        className={"p-1"}
        href={"https://github.com/tkinzer/github-search-portal"}
      >
        Repo
      </a>
    </footer>
  );
};
