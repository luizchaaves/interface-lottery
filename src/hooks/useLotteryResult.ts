import { useQuery } from 'react-query';
import { useLottery } from './useLottery';
import { getLatestLotteryResult } from '../services/api';

const useLotteryResult = () => {
  const { filter } = useLottery();

  const { data } = useQuery({
    queryFn: () => getLatestLotteryResult(filter),
    queryKey: ['result', filter],
    staleTime: 1000 * 60 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data };
};

export default useLotteryResult;
