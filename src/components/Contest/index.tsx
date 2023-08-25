import { useEffect, useState } from 'react';
import { useLottery } from '../../hooks/useLottery';
import useLotteryResult from '../../hooks/useLotteryResult';
import { Container } from './styles';
import { ApiResponse } from '../../types/api-types';

const Contest = () => {
  const [dataResult, setDataResult] = useState<ApiResponse>();
  const { data } = useLotteryResult();
  const { filter } = useLottery();

  useEffect(() => {
    if (data) setDataResult(data);
  }, [data, filter]);

  return (
    <Container>
      {dataResult && (
        <>
          <p>Concurso</p>
          <span>
            {dataResult.concurso} – {dataResult.data}
          </span>
        </>
      )}
    </Container>
  );
};

export default Contest;
