import React from 'react';
import styled from 'styled-components';
import { RiHtml5Line } from 'react-icons/ri';
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiFirebase,
  SiCsharp,
} from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { DiMsqlServer, DiMongodb } from 'react-icons/di';

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
  width: 130px;
  height: 120px;
  font-size: 3em;
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
  width: 130px;
  height: 120px;
  font-size: 3em;
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
            <RiHtml5Line />
            <SkillText>HTML</SkillText>
          </GreenBox>
          <GreenBox>
            <SiCss3 />
            <SkillText>CSS</SkillText>
          </GreenBox>
          <GreenBox>
            <SiJavascript />
            <SkillText>JS</SkillText>
          </GreenBox>
          <GreenBox>
            <SiReact />
            <SkillText>REACT</SkillText>
          </GreenBox>
        </Row>
        <Row>
          <OrangeBox>
            <SiNodeDotJs />
            <SkillText>NODEJS</SkillText>
          </OrangeBox>
          <OrangeBox>
            <GrGraphQl />
            <SkillText>GRAPHQL</SkillText>
          </OrangeBox>
          <OrangeBox>
            <SiFirebase />
            <SkillText>FIREBASE</SkillText>
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
            <DiMongodb />
            <SkillText>MONGODB</SkillText>
          </OrangeBox>
        </Row>
      </SkillsListContainer>
    </SkillsContainer>
  );
};

export default Skills;
