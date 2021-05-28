import React, { useState, useEffect, FC } from "react";
import { ScrollView, View } from "react-native";
import { getWordsFromString } from "../../constants/helper";
import enviroment from "../../constants/enviroment";
import { FundProps } from "./types";
import { FundScreen } from "./style";
import { FundCard } from "./components/";

const Fund: FC = () => {
  const [funds, setFunds] = useState<FundProps[]>([]);

  useEffect(() => {
    fetch(`${enviroment.apiBaseUrl}/funds`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setFunds(response.data);
        }
      });
  }, []);

  return (
    <ScrollView>
      <FundScreen>
        {funds.map((fund) => (
          <FundCard
            key={fund.id}
            id={fund.id}
            name={getWordsFromString(fund.name, 2)}
            type={fund.type}
            rating={fund.rating}
            status={fund.status}
            minimumValue={"R$ " + fund.minimumValue}
            profitability={parseInt(fund.profitability) + "%"}
          />
        ))}
      </FundScreen>
    </ScrollView>
  );
};

export default Fund;
