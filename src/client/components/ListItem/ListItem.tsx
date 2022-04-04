import React from "react";

type ListItemProps = React.PropsWithChildren<{
  className?: string;
}>;

export const ListItem = (props: ListItemProps): JSX.Element => {
  const listItemClassName = `${
    props.className || ""
  } border-b border-gray-300"`;
  return <li className={listItemClassName}>{props.children}</li>;
};
