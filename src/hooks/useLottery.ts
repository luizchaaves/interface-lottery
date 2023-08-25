import { useContext } from 'react';
import { LotteryContext } from '../contexts/LotteryContext';

export const useLottery = () => {
  const context = useContext(LotteryContext);
  if (context === null)
    throw new Error('useContext deve estar dentro do provider');
  return context;
};
