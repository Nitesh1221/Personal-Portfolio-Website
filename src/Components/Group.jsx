import React from "react";

const Group = (props) => {
  return (
    <div className={`bg-neutral-900 p-4 m-4 border-neutral-700 border rounded-lg ${props.className}`}>
      <h2 className={`pb-4 text-3xl capitalize ${props.nameStyle}`}>
        {props.name}
      </h2>
      <div className={` grid grid-flow-row gap-4 ${props.childstyle}`}>
        {props.children}
      </div>
    </div>
  );
};



export default Group;
