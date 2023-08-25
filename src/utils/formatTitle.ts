import { LotteryType } from '../types/lottery-types';

export const formatTitle = (filter: LotteryType) => {
  if (filter === LotteryType.MEGA) return 'MEGA-SENA';
  else if (filter === LotteryType.DIASORTE) return 'DIA DE SORTE';
  else return filter.toUpperCase();
};
