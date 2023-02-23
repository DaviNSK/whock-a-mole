import api from '../../api-service';
import { UserRanking } from './types';

export const fetchRankingList = () => {
  return api.get('api/gaming1/v1/user_ranking');
};

export const sendResultGame = (data: UserRanking) => {
  return api.post('api/gaming1/v1/user_ranking', data);
};
