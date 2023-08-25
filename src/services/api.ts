import { ApiResponse } from '../types/api-types';
import { LotteryType } from '../types/lottery-types';

const API_URL = 'https://loteriascaixa-api.herokuapp.com/api';

export const getLatestLotteryResult = async (
  lottery: LotteryType
): Promise<ApiResponse> => {
  const response = await fetch(`${API_URL}/${lottery}/latest`, {
    method: 'GET',
  });
  const json: ApiResponse = await response.json();
  return json;
};
