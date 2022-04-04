import React from "react";
import { useAppContext } from "../../Context";
import { ListItem } from "../ListItem/ListItem";

// TODO: Add tests for this component
type GithubRepoProps = {
  name: string;
  description: string;
  url: string;
  stars: number;
  stargazers_count: number;
};

function fetchRepos(searchValue: string) {
  return fetch(
    `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&order=desc`
  );
}

export const RepoList = (): JSX.Element => {
  const { searchValue } = useAppContext();
  const resultCount = searchValue ? "10" : "0";
  const [page, setPage] = React.useState(1);
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

  return (
    <ul>
      {repos?.map((repo, idx) => (
        <ListItem key={idx} className={``}>
          {[repo.name, repo.description, repo.stargazers_count].join(" - ")}
        </ListItem>
      ))}
    </ul>
  );
};
