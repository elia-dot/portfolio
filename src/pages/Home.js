import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowDownCircle } from 'react-icons/fi';

import { projects } from '../data/project-data';
import Skills from '../components/Skills';
import ContactIcons from '../components/ContactIcons';
import TypeAnimation from '../components/TypeAnimation';
import { ArrowDown } from '../components/ArrowDown';
import FeatureProjectsSection from '../components/FeatureProjectsSection';
import Divider from '../components/Divider';

const HomeContainer = styled.div`
  padding: 1em;
`;

const MainSection = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  justify-content: space-evenly;
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

const NextSection = styled.div`
  margin-inline: auto;
  text-align: center;

  h2 {
    margin: 8px 0;
    color: #cce2ff;
    font-size: 1em;
  }
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
            Experienced in building web and cross platform applications. I can
            create visually appealing interfaces and efficient server side
            functionality
          </HomeText>
        </TitleContainer>
        <ContactIcons />
        <NextSection>
          <SubTitle>Click to see some of my latest projects</SubTitle>
          <ArrowDown href="#projects">
            <FiArrowDownCircle />
          </ArrowDown>
        </NextSection>
      </MainSection>
      <div id="projects">
        <FeatureProjectsSection projects={filteredProjects} />
      </div>
      <div style={{ textAlign: 'center' }} id={filteredProjects.length}>
        <SubTitle>Like what you see?</SubTitle>
        <HomeText>
          Click <SpanLink to="/projects">here</SpanLink> to see more of that
          stuff
        </HomeText>
      </div>
     <Divider/>
      <div>
        <SubTitle>Languages And Technologies: </SubTitle>
        <Skills />
      </div>
    </HomeContainer>
  );
};

export default Home;
