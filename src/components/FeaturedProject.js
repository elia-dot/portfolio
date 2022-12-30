import React, { useEffect } from 'react';
import styled from 'styled-components';

import TechComponent from './TechComponent';
import ProjectDrawer from './ProjectDrawer';

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1em;
  padding: 0.8em;
  transition: all 0.3s ease-in-out;
  height: 100%;
  border-radius: 0.5em;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 1)
  );
`;

const ProjectContainer = styled.div`
  opacity: ${({ selected }) => (selected ? '0' : '1')};
  border-radius: 0.5em;
  height: 350px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.secondary};
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  pointer-events: ${({ selectedProject }) =>
    selectedProject ? 'none' : 'auto'};
`;

const ProjectTitle = styled.h2`
  color: #cce2ff;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  color: #cce2ff;
`;

const FeaturedProject = ({ project }) => {
  const { name, photo, techs } = project;
  const [selectedProject, setSelectedProject] = React.useState(null);

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);
  return (
    <>
      {selectedProject ? (
        <ProjectDrawer
          project={selectedProject}
          setProject={setSelectedProject}
        />
      ) : null}
      <ProjectContainer
        imgUrl={photo}
        selected={selectedProject?.name === name}
        selectedProject={selectedProject}
      >
        <DescriptionContainer
          onClick={() => {
            setSelectedProject(project);
          }}
        >
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectTech>
            {techs.map((tech, i) => (
              <TechComponent text={tech} key={i} isExtended />
            ))}
          </ProjectTech>
        </DescriptionContainer>
      </ProjectContainer>
    </>
  );
};

export default FeaturedProject;
