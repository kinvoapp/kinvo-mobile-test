import React, { useState, useEffect, FC } from "react";
import { ScrollView, FlatList } from "react-native";
import { sortAssets } from "../../constants/helper";
import enviroment from "../../constants/enviroment";
import { StockProps } from "./types";
import { StockScreen } from "./style";
import { StockCard } from "./components/";
import LoadingScreen from "../Loading/";
import EmptyStock from "./components/EmptyStock";

const renderStockItem: FC<StockProps> = (stock, changeFavoriteHandler) => {
  return (
    <StockCard
      key={stock.id}
      id={stock.id}
      name={stock.name}
      ticker={stock.ticker}
      minimumValue={"R$ " + stock.minimumValue}
      profitability={parseInt(stock.profitability) + "%"}
      isFavorite={stock.isFavorite}
      changeFavorite={() => changeFavoriteHandler(stock.id)}
    />
  );
};

const Stock: FC = () => {
  const [stocks, setStocks] = useState<StockProps[]>([]);
  const [isReady, setIsReady] = useState(false);

  const changeFavoriteHandler = (stockId: number) => {
    const newStocks = stocks.map((stock) => {
      if (stock.id === stockId) {
        return { ...stock, isFavorite: !stock.isFavorite };
      } else {
        return stock;
      }
    });
    setStocks(newStocks);
  };

  const favorites = sortAssets(stocks.filter((stock) => stock.isFavorite));
  const normalStocks = sortAssets(stocks.filter((stock) => !stock.isFavorite));
  const stockList = favorites.concat(normalStocks);

  useEffect(() => {
    fetch(`${enviroment.apiBaseUrl}/stocks`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          let data = response.data.map((stock: StockProps) => ({
            ...stock,
            isFavorite: false,
          }));
          setStocks(data);
          setIsReady(true);
        }
      });
  }, []);

  if (isReady === false) {
    return <LoadingScreen />;
  }

  return (
      <StockScreen>
        <FlatList<StockProps>
          data={stockList}
          renderItem={(itemData) => renderStockItem(itemData.item, changeFavoriteHandler)}
          ListEmptyComponent={<EmptyStock/>}
        />       
      </StockScreen>
  );
};

export default Stock;
