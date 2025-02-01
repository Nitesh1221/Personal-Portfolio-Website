import React from "react";
import Button from "./Button";

const Project = ({ project }) => {
  return (
    <div
      key={project.id}
      className=" bg-neutral-800 border border-neutral-700 overflow-hidden rounded-md flex hover:relative   "
    >
      <div className="size-40 overflow-hidden ">
        <img
          src={`src/assets/${project.image}`}
          alt=""
          className="h-full hover:scale-125 transform duration-300 "
        />
      </div>
      <div className="p-4 ">
        <ul className="flex gap-4 items-center   *:inline-block">
          <li className=" text-2xl text-nowrap ">{project.title}</li>
          <li className=" text-neutral-500 list-disc ">
            {project.technologies.map((item) => (
              <span className="px-2 mr-2 border rounded-md">{item}</span>
            ))}
          </li>
        </ul>
        <div className=" text-neutral-400 text-md">{project.description} </div>
        <div className="py-4 flex gap-4 items-center">
          {project.github && <Button link={project.github} text={`github`} />}
          {project.live && <Button link={project.live} text={`Live Now`} style="bg-green-400 text-black" />}
        </div>
      </div>
    </div>
  );
};

export default Project;
