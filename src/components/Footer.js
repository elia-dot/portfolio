import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

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
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const IconsContainer = styled.div`
  gap: 1em;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const SpanLink = styled(Link)`
  color: #64ffda;
  font-size: 1.2em;
  text-decoration: none;
`;

const IconWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 1.6em;
  padding-top: 0.3em;
  border-radius: 50%;
  background-color: #64ffda;
  a {
    color: #112240;
  }
  &:hover{
      background: #33ffcf;
  }
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
          question don't hesitate to contact me{" "}
          <SpanLink to="/contact">here</SpanLink>.
        </TextContainer>
        <IconsContainer>
          <IconWraper>
            <a
              href="https://github.com/elia-dot/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </IconWraper>
          <IconWraper>
            <a
              href="https://www.linkedin.com/in/elia-cohen-54784397/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </IconWraper>
        </IconsContainer>
      </Container>
      <Container>
        <Rights>© designed & built by Elia Cohen</Rights>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
