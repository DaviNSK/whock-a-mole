import React, { useMemo } from 'react';

import Hole from 'assets/images/WAM_Hole.png';
import Mole from 'assets/images/WAM_Mole.png';

import * as S from './styles';

interface Props {
  points: number;
  activeMole: boolean;
  hitMole: boolean;
}

const MoleAndHole: React.FC<Props> = ({ points, activeMole, hitMole }) => {
  const verifyActiveMole = useMemo(() => {
    if (hitMole) {
      return false;
    }

    return activeMole;
  }, [hitMole, activeMole]);

  return (
    <>
      <S.Points hitMole={hitMole}>{points}</S.Points>
      <S.Image
        active={activeMole}
        src={verifyActiveMole ? Mole : Hole}
        alt={verifyActiveMole ? 'mole image' : 'hole image'}
      />
    </>
  );
};

export default MoleAndHole;
