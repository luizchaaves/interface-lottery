import { useEffect, useState } from 'react';
import { useLottery } from '../../hooks/useLottery';
import useLotteryResult from '../../hooks/useLotteryResult';
import { Container } from './styles';
import { ApiResponse } from '../../types/api-types';
import Skeleton from 'react-loading-skeleton';

const Contest = () => {
  const [dataResult, setDataResult] = useState<ApiResponse>();
  const { data, isLoading } = useLotteryResult();
  const { filter } = useLottery();

  useEffect(() => {
    if (data) setDataResult(data);
  }, [data, filter]);

  return (
    <Container>
      <p>Concurso</p>
      {isLoading ? (
        <div>
          <Skeleton baseColor="#e6e6e6" highlightColor="#f5f5f5" width={100} />
        </div>
      ) : (
        <span>
          {dataResult?.concurso} – {dataResult?.data}
        </span>
      )}
    </Container>
  );
};

export default Contest;
