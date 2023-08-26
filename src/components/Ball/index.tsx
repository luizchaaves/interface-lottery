import { PropsWithChildren } from 'react';
import { Container } from './styles';

const Ball = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Ball;
