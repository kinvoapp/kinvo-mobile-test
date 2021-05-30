import React, { useState, useEffect, FC } from "react";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import { getWordsFromString } from "../../constants/helper";
import enviroment from "../../constants/enviroment";
import { PensionProps } from "./types";
import { FiltersContainer, PensionScreen, Separator } from "./style";
import { PensionCard } from "./components";
import Filter from "./components/Filter";
import LoadingScreen from "../Loading/";
import EmptyFilter from "./components/EmptyFilter";
import { SafeAreaView } from "react-native-safe-area-context";

const initialFilters = [
  {
    key: 1,
    name: "SEM TAXA",
    isActive: false,
    filterCallback: (pension: PensionProps) => pension.tax == "0",
  },
  {
    key: 2,
    name: "R$ 100,00",
    isActive: false,
    filterCallback: (pension: PensionProps) => pension.minimumValue == "100",
  },
  {
    key: 3,
    name: "D+1",
    isActive: false,
    filterCallback: (pension: PensionProps) => pension.redemptionTerm == "1",
  },
];

const renderPensionItem: FC<PensionProps> = (pension : PensionProps) => {
  return (
    <PensionCard
      key={pension.id}
      id={pension.id}
      name={getWordsFromString(pension.name, 2)}
      type={pension.type}
      minimumValue={"R$ " + pension.minimumValue}
      profitability={parseInt(pension.profitability) + "%"}
      tax={pension.tax + "%"}
      redemptionTerm={"D+ " + pension.redemptionTerm}
    />
  );
};

const Pension: FC = () => {
  const [pensions, setPensions] = useState<PensionProps[]>([]);
  const [filters, setFilters] = useState(initialFilters);
  const [isReady, setReady] = useState(false);

  const selectFilterHandler = (filterId: number) => {
    const newFilters = filters.map((filter) => {
      if (filter.key === filterId) {
        return { ...filter, isActive: !filter.isActive };
      } else {
        return filter;
      }
    });
    setFilters(newFilters);
  };
  useEffect(() => {
    fetch(`${enviroment.apiBaseUrl}/pension`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setPensions(response.data);
          setReady(true);
        }
      });
  }, []);

  if (isReady === false) {
    return <LoadingScreen />;
  }

  let pensionsList = pensions;

  filters.forEach((filter) => {
    if (filter.isActive) {
      pensionsList = pensionsList.filter(filter.filterCallback);
    }
  });

  /** Mudar valores double para money com , */
  return (
      <PensionScreen>
        <FiltersContainer>


          {filters.map((filter) => (
            <Filter
              key={filter.key}
              isActive={filter.isActive}
              changeFilterActive={() => selectFilterHandler(filter.key)}
            >
              {filter.name}
            </Filter>
          ))}
        </FiltersContainer>

        <Separator />
        <FlatList<PensionProps>
          data={pensionsList}
          renderItem={itemData=>renderPensionItem(itemData.item)}
          ListEmptyComponent={<EmptyFilter/>}
        />

      </PensionScreen>
  );
};

export default Pension;
