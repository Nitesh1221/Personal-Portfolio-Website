import React from "react";

const Button = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div
        className={` bg-blue-500 px-2 py-1  rounded-md text-xl inline-block   ${props.style}`}
      >
        {props.text}
      </div>
    </a>
  );
};

export const FormBtn = (props) => {
  return (
    <button
      type={props.type}
      className={`bg-blue-500 p-1.5 rounded-md capitalize cursor-pointer ${props.className}`}
    >
      {props.text}
    </button>
  );
};
export const LinkBtn = ({ link, children }) => {
  return (
    <a href={link}>
      <li className=" hover:bg-neutral-600 p-2 sm:rounded-md cursor-pointer capitalize ">
        {children}
      </li>
    </a>
  );
};

export default Button;
