import React, { useEffect, useState } from "react";
import StockCard from "../../components/Card/StockCard";
import { ApiResponse, Stock } from "../../utils/apiTypes";
import api from "../../services/api";
import { useStocks } from "../../services/context";
import Loading from "../Loading";
import CardList from "../../components/CardList";
import ErrorScreen from "../ErrorScreen/index";

function sortStocks(a: Stock, b: Stock) {
  if (!!a.isFavorite === !!b.isFavorite) {
    return a.name > b.name ? 1 : -1;
  } else {
    return !a.isFavorite && b.isFavorite ? 1 : -1;
  }
}

function Stocks() {
  const [stocks, setStocks] = useStocks();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getStocks() {
    console.log("a");
    try {
      console.log("b");
      setLoading(true);
      setError(false);
      const response = await api.get<ApiResponse<Stock>>("/stocks");

      // array of favorited stocks id
      const favoritedStocksIds = stocks
        .filter((stock) => stock.isFavorite)
        .map((s) => s.id);

      // verify if it was a favorited stock
      const returnedStocks = response.data.data.map((stock) =>
        favoritedStocksIds.includes(stock.id)
          ? { ...stock, isFavorite: true }
          : stock
      );
      const sorted = returnedStocks.sort(sortStocks);
      setStocks(sorted);
      setLoading(false);
    } catch {
      setError(true);
    }
  }

  useEffect(() => {
    getStocks();
  }, []);

  const toggleFavorite = (id: number) => {
    const newStocks = stocks.map((stock) =>
      stock.id === id ? { ...stock, isFavorite: !stock.isFavorite } : stock
    );
    const sorted = newStocks.sort(sortStocks);
    setStocks(sorted);
  };

  return error ? (
    <ErrorScreen
      message="Não foi possível se conectar ao banco de fundos."
      action={{
        label: "Tentar Novamente",
        onPress: getStocks,
      }}
    />
  ) : loading ? (
    <Loading />
  ) : (
    <CardList
      style={{ padding: 20 }}
      data={stocks}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <StockCard
          toggleFavorite={() => toggleFavorite(item.id)}
          key={item.id}
          {...item}
        />
      )}
    />
  );
}

export default Stocks;
