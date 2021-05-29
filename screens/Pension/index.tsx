import React, { useState, useEffect, FC } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { getWordsFromString } from "../../constants/helper";
import enviroment from "../../constants/enviroment";
import { PensionProps } from "./types";
import { FiltersContainer, PensionScreen, Separator } from "./style";
import { PensionCard } from "./components";
import Filter from "./components/Filter";

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

const Pension: FC = () => {
  const [pensions, setPensions] = useState<PensionProps[]>([]);
  const [filters, setFilters] = useState(initialFilters);

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
  console.log(filters);
  useEffect(() => {
    fetch(`${enviroment.apiBaseUrl}/pension`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setPensions(response.data);
        }
      });
  }, []);

  let pensionsList = pensions;

  filters.forEach((filter) => {
    if (filter.isActive) {
      pensionsList = pensionsList.filter(filter.filterCallback);
    }
  });

  /** Mudar valores double para money com , */
  return (
    <ScrollView>
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

        {pensionsList.map((pension) => (
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
        ))}
      </PensionScreen>
    </ScrollView>
  );
};

export default Pension;
