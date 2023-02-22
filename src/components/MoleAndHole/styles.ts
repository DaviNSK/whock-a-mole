import styled from 'styled-components';

interface MoleProps {
  active: boolean;
}

interface HitMoleProps {
  hitMole: boolean;
}

export const Points = styled.span<HitMoleProps>`
  color: #f00;
  font-size: 25px;
  position: absolute;
  top: -20px;
  left: 20px;
  transition: all 0.5s;
  opacity: ${(props) => (props.hitMole ? '1' : '0')};
  transform: rotate(-45deg);
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const Image = styled.img<MoleProps>`
  margin-top: ${(props) => (props.active ? '-68px' : '0px')};
`;
