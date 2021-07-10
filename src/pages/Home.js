import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { projects } from "../data/project-data";
import FeaturedProject from "../components/FeaturedProject";

const HomeContainer = styled.section`
  padding: 1em;
`;
const HomeTitle = styled.h1`
  font-size: 3em;
  color: #cce2ff;
`;
const HomeSubTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const HomeText = styled.p``;

const SpacialText = styled.p`
  color: #64ffda;
`;

const TitleContainer = styled.div`
  width: 80%;
  margin: 4em auto;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const LinkButton = styled.button`
  background: none;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 0.8em 2em;
  align-self: flex-end;
  margin-top: 2em;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.7s linear;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0em auto;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const DivderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  margin: 4em auto;
`;

const Divider = styled.div`
  height: 3px;
  background-color: #004db3;
  width: 90%;
`;
const Dot = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #004db3;
`;

const SubTitle = styled.h2`
  color: #cce2ff;
  font-size: 1.2em;
  margin-bottom: 1em;
`;

const SpanLink = styled(Link)`
color: #64ffda;
font-size: 1.2em;
text-decoration: none;
`

const Home = () => {
  const filteredProjects = projects.filter(
    (project) => project.featured === true
  );
  return (
    <HomeContainer>
      <TitleContainer>
        <SpacialText>Hi, my name is</SpacialText>
        <HomeTitle>Elia Cohen.</HomeTitle>
        <HomeSubTitle>a father, husband and programer</HomeSubTitle>
        <HomeText>
          I'm a web developer, mostly focused on the front-end, using modern technologies. 
        </HomeText>
      </TitleContainer>
      <Container>
        <LinkButton as={Link} to="/contact">
          Contact me
        </LinkButton>
      </Container>
      <DivderContainer>
        <Dot />
        <Divider />
        <Dot />
      </DivderContainer>
      <Container>
        <SubTitle>Projects iv'e worked on recently :</SubTitle>
        {filteredProjects.map((project, i) => (
          <FeaturedProject project={project} key={i} />
        ))}
      </Container>
      <DivderContainer>
        <Dot />
        <Divider />
        <Dot />
      </DivderContainer>
      <Container style = {{textAlign: 'center'}}>
        <SubTitle>Like what you see?</SubTitle>
        <HomeText>Click <SpanLink to = '/projects'>here</SpanLink> to see more of that stuff</HomeText>
      </Container>
    </HomeContainer>
  );
};

export default Home;
