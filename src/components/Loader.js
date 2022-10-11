import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.imageSize * 2.2}px;
  height: ${(props) => props.imageSize * 2.2}px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: #112240;
  position: relative;
  clip-path: circle(50%);
  opacity: ${({ loaderOpacity }) => loaderOpacity};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: conic-gradient(
      #64ffda 0 calc(${({ borderLenfth }) => borderLenfth / 100} * 360deg),
      black calc(${({ borderLenfth }) => borderLenfth / 100} * 360deg) 360deg
    );
    z-index: -3;
  }

  &::after {
    content: '';
    position: absolute;
    width: 95%;
    height: 95%;
    top: 2.5%;
    left: 2.5%;
    background-color: #112240;
    border-radius: 50%;
    z-index: -2;
  }

  img {
    width: ${(props) => props.imageSize}px;
  }
`;

const Logo = styled.img`
  width: ${(props) => props.imageSize}px;
`;

const Loader = ({ setFinishedAnimation }) => {
  const [borderLength, setBorderLength] = React.useState(0);
  const [imageSize, setImageSize] = React.useState(75);
  const [loaderOpacity, setLoaderOpacity] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (borderLength < 100) {
        setBorderLength((borderLength) => borderLength + 1);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [borderLength]);

  React.useEffect(() => {
    if (borderLength === 100) {
      const interval = setInterval(() => {
        if (imageSize <= 250) {
          setImageSize((imageSize) => imageSize + 2);
        }
      }, 2);

      return () => clearInterval(interval);
    }
  }, [borderLength, imageSize]);

  React.useEffect(() => {
    if (borderLength === 100) {
      const opacityInterval = setInterval(() => {
        if (loaderOpacity >= 0) {
          setLoaderOpacity((loaderOpacity) => loaderOpacity - 0.01);
        }
      }, 5);
      return () => clearInterval(opacityInterval);
    }
  }, [borderLength, loaderOpacity]);

    React.useEffect(() => {
      if (loaderOpacity <= 0) setFinishedAnimation(true);
    }, [loaderOpacity, setFinishedAnimation]);

  return (
    <Container
      imageSize={imageSize}
      borderLenfth={borderLength}
      loaderOpacity={loaderOpacity}
    >
      <Logo src="./images/logo.svg" alt="loader" imageSize={imageSize} />
    </Container>
  );
};

export default Loader;
