import React from 'react';
import projects from './projects.json';
import ProjectCard from './ProjectCard.js';
import Wrapper from '../../Wrapper';

function ProjectList() {
  return (
    <section class="content">
      <h1 class="page-title">My Projects</h1>
    <Wrapper>
      <ProjectCard
        project={projects[0].project}
        image={projects[0].image}
        github={projects[0].github}
        livesite={projects[0].livesite}
      />
      <ProjectCard
        project={projects[1].project}
        image={projects[1].image}
        github={projects[1].github}
        livesite={projects[1].livesite}
      />
      <ProjectCard
        project={projects[2].project}
        image={projects[2].image}
        github={projects[2].github}
        livesite={projects[2].livesite}
      />
            <ProjectCard
        project={projects[3].project}
        image={projects[3].image}
        github={projects[3].github}
        livesite={projects[3].livesite}
      />
            <ProjectCard
        project={projects[4].project}
        image={projects[4].image}
        github={projects[4].github}
        livesite={projects[4].livesite}
      />
            <ProjectCard
        project={projects[5].project}
        image={projects[5].image}
        github={projects[5].github}
        livesite={projects[5].livesite}
      />
    </Wrapper>
    </section>
  );
}

export default ProjectList;