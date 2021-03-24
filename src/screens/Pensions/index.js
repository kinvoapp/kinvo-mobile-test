import React, { useState, useEffect } from "react";
import { orderListAZ } from "../../utils/orderListAZ";
import { getFirstTwoWords } from "../../utils/getFirstTwoWords";
import Layout from "./Layout";

export default function PensionsScreen() {
  const [pensionsData, setPensionsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isTaxPressed, setIsTaxPressed] = useState(false);
  const [isMinimumValuePressed, setIsMinimumValuePressed] = useState(false);
  const [isRedemptionTermPressed, setIsRedemptionTermPressed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const requestData = () => {
    setIsLoading(true);
    fetch("https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/pension")
      .then((response) => response.json())
      .then((json) => setPensionsData(orderListAZ(json.data)))
      .catch((error) => handleError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => requestData(), []);

  useEffect(() => {
    setFilteredData(pensionsData);
  }, [pensionsData]);

  const handleError = (error) => {
    setShowError(true);
    console.error(error);
  };

  const filterTax = () => {
    setIsTaxPressed(!isTaxPressed);

    if (isTaxPressed == false) {
      setFilteredData(filteredData.filter((item) => item.tax == 0));
    } else {
      switch (true) {
        case isMinimumValuePressed == false && isRedemptionTermPressed == false:
          setFilteredData(
            pensionsData.filter(
              (item) => item.minimumValue <= 100 && item.redemptionTerm <= 1
            )
          );
        case isMinimumValuePressed == true && isRedemptionTermPressed == false:
          setFilteredData(
            pensionsData.filter((item) => item.redemptionTerm <= 1)
          );

        case isMinimumValuePressed == false && isRedemptionTermPressed == true:
          setFilteredData(
            pensionsData.filter((item) => item.minimumValue <= 100)
          );
        case isMinimumValuePressed == true && isRedemptionTermPressed == true:
          setFilteredData(pensionsData);
        default:
          setFilteredData(pensionsData);
      }
    }
  };

  const filterMinimumValue = () => {
    setIsMinimumValuePressed(!isMinimumValuePressed);

    if (isMinimumValuePressed == false) {
      setFilteredData(filteredData.filter((item) => item.minimumValue <= 100));
    } else {
      switch (true) {
        case isTaxPressed == false && isRedemptionTermPressed == false:
          setFilteredData(
            pensionsData.filter(
              (item) => item.tax == 0 && item.redemptionTerm <= 1
            )
          );
        case isTaxPressed == true && isRedemptionTermPressed == false:
          setFilteredData(
            pensionsData.filter((item) => item.redemptionTerm <= 1)
          );
        case isTaxPressed == false && isRedemptionTermPressed == true:
          setFilteredData(pensionsData.filter((item) => item.tax == 0));
        case isTaxPressed == true && isRedemptionTermPressed == true:
          setFilteredData(pensionsData);
        default:
          setFilteredData(pensionsData);
      }
    }
  };

  const filterRedemptionTerm = () => {
    setIsRedemptionTermPressed(!isRedemptionTermPressed);

    if (isRedemptionTermPressed == false) {
      setFilteredData(filteredData.filter((item) => item.redemptionTerm <= 1));
    } else {
      switch (true) {
        case isTaxPressed == false && isMinimumValuePressed == false:
          setFilteredData(
            pensionsData.filter(
              (item) => item.tax == 0 && item.minimumValue <= 100
            )
          );
        case isTaxPressed == true && isMinimumValuePressed == false:
          setFilteredData(
            pensionsData.filter((item) => item.minimumValue <= 100)
          );
        case isTaxPressed == false && isMinimumValuePressed == true:
          setFilteredData(pensionsData.filter((item) => item.tax == 0));
        case isTaxPressed == true && isMinimumValuePressed == true:
          setFilteredData(pensionsData);
        default:
          setFilteredData(pensionsData);
      }
    }
  };

  return (
    <Layout
      pensionsData={pensionsData}
      getFirstTwoWords={getFirstTwoWords}
      isLoading={isLoading}
      isTaxPressed={isTaxPressed}
      isMinimumValuePressed={isMinimumValuePressed}
      isRedemptionTermPressed={isRedemptionTermPressed}
      filterTax={filterTax}
      filterMinimumValue={filterMinimumValue}
      filterRedemptionTerm={filterRedemptionTerm}
      filteredData={filteredData}
      showError={showError}
      requestData={requestData}
    />
  );
}
