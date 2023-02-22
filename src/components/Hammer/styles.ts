import styled from 'styled-components';

interface StyleProps {
  left: number;
  top: number;
  activeHammer: boolean;
}

export const HammeImage = styled.img<StyleProps>`
  position: fixed;
  z-index: 1000;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: ${(props) => (props.activeHammer ? 'rotate(-45deg)' : '')};
`;
