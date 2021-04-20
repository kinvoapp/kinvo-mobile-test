import { HomeCardIconsEnum } from '../constants/enums';
import { ROUTER_ACOES, ROUTER_FUNDOS, ROUTER_PREVIDENCIAS } from '../constants/router';

const acoes_icon = require('../../assets/icons/acoes/acoes.png');
const fundos_icon = require('../../assets/icons/fundos/fundos.png');
const previdencias_icon = require('../../assets/icons/previdencias/previdencias.png');

//icones da homescreen (tela de desafios)
export const getIcon = (icon: HomeCardIconsEnum) => {
  switch (icon) {
    case HomeCardIconsEnum.ACOES:
      return acoes_icon;
    case HomeCardIconsEnum.FUNDOS:
      return fundos_icon;
    case HomeCardIconsEnum.PREVIDENCIAS:
      return previdencias_icon;
    default:
      console.warn('Valor fora do enum dos cards da HomeScene');
      return acoes_icon;
  }
};

//retorna os paths do router para cada item na flatlist da homescreen (tela de desafios)
export const getPath = (titulo: string) => {
  switch (titulo) {
    case 'Ações':
      return ROUTER_ACOES;
    case 'Previdências':
      return ROUTER_PREVIDENCIAS;
    case 'Fundos':
      return ROUTER_FUNDOS;
    default:
      console.warn('Valor fora dos títulos na HomeScene');
      return '';
  }
};

//retorna o formato do valor para tela de previdencias
export const getFormattedValue = ({ format, value }: { format: string; value: number | string }) => {
  switch (format) {
    case 'BRL':
      return value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 });
    case 'D':
      return `D+${value}`;
    case '%':
      return `${value}%`;
    case 'profit':
      return `${value}%`;
    default:
      return value;
  }
};
