import { PropsWithChildren, createContext, useState } from 'react';
import { LotteryType } from '../types/lottery-types';

type ILotteryContext = {
  title: string | null;
  filter: LotteryType;
  setTitle: React.Dispatch<React.SetStateAction<string | null>>;
  setFilter: React.Dispatch<React.SetStateAction<LotteryType>>;
};

export const LotteryContext = createContext<ILotteryContext | null>(null);

export const LotteryProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<LotteryType>(LotteryType.MEGA);
  const [title, setTitle] = useState<string | null>(null);

  return (
    <LotteryContext.Provider value={{ title, filter, setTitle, setFilter }}>
      {children}
    </LotteryContext.Provider>
  );
};
