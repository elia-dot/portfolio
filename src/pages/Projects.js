import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import { projects } from "../data/project-data";
import Project from "../components/Project";

const ProjectsContainer = styled.section`
  margin: 2em auto;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2em;
  place-items: center;
`;

const Title = styled.h1`
  color: #cce2ff;
  text-align: center;
  font-size: 2.8em;
  margin: 2em 0 1em 0;
`;

const SubTitle = styled.h2`
  color: #cce2ff;
  text-align: center;
  font-size: 1.8em;
`;

const Projects = () => {
  return (<>
  <Title>My latest projects</Title>
    <ProjectsContainer>
      {projects.map((project, i) => (
        <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce
        key={i}
        duration={0.7}
      >
        <Project project={project} />
      </ScrollAnimation>
      ))}
    </ProjectsContainer>
    <SubTitle>That's it for now!</SubTitle>
    </>
  );
};

export default Projects;
