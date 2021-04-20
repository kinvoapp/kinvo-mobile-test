import { FilterOption, PrevidenciasSceneFilterEnum } from './types';

//  Opções default do filtro de Previdência. É possível inserir quantos filtros quiser na aplicação somente incrementando esse array de objetos.
export const defaultOptions: FilterOption[] = [
  {
    title: PrevidenciasSceneFilterEnum.Taxa,
    filter: (requestData) => requestData.tax === 0,
    isSelected: false,
  },

  {
    title: PrevidenciasSceneFilterEnum.ValorMinimo,
    filter: (requestData) => requestData.minimumValue === 100,
    isSelected: false,
  },
  {
    title: PrevidenciasSceneFilterEnum.Resgate,
    filter: (requestData) => requestData.redemptionTerm === 1,
    isSelected: false,
  },
];
