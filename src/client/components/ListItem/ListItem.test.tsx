import React from "react";
import { render } from "@testing-library/react";
import { ListItem } from "./ListItem";

describe("ListItem", () => {
  it("should render the component", () => {
    const { getByText } = render(<ListItem text="Sample text" />);
    expect(getByText("Repo")).toBeInTheDocument();
  });
});
