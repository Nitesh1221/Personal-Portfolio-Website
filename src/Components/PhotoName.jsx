import React from "react";

const PhotoName = (props) => {
  return (
    <div>
      <div
        className={` flex gap-2 items-center border-none hover:cursor-default  ${props.classname}`}
      >
        <img
          src="src/assets/navPhoto.jpg"
          alt="img"
          className="  size-16  rounded-full  text-xl  "
        />

        <div className="  text-3xl  hover:font-light font-[irish_grover]  capitalize ">
          nitesh kumawat
        </div>
      </div>
    </div>
  );
};

export default PhotoName;
