import React from 'react';
import styled from 'styled-components';

const DivderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  margin: 2em auto;
`;

const Line = styled.div`
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

const Divider = () => {
  return (
    <DivderContainer>
      <Dot />
      <Line />
      <Dot />
    </DivderContainer>
  );
};

export default Divider;
