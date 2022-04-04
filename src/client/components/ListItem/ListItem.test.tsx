import React from "react";
import { render } from "@testing-library/react";
import { ListItem } from "./ListItem";

describe("ListItem", () => {
  it("should render the component", () => {
    const { getByText } = render(<ListItem>Sample text</ListItem>);
    expect(getByText("Repo")).toBeInTheDocument();
  });
});
