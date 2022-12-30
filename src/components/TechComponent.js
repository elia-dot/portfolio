import React from 'react';
import { FaReact, FaNodeJs, FaLanguage, FaJs } from 'react-icons/fa';
import { SiMongodb, SiRedux, SiTypescript, SiFlutter } from 'react-icons/si';
import styled from 'styled-components';

import { ReactComponent as NestSvg } from '../svg/nestjs.svg';
import { ReactComponent as Express } from '../svg/express.svg';

const Container = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5em;
  font-size: 0.9em;
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const TechComponent = ({ text, isExtended }) => {
  let icon;
  switch (text) {
    case 'React-native':
      icon = <FaReact />;
      break;
    case 'NodeJS':
      icon = <FaNodeJs />;
      break;
    case 'MongoDB':
      icon = <SiMongodb />;
      break;
    case 'express':
      icon = (
        <Express
          style={{
            width: '14.4px',
            height: '14.4px',
            fill: '#64ffda',
            verticalAlign: 'middle',
          }}
        />
      );
      break;
    case 'i18n':
      icon = <FaLanguage />;
      break;
    case 'Redux':
      icon = <SiRedux />;
      break;
    case 'React':
      icon = <FaReact />;
      break;
    case 'Pug':
      icon = '';
      break;
    case 'Styled components':
      icon = '';
      break;
    case 'JS':
      icon = <FaJs />;
      break;
    case 'nestJS':
      icon = (
        <NestSvg
          style={{
            width: '14.4px',
            height: '14.4px',
            fill: '#64ffda',
            verticalAlign: 'middle',
          }}
        />
      );
      break;
    case 'TypeScript':
      icon = <SiTypescript />;
      break;
    case 'Flutter':
      icon = <SiFlutter />;
      break;
    default:
      icon = null;
  }

  return (
    <Container>
      <Icon>{icon}</Icon>
      {isExtended ? text : ''}
    </Container>
  );
};

export default TechComponent;
