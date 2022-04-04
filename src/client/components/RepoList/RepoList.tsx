import React from "react";
import { useAppContext } from "../../Context";
import { ListItem } from "../ListItem/ListItem";

// TODO: Add tests for this component
type GithubRepoProps = {
  name: string;
  description: string;
  html_url: string;
  stars: number;
  stargazers_count: number;
};

async function fetchRepos(searchValue: string) {
  return await fetch(
    `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&order=desc`
  );
}

export const RepoList = (): JSX.Element => {
  const { searchValue } = useAppContext();
  const [repos, setRepos] = React.useState<GithubRepoProps[]>([]);

  React.useEffect(() => {
    if (!searchValue) {
      return;
    }
    console.log("searchValue", searchValue);
    fetchRepos(searchValue)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchValue]);

  return searchValue ? (
    <ul className="p-4">
      {repos?.map((repo, idx) => (
        <ListItem
          key={idx}
          className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl mt-2 p-2"
        >
          <div className="bg-white dark:bg-slate-900 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <h3 className="items-center text-slate-900 dark:text-white text-base font-medium tracking-tight">
              <p>{repo.name}</p>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm  max-h-24 overflow-hidden">
              {repo.description}
            </p>
            <div className="flex items-center mt-4">
              <a
                href={repo.html_url}
                className="text-blue-500 dark:text-slate-400"
              >
                Open on Github
              </a>
            </div>
          </div>
          <div className="flex justify-end  p-2 bg-indigo-500 text-white shadow-lg">
            <p className="justify-self-end">Stars: {repo.stargazers_count}</p>
          </div>
        </ListItem>
      ))}
    </ul>
  ) : (
    <p>No search value</p>
  );
};
