import React, { useState, useEffect } from "react";
import { orderListAZ } from "../../utils/orderListAZ";
import Layout from "./Layout";

export default function StocksScreen() {
  const [stocksData, setStocksData] = useState([]);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState([]);

  const requestData = () => {
    setIsLoading(true);
    fetch("https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks")
      .then((response) => response.json())
      .then((json) => setStocksData(orderListAZ(json.data)))
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => requestData(), []);

  const handleError = (error) => {
    setShowError(true);
    console.error(error);
  };

  const favoriteStock = (id) => {
    const favorites = [...isFavorited];
    if (favorites.includes(id)) {
      const index = favorites.indexOf(id);
      favorites.splice(index, 1);
      setIsFavorited(favorites);
    } else {
      favorites.push(id);
      setIsFavorited(favorites);
    }

    setStocksData(
      stocksData.sort((a, b) => {
        if (favorites.includes(a.id)) {
          return -1;
        }
        if (favorites.includes(b.id)) {
          return 1;
        }
      })
    );
  };

  useEffect(() => setStocksData(orderListAZ(stocksData)), [isFavorited]);

  return (
    <Layout
      stocksData={stocksData}
      isLoading={isLoading}
      showError={showError}
      requestData={requestData}
      isFavorited={isFavorited}
      favoriteStock={favoriteStock}
    />
  );
}
