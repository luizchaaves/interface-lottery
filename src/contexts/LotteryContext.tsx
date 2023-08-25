import { PropsWithChildren, createContext, useState } from 'react';
import { LotteryType } from '../types/lottery-types';

type ILotteryContext = {
  filter: LotteryType;
  setFilter: React.Dispatch<React.SetStateAction<LotteryType>>;
};

export const LotteryContext = createContext<ILotteryContext | null>(null);

export const LotteryProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<LotteryType>(LotteryType.MEGA);

  return (
    <LotteryContext.Provider value={{ filter, setFilter }}>
      {children}
    </LotteryContext.Provider>
  );
};
