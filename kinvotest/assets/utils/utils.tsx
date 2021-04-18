import { HomeCardIconsEnum } from '../constants/enums';
import { ROUTER_PREVIDENCIAS } from '../constants/router';

const acoes_icon = require('../../assets/icons/acoes/acoes.png');
const fundos_icon = require('../../assets/icons/fundos/fundos.png');
const previdencias_icon = require('../../assets/icons/previdencias/previdencias.png');

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

export const getPath = (titulo: string) => {
  switch (titulo) {
    case 'Ações':
      return null;
    case 'Previdências':
      return ROUTER_PREVIDENCIAS;
    case 'Fundos':
      return null;
    default:
      console.warn('Valor fora dos títulos na HomeScene');
      return null;
  }
};

export const getFormattedValue = ({ format, value }: { format: string; value: number }) => {
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
