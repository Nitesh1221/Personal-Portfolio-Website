import React from "react";

const InputBox = (props) => {
  return (
    <tr className="">
      <td className={` p-3 pr-4 font-light ${props.divStyle}`}>
        <label htmlFor={props.id} className=" capitalize">
          {props.labelText}
          {props.required && <span className="text-red">*</span>}
        </label>
      </td>
      <td>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={`Enter ${props.placeholder || props.labelText}`}
          className={`bg-neutral-600 w-[50vw] sm:w-auto px-2 py-1  rounded-sm  ${props.style}`}
        />
      </td>
    </tr>
  );
};


export const TextareaBox = (props) => {
  return (
    <tr>
      <td className={` py-6 pr-4 font-light capitalize ${props.divStyle}`}>
        <label htmlFor={props.id} className=" capitalize">
          {props.labelText}
          {props.required && <span className="text-red">*</span>}
        </label>
      </td>

      <td>
        <textarea
          name={props.name}
          id={props.id}
          cols={props.cols}
          rows={props.rows}
          placeholder={`Enter ${props.placeholder || props.labelText}`}
          className={`bg-neutral-600 w-[50vw] sm:w-auto px-2 py-1  rounded-sm  ${props.style}`}
        />
      </td>
    </tr>
  );
}



InputBox.propTypes = {
  
}


export default InputBox;
