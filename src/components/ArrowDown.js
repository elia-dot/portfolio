import styled from "styled-components";

export const ArrowDown = styled('a')`
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