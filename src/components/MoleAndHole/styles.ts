import styled from 'styled-components';

interface StyleProps {
  active: boolean;
}
export const Image = styled.img<StyleProps>`
  margin-top: ${(props) => (props.active ? '-68px' : '0px')};
`;
