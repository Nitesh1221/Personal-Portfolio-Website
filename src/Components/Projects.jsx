import React from "react";
import Group from "./Group";
import projectsData from './../Json/Projects.json'
import Project from "./Project";

const Projects = () => {


  return (
    <div>
      <Group name="My Projects">
        {projectsData.map(project => <Project project={project} /> )}
      </Group>
    </div>
  );
};

export default Projects;
