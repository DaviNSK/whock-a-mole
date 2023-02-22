import styled from 'styled-components';

interface StyleProps {
  left: number;
  top: number;
}

export const HammeImage = styled.img<StyleProps>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: translate(-35%, -35%);
  transition: transform .1s;

  &.active {
    transform: translate(-35%, -35%) rotate(-45deg);
  }
`;
