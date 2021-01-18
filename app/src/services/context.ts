import { createContext, useContext, useState } from "react";
import { Stock } from "../utils/apiTypes";

export function useContextState() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  // const [funds, setFunds] = useState<Fund[]>([]);
  // const [pensions, setPensions] = useState<Pension[]>([]);
  return { stocks, setStocks };
}

export const Context = createContext<ReturnType<typeof useContextState>>({
  stocks: [],
  setStocks: () => {},
});

export function useStocks() {
  const { stocks, setStocks } = useContext(Context);
  return [stocks, setStocks] as const;
}

// function useFunds() {}

// function usePensions() {}
