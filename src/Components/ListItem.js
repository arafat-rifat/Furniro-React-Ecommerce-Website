import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ itemname, className, to }) => {
  return (
    <li className={className}>
      <Link to={to}>{itemname}</Link>
    </li>
  );
};

export default ListItem;
