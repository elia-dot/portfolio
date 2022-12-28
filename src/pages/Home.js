import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { FiArrowDownCircle } from 'react-icons/fi';

import { projects } from '../data/project-data';
import FeaturedProject from '../components/FeaturedProject';
import Skills from '../components/Skills';
import ContactIcons from '../components/ContactIcons';
import TypeAnimation from '../components/TypeAnimation';

const HomeContainer = styled.div`
  padding: 1em;
`;

const MainSection = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-evenly;
`;

const ArrowDown = styled('a')`
  all: unset;
  text-align: center;
  cursor: pointer;
  font-size: 50px;
  transition: color 0.2s linear, font-size 0.2s linear;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 53px;
  }
`;
const HomeTitle = styled.h1`
  font-size: 4vw;
  color: #cce2ff;
  margin: 8px 0;

  @media (max-width: 950px) {
    font-size: 5vw;
  }

  @media (max-width: 430px) {
    font-size: 10vw;
  }
`;
const HomeSubTitle = styled.h1`
  font-size: 3.5vw;
  margin-bottom: 1em;

  @media (max-width: 950px) {
    font-size: 4.5vw;
  }

  @media (max-width: 430px) {
    font-size: 9vw;
  }
`;

const HomeText = styled.p`
  font-size: 1.5vw;
  line-height: 2.2vw;

  @media (max-width: 950px) {
    font-size: 2.5vw;
    line-height: 4.5vw;
  }

  @media (max-width: 430px) {
    font-size: 5vw;
    line-height: 7.8vw;
  }
`;

const SpacialText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;


const TitleContainer = styled.div`
  padding: 2em 0;
`;

const Container = styled.div`
  width: 80%;
  margin: 3em auto;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const DivderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  margin: 2em auto;
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
  font-size: 1.5em;
  margin-bottom: 1.5em;
`;

const SpanLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2em;
  text-decoration: none;
`;

const Home = () => {
  const filteredProjects = projects.filter((project) => project.featured);
  return (
    <HomeContainer>
      <MainSection>
        <TitleContainer>
          <SpacialText>Hi, my name is</SpacialText>
          <HomeTitle>Elia Cohen.</HomeTitle>
          <HomeSubTitle>
            a father, husband and{' '}
            <TypeAnimation
              text={[
                'front-end',
                'back-end',
                'full-stack',
                'mobile',
                'programmer',
              ]}
              speed={200}
            />
          </HomeSubTitle>
          <HomeText>
            Experienced in building web and cross platform applications, with
            skills in front end and back end development. I can create visually
            appealing interfaces and efficient server side functionality
          </HomeText>
        </TitleContainer>
 
          <ContactIcons />
        
        <ArrowDown href="#projects">
          <FiArrowDownCircle />
        </ArrowDown>
      </MainSection>
      <Container id="projects">
        <SubTitle>Projects iv'e worked on recently :</SubTitle>
        {filteredProjects.map((project, i) => (
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            key={i}
            duration={0.7}
          >
            <FeaturedProject project={project} />
          </ScrollAnimation>
        ))}
      </Container>
      <Container style={{ textAlign: 'center' }}>
        <SubTitle>Like what you see?</SubTitle>
        <HomeText>
          Click <SpanLink to="/projects">here</SpanLink> to see more of that
          stuff
        </HomeText>
      </Container>
      <DivderContainer>
        <Dot />
        <Divider />
        <Dot />
      </DivderContainer>
      <Container>
        <SubTitle>Languages And Technologies: </SubTitle>
        <Skills />
      </Container>
    </HomeContainer>
  );
};

export default Home;
