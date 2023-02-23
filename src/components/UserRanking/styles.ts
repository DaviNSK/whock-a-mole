import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  background: transparent;
  border: 3px solid #f00;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Title = styled.span`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding-top: 10px;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItemText = styled.span`
  font-size: 12px;
  color: #000;
`;

export const ListItemScore = styled.span`
  font-size: 14px;
  color: #f00;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;
