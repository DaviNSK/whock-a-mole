import styled from 'styled-components';


export const HammeImage = styled.img`
  position: fixed;
  transform: translate(-25%, -60%);
  transition: transform .1s;

  &.active {
    transform: translate(-25%, -60%) rotate(-45deg);
  }
`;
