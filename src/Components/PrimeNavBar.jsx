import React from "react";
import { LinkBtn } from "./Button";

const PrimeNavBar = ({ navItem, classname }) => {
  return (
    <ul
      className={` p-2 flex flex-col sm:flex-row items-center  gap-2  ${classname}`}
    >
      {navItem.map((item) => {
        return <LinkBtn link={item.url}>{item.name}</LinkBtn>;
      })}
    </ul>
  );
};

export default PrimeNavBar;
