import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import {
  fetchRankingList,
  sendResultGame,
} from 'config/repository/UserRanking';

export type AppState = {
  ranking: { data: { nickname: string; score: number }[]; loading: boolean };
  currentPlayerNickname: string;
};

const initialState: AppState = {
  ranking: { data: [], loading: false },
  currentPlayerNickname: '',
};

export const fetchList = createAsyncThunk('app/ranking', async () => {
  try {
    const response: AxiosResponse<any> = await fetchRankingList();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const sendResult = createAsyncThunk(
  'app/sendResult',
  async ({ score }: { score: number }, { getState }) => {
    const { app } = getState() as { app: AppState };

    try {
      const response: AxiosResponse<any> = await sendResultGame({
        nickname: app.currentPlayerNickname,
        score,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentPlayerNickname: (
      state,
      action: PayloadAction<{ nickname: string }>,
    ) => {
      state.currentPlayerNickname = action.payload.nickname;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.pending, (state) => {
      state.ranking.loading = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.ranking.data = action.payload;
      state.ranking.loading = false;
    });
  },
});

const { reducer, name } = appSlice;
export { name, appSlice };
export default reducer;
