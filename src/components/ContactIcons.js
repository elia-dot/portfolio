import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiPhoneFill } from 'react-icons/ri';

const IconWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 1.6em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    display: grid;
    place-items: center;
    font-weight: 600;
  }
  &:hover {
    background: #33ffcf;
  }
`;

const IconsContainer = styled.div`
  gap: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactIcons = () => {
  return (
    <IconsContainer>
      <IconWraper>
        <a href="https://github.com/elia-dot/" target="_blank" rel="noreferrer">
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
      <IconWraper>
        <a href="tel:0523954305">
          <RiPhoneFill />
        </a>
      </IconWraper>
      <IconWraper>
        <a href="/images/Elia_Cohen_CV.pdf" target="_blank" rel="noreferrer">
          CV
        </a>
      </IconWraper>
    </IconsContainer>
  );
};

export default ContactIcons;
