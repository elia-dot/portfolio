import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { VscLinkExternal } from 'react-icons/vsc';
import { FiArrowLeftCircle } from 'react-icons/fi';

import Divider from './Divider';
import TechComponent from './TechComponent';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

const Drawer = styled.div`
  opacity: 1;
  padding: 1em;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.secondary};
  z-index: 100;
  transform: translateX(${({ load }) => (load ? '0' : '100%')});
  transition: all 0.3s ease-in-out;
  z-index: 100;

  @media (max-width: 520px) {
    width: 90%;
  }
`;

const CloseRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5em;
  font-size: 1.3em;

  p {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  svg {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2em;
  text-transform: uppercase;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 0.5em;
  margin: 1em 0;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  color: #cce2ff;
  margin: 1em 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 2em;
  a {
    color: #cce2ff;
    font-size: 1.5em;
  }
`;

const ProjectDescription = styled.div``;

const ProjectDrawer = ({ project, setProject }) => {
  const [load, setLoad] = React.useState(false);

  const closeDrawer = (e) => {
    if (e.target === e.currentTarget) {
      setProject(null);
    }
  };

  React.useEffect(() => {
    setLoad(true);
  }, [project]);
  return (
    <Container
      load={load}
      onClick={(e) => {
        closeDrawer(e);
      }}
    >
      <Drawer load={load}>
        <CloseRow>
          <FiArrowLeftCircle
            onClick={() => {
              setProject(null);
            }}
          />
          <p
            onClick={() => {
              setProject(null);
            }}
          >
            Back to Projects
          </p>
        </CloseRow>
        <Title>{project.name}</Title>
        <ImageContainer imgUrl={project.photo} />
        <ProjectDescription>{project.description}</ProjectDescription>
        <Divider />
        <ProjectTech>
          {project.techs.map((tech, i) => (
            <TechComponent text={tech} key={i} isExtended />
          ))}
        </ProjectTech>
        <ProjectLinks>
          {project.ghLinks.map((ghLink) => (
            <a href={ghLink} target="_blank" rel="noreferrer" key={ghLink}>
              {' '}
              <AiFillGithub />
            </a>
          ))}
          {project.webLinks.map((webLink) => (
            <a href={webLink} target="_blank" rel="noreferrer" key={webLink}>
              {' '}
              <VscLinkExternal />
            </a>
          ))}
        </ProjectLinks>
      </Drawer>
    </Container>
  );
};

export default ProjectDrawer;
