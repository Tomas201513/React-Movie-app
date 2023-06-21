import { ReactNode } from "react";

interface Item {
  children: ReactNode;
}

function ListGroup({ children }: Item) {
  return <>{children}</>;
}

export default ListGroup;
