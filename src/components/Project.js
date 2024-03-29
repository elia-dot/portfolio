import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { VscLinkExternal } from 'react-icons/vsc';

const ProjectContainer = styled.div`
  min-height: 300px;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

const DescriptionContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1em;
`;

const ProjectTitle = styled.h2`
  color: #cce2ff;
`;

const ProjectDescription = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1em;
  margin: 0.5em 0;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 1em;
  color: #cce2ff;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1em;
  a {
    color: #cce2ff;
    font-size: 1.5em;
  }
`;

const Project = ({ project }) => {
  const { name, description, techs, ghLinks, webLinks } = project;
  console.log(ghLinks);
  return (
    <ProjectContainer>
      <DescriptionContainer>
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectTech>
          {techs.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </ProjectTech>
        <ProjectLinks>
          {ghLinks.map((ghLink) => (
            <a href={ghLink} target="_blank" rel="noreferrer" key={ghLink}>
              {' '}
              <AiFillGithub />
            </a>
          ))}
          {webLinks.map((webLink) => (
            <a href={webLink} target="_blank" rel="noreferrer" key={webLink}>
              {' '}
              <VscLinkExternal />
            </a>
          ))}
        </ProjectLinks>
      </DescriptionContainer>
    </ProjectContainer>
  );
};

export default Project;
