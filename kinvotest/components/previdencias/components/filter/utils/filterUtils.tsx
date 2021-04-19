import _ from 'lodash';
import { defaultOptions } from '../../../constants/contants';
import { FilterFunction, FilterOption, PrevidenciasRequestData } from '../../../constants/types';

// função que altera os filtros e opções na própria scene em que está incluída (a responsabilidade de saber que filtros e botões estão selecionados é da scene). Recebe as funções de troca de state da scene.
export const setSelectedFilter = ({
  option: { title },
  setFilter,
  setOptions,
}: {
  option: FilterOption;
  setOptions: (newOptions: FilterOption[]) => void;
  setFilter: (filterArray: Array<FilterFunction>) => void;
}) => {
  let newOptions = defaultOptions;

  const selectedFilter = _.findIndex(newOptions, { title });
  // findIndex retorna -1 para quando não há nenhum index correspondente ao filtro atual.
  if (selectedFilter !== -1) {
    const { isSelected } = newOptions[selectedFilter];
    newOptions[selectedFilter].isSelected = !isSelected;
  }

  setOptions(newOptions);

  const filterArray = buildFilters({ currentOptions: newOptions });

  setFilter(filterArray);
};

// Funcão que constrói o array de funcões de filtros a serem aplicados no array de dados
const buildFilters = ({ currentOptions }: { currentOptions: FilterOption[] }): Array<FilterFunction> => {
  const arrayFilters: Array<FilterFunction> = [];
  _.forEach(currentOptions, (option: FilterOption) => {
    if (option.isSelected) {
      arrayFilters.push(option.filter);
    }
  });

  return arrayFilters;
};

//função que aplica os filtros no array de dados final. Ele filtra cada item com todas as funções no array "currentFilters". Desse jeito, a função se torna genérica para qualquer tipo de filtragem.
export const applyFilters = ({
  currentFilters,
  requestData,
  setFilteredData,
}: {
  currentFilters: Array<FilterFunction>;
  requestData: PrevidenciasRequestData[];
  setFilteredData: (filteredData: PrevidenciasRequestData[]) => void;
}) => {
  let filteredData = requestData;

  if (currentFilters.length > 0) {
    filteredData = _.filter(requestData, (item) => {
      for (let filter of currentFilters) {
        if (!filter(item)) {
          return false;
        }
      }
      return true;
    });
  }

  //ordem alfabética, conforme regra de negócio
  const orderedFilteredData = _.orderBy(filteredData, ['name'], ['asc']);

  setFilteredData(orderedFilteredData);
};
