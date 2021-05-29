import React, { FC } from "react";
import { Screen } from "../../styles";
import { HomeScreen } from "./style";
import { NavigationCard } from "./components/";
import FundLogo from "../../assets/icons/fund.svg";
import PensionLogo from "../../assets/icons/pension.svg";
import StockLogo from "../../assets/icons/stock.svg";
interface Props {
  navigation: any; // TODO - refatorar esse any
}

const Home: FC<Props> = ({ navigation }) => {
  const changeScreenHandler = (path: string) => {
    navigation.navigate(path);
  };

  return (
    <HomeScreen>
      <NavigationCard
        navigationHandler={changeScreenHandler.bind(null, "Stock")}
        logo={<StockLogo />}
        title="Ações"
        subtitle="Nacionais"
      />
      <NavigationCard
        newSection={true}
        navigationHandler={changeScreenHandler.bind(null, "Fund")}
        logo={<FundLogo />}
        title="Fundos"
        subtitle="De investimentos"
      />
      <NavigationCard
        navigationHandler={changeScreenHandler.bind(null, "Pension")}
        logo={<PensionLogo />}
        title="Previdências"
        subtitle="Privadas"
      />
    </HomeScreen>
  );
};

export default Home;
