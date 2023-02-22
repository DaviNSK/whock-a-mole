import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const Title = styled.span`
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Score = styled.span`
  color: #000;
  font-size: 25px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const ContentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 48%;
  height: 50px;
  background-color: #3fc558;
  color: #fff;
  border: none;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
