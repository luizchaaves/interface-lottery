import {
  diasorte,
  lotofacil,
  lotomania,
  megasena,
  quina,
  timemania,
} from '../styles/themes';
import { LotteryType } from '../types/lottery-types';

export const getTheme = (filter: LotteryType) => {
  switch (filter) {
    case megasena.title:
      return megasena;
    case quina.title:
      return quina;
    case lotofacil.title:
      return lotofacil;
    case lotomania.title:
      return lotomania;
    case timemania.title:
      return timemania;
    case diasorte.title:
      return diasorte;
    default:
      return megasena;
  }
};
