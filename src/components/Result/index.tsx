import React from 'react';
import { Container, Content, Loading } from './styles';
import useLotteryResult from '../../hooks/useLotteryResult';
import Ball from '../Ball';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Result = () => {
  const { data, isLoading } = useLotteryResult();

  return (
    <Container>
      <div>
        {isLoading ? (
          <Loading>
            <Skeleton baseColor="#d9d9d9" highlightColor="#ebebeb" />
          </Loading>
        ) : (
          <Content>
            {data?.dezenas.map((num) => (
              <Ball key={num}>
                <span>{num}</span>
              </Ball>
            ))}
          </Content>
        )}
      </div>

      {!isLoading && (
        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      )}
    </Container>
  );
};

export default Result;
