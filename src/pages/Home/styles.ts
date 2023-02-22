import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: hidden;
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
  padding-top: 40px;
`;

export const MoleItem = styled.div`
  width: 25%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FakeMole = styled.div`
  width: 200px;
  height: 150px;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
`;

export const TitleInformation = styled.span`
  color: #f00;
  font-size: 20px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  margin-bottom: 10px;
`;

export const Score = styled.span`
  color: #000;
  font-size: 25px;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const Time = styled(Score)``;
