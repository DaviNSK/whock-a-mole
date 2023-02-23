import React, { useCallback, useMemo } from 'react';

import * as S from './styles';

interface Props {
  dataList: {
    nickname: string;
    score: number;
  }[];
}

const UserRanking: React.FC<Props> = ({ dataList }) => {
  const sortedDataList = useMemo(() => {
    const newList = dataList.slice(0, MAX_RANKING);

    return newList.sort((a, b) => b.score - a.score);
  }, [dataList]);

  const truncateNickName = useCallback((nickname: string) => {
    return nickname.substring(0, 8) + '...';
  }, []);

  return (
    <S.Container>
      <S.Title>Ranking</S.Title>

      <S.List>
        {sortedDataList.map((item, index) => (
          <S.ListItem key={index}>
            <S.ListItemText>
              #{index + 1} {truncateNickName(item.nickname)}
            </S.ListItemText>
            <S.ListItemScore>{item.score}</S.ListItemScore>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default UserRanking;

//
// Utils
//

const MAX_RANKING = 10;
