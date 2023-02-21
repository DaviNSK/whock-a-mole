import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const ListMoles = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 100px;
`

export const MoleItem = styled.div`
  width: 25%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`