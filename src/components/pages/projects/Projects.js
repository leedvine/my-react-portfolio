import React from 'react';
import projects from './projects.json';
import ProjectCard from './ProjectCard.js';
import Wrapper from '../../Wrapper';
import Title from '../../Title';

function ProjectList() {
  return (
    <Wrapper>
      <Title>projects List</Title>
      <ProjectCard
        name={projects[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        location={projects[0].location}
      />
      <ProjectCard
        name={projects[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
        location={projects[1].location}
      />
      <ProjectCard
        name={projects[2].name}
        image={projects[2].image}
        occupation={projects[2].occupation}
        location={projects[2].location}
      />
    </Wrapper>
  );
}

export default ProjectList;