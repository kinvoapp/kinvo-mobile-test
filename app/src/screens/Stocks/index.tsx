import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Container from "../../components/Container";
import StockCard from "../../components/Card/StockCard";
import { ApiResponse, Stock } from "../../utils/apiTypes";
import api from "../../services/api";
import { FlatList } from "react-native-gesture-handler";

function Stocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  useEffect(() => {
    async function getStocks() {
      try {
        const response = await api.get<ApiResponse<Stock>>("/stocks");
        setStocks(response.data.data);
      } catch {}
    }
    getStocks();
  }, []);

  return (
    <FlatList
      style={{ padding: 20 }}
      data={stocks}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <StockCard key={item.id} {...item} />}
    />
  );
}

export default Stocks;
