import React, { useEffect, useState } from "react";
import StockCard from "../../components/Card/StockCard";
import { ApiResponse, Stock } from "../../utils/apiTypes";
import api from "../../services/api";
import { useStocks } from "../../services/context";
import Loading from "../Loading";
import CardList from "../../components/CardList";

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
  useEffect(() => {
    async function getStocks() {
      try {
        setLoading(true);
        const response = await api.get<ApiResponse<Stock>>("/stocks");
        // array of favorited stocks id
        const favoritedStocksIds = stocks
          .filter((stock) => stock.isFavorite)
          .map((s) => s.id);

        const returnedStocks = response.data.data.map((stock) =>
          // verify if it was a favorited stock
          favoritedStocksIds.includes(stock.id)
            ? { ...stock, isFavorite: true }
            : stock
        );
        const sorted = returnedStocks.sort(sortStocks);
        setStocks(sorted);
        setLoading(false);
      } catch {}
    }
    getStocks();
  }, []);

  const toggleFavorite = (id: number) => {
    const newStocks = stocks.map((stock) =>
      stock.id === id ? { ...stock, isFavorite: !stock.isFavorite } : stock
    );
    const sorted = newStocks.sort(sortStocks);
    setStocks(sorted);
  };

  return loading ? (
    <Loading />
  ) : (
    <CardList
      style={{ padding: 20 }}
      data={stocks}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <StockCard toggleFavorite={toggleFavorite} key={item.id} {...item} />
      )}
    />
  );
}

export default Stocks;
