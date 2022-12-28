import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { VscLinkExternal } from 'react-icons/vsc';

const ProjectContainer = styled.div`
  padding: 1em;
  border-radius: 1em;
  display: flex;
  gap: 1em;
  margin-bottom: 2em;
  transition: all 1s;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.colors.secondary};
  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled.div`
  min-width: 50%;
  height: 300px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
`;

const DescriptionContainer = styled.div`
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
const FeaturedProject = ({ project }) => {
  const { name, photo, description, techs, ghLink, webLink } = project;
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
          <a href={ghLink} target="_blank" rel="noreferrer">
            {' '}
            <AiFillGithub />
          </a>
          <a href={webLink} target="_blank" rel="noreferrer">
            {' '}
            <VscLinkExternal />
          </a>
        </ProjectLinks>
      </DescriptionContainer>
      <ImageContainer imgUrl={photo} />
    </ProjectContainer>
  );
};

export default FeaturedProject;
