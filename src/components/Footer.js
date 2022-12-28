import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContactIcons from './ContactIcons';

const FooterContainer = styled.section`
  background: rgba(0, 0, 0, 0.3);
  position: static;
  bottom: 0;
  left: 0;
  min-height: 200px;
  width: 100%;
  padding: 1em 20%;
`;

const Container = styled.div`
  width: 100%;
  margin: 2em 0;
  display: flex;
  gap: 16px;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const SpanLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2em;
  text-decoration: none;
`;

const Rights = styled.p`
  margin: 0 auto;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <TextContainer>
          Thanks for scrolling all the way down here! <br /> If you have any
          question don't hesitate to contact me{' '}
          <SpanLink to="/contact">here</SpanLink>.
        </TextContainer>
        <ContactIcons />
      </Container>
      <Container>
        <Rights>© designed & built by Elia Cohen</Rights>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
