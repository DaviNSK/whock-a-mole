import styled from 'styled-components';

interface StyleProps {
  left: number;
  top: number;
}

export const HammeImage = styled.img<StyleProps>`
  position: fixed;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: translate(-25%, -60%);
  transition: transform .1s;

  &.active {
    transform: translate(-25%, -60%) rotate(-45deg);
  }
`;
