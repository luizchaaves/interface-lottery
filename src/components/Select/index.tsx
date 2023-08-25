import { Container, SelectComponent } from './styles';
import ArrowIcon from '../../assets/ArrowIcon';
import { LotteryType } from '../../types/lottery-types';
import { useLottery } from '../../hooks/useLottery';

const Select = () => {
  const { filter, setFilter } = useLottery();

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value = target.value as LotteryType;
    setFilter(value);
  };

  return (
    <Container>
      <SelectComponent onChange={(e) => handleChange(e)} value={filter}>
        <option value={LotteryType.MEGA}>MEGA-SENA</option>
        <option value={LotteryType.QUINA}>QUINA</option>
        <option value={LotteryType.LOTOFACIL}>LOTOFACIL</option>
        <option value={LotteryType.LOTOMANIA}>LOTOMANIA</option>
        <option value={LotteryType.TIMEMANIA}>TIMEMANIA</option>
        <option value={LotteryType.DIASORTE}>DIA DE SORTE</option>
      </SelectComponent>
      <ArrowIcon />
    </Container>
  );
};

export default Select;
