import LogoIcon from '../../assets/LogoIcon';
import { useLottery } from '../../hooks/useLottery';
import { Container } from './styles';

const Logo = () => {
  const { title } = useLottery();

  return (
    <Container>
      <LogoIcon />
      <span>{title}</span>
    </Container>
  );
};

export default Logo;
