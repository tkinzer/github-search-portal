import React from "react";
import { render } from "@testing-library/react";
import { RepoList } from "./RepoList";

describe("RepoList", () => {
  it("should render the component", () => {
    const { getByText } = render(<RepoList>Sample text</RepoList>);
    expect(getByText("Sample Text")).toBeInTheDocument();
  });

  xit("renders the correct number of items in the list", () => {});
});
