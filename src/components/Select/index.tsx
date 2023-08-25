import { Container, SelectComponent } from './styles';
import ArrowIcon from '../../assets/ArrowIcon';
import { LotteryType } from '../../types/lottery-types';
import { useLottery } from '../../hooks/useLottery';
import { formatTitle } from '../../utils/formatTitle';
import { useEffect } from 'react';

const Select = () => {
  const { filter, setFilter, setTitle } = useLottery();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as LotteryType;
    setFilter(value);
  };

  useEffect(() => {
    setTitle(formatTitle(filter));
  }, [filter, setTitle]);

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
