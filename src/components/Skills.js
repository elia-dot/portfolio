import React from 'react';
import styled from 'styled-components';
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiCsharp,
  SiTypescript,
  SiFlutter,
} from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { DiMsqlServer } from 'react-icons/di';
import { FaAngular } from 'react-icons/fa';

const SkillsContainer = styled.div``;

const List = styled.div`
  margin-top: -1em;
  div {
    margin-bottom: 0.5em;
  }
`;

const ListItem = styled.p`
  display: inline-block;
`;

const GreenArrow = styled.p`
  display: inline-block;
  margin-right: 0.5em;
  color: #80ff80;
`;

const OrangeArrow = styled.p`
  display: inline-block;
  margin-right: 0.5em;
  color: #ffa31a;
`;

const SkillsListContainer = styled.div`
  margin: 3em auto;
`;

const Row = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  margin-bottom: 2em;
  @media (max-width: 950px) {
    justify-content: center;
  }
`;

const GreenBox = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3em;
  width: 100px;
  height: 90px;
  font-size: 2.5em;
  color: #cce2ff;
  position: relative;
  border-radius: 0.1em;
  overflow: hidden;
  display: grid;
  place-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 0.2em;
    height: 100%;
    left: 0;
    top: 0;
    background: #80ff80;
  }
`;

const OrangeBox = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0.3em;
  width: 100px;
  height: 90px;
  font-size: 2.5em;
  color: #cce2ff;
  position: relative;
  border-radius: 0.1em;
  overflow: hidden;
  display: grid;
  place-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 0.2em;
    height: 100%;
    left: 0;
    top: 0;
    background: #ffa31a;
  }
`;

const SkillText = styled.p`
  font-size: 0.4em;
  margin-top: 0.2em;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <List>
        <div>
          <GreenArrow>➤</GreenArrow>{' '}
          <ListItem>Language/Tech i'm comfortable with</ListItem>
        </div>
        <div>
          <OrangeArrow>➤</OrangeArrow>{' '}
          <ListItem>Language/Tech I know and used</ListItem>
        </div>
      </List>
      <SkillsListContainer>
        <Row>
          <GreenBox>
            <SiCss3 />
            <SkillText>CSS</SkillText>
          </GreenBox>
          <GreenBox>
            <SiJavascript />
            <SkillText>JS</SkillText>
          </GreenBox>
          <GreenBox>
            <SiTypescript />
            <SkillText>TS</SkillText>
          </GreenBox>
          <GreenBox>
            <SiReact />
            <SkillText>React</SkillText>
          </GreenBox>
          <GreenBox>
            <SiFlutter />
            <SkillText>Flutter</SkillText>
          </GreenBox>
          <GreenBox>
            <SiNodeDotJs />
            <SkillText>Node</SkillText>
          </GreenBox>
        </Row>
        <Row>
          <OrangeBox>
            <GrGraphQl />
            <SkillText>GtaphQL</SkillText>
          </OrangeBox>
          <OrangeBox>
            <SiCsharp />
            <SkillText>C#</SkillText>
          </OrangeBox>
          <OrangeBox>
            <DiMsqlServer />
            <SkillText>SQL</SkillText>
          </OrangeBox>

          <OrangeBox>
            <FaAngular />
            <SkillText>Angular</SkillText>
          </OrangeBox>
        </Row>
      </SkillsListContainer>
    </SkillsContainer>
  );
};

export default Skills;
