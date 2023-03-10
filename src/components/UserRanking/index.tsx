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
    const newList = [...dataList];

    return newList.sort((a, b) => b.score - a.score).slice(0, MAX_RANKING);
  }, [dataList]);

  const truncateNickName = useCallback((nickname: string) => {
    if (nickname.length > 8) {
      return `${nickname.substring(0, 8)}...`;
    }

    return nickname.substring(0, 8);
  }, []);

  return (
    <S.Container>
      <S.Title>Ranking</S.Title>

      <S.List>
        {sortedDataList.map((item, index) => (
          <S.ListItem key={index}>
            <S.ListItemText data-testid="ranking">
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
