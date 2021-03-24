import React, { useState, useEffect } from "react";
import { orderListAZ } from "../../utils/orderListAZ";
import { getFirstTwoWords } from "../../utils/getFirstTwoWords";
import Layout from "./Layout";

export default function FundsScreen() {
  const [fundsData, setFundsData] = useState([]);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const requestData = () => {
    setIsLoading(true);
    fetch("https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds")
      .then((response) => response.json())
      .then((json) => setFundsData(orderListAZ(json.data)))
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => requestData(), []);

  const handleError = (error) => {
    setShowError(true);
    console.error(error);
  };

  return (
    <Layout
      fundsData={fundsData}
      getFirstTwoWords={getFirstTwoWords}
      isLoading={isLoading}
      showError={showError}
      requestData={requestData}
    />
  );
}
