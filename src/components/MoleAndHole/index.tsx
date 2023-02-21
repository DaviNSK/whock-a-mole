import React from 'react';

import Hole from '../../assets/images/WAM_Hole.png';
import Mole from '../../assets/images/WAM_Mole.png';

import * as S from './styles';

interface Props {
  activeMole: boolean;
}

const MoleAndHole: React.FC<Props> = ({ activeMole }) => {
  return <S.Image active={activeMole} src={activeMole ? Mole : Hole} />;
}; 

export default MoleAndHole;
