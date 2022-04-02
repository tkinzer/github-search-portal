type ListItemProps = {
  text: string;
  children?: React.ReactNode;
};

export const ListItem = (props: ListItemProps): JSX.Element => {
  return <li className="border-b border-gray-300">Dummy list item</li>;
};
