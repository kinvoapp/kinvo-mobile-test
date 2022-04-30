import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getStocks from '~/useCases/GetStocks';
import { LocalStorage } from '~/services/storage';

interface StockProviderProps {
  children: ReactNode;
}

interface StockProps {
  stocks: Stock[];
  isLoading: boolean;
  favoritesStocks: number[];
  hasError: boolean;
  handleFavoriteStock: (stockId: number) => void;
  loadStocks: () => void;
}

export const StockContext = createContext({} as StockProps);

const StockProvider: React.FC<StockProviderProps> = ({ children }) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [favoritesStocks, setFavoritesStocks] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleFavoriteStock = useCallback(async (stockId: number) => {
    const favoritesStock = await AsyncStorage.getItem(
      LocalStorage.FavoriteStocks,
    );

    const storageFavoritesStock = (
      favoritesStock && favoritesStock?.length > 0
        ? JSON.parse(favoritesStock)
        : []
    ) as number[];

    const index = storageFavoritesStock.findIndex(id => id === stockId);

    if (index !== -1) {
      storageFavoritesStock.splice(index, 1);

      await AsyncStorage.setItem(
        LocalStorage.FavoriteStocks,
        JSON.stringify(storageFavoritesStock),
      );

      setFavoritesStocks(storageFavoritesStock);
      return;
    }

    const newFavoritesList = [...storageFavoritesStock, stockId];

    await AsyncStorage.setItem(
      LocalStorage.FavoriteStocks,
      JSON.stringify(newFavoritesList),
    );
    setFavoritesStocks(newFavoritesList);
  }, []);

  const orderStocks = useCallback(
    (stocksList: Stock[]) => {
      return stocksList.sort((a, b) => {
        const isAFavorite = favoritesStocks.some(
          favoriteId => favoriteId === a.id,
        );

        if (isAFavorite) return -1;

        const isBFavorite = favoritesStocks.some(
          favoriteId => favoriteId === b.id,
        );

        if (isBFavorite) return 1;

        return a.name.localeCompare(b.name);
      });
    },

    [favoritesStocks],
  );

  const loadStocks = useCallback(async () => {
    try {
      setIsLoading(true);

      const stocksList = orderStocks(await getStocks());

      setHasError(false);
      setStocks(stocksList);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderStocks]);

  useEffect(() => {
    async function loadFavoriteStocks() {
      const data = await AsyncStorage.getItem(LocalStorage.FavoriteStocks);

      if (data) {
        setFavoritesStocks(JSON.parse(data));
      }
    }

    loadFavoriteStocks();
  }, []);

  const value = useMemo(
    () => ({
      stocks,
      isLoading,
      favoritesStocks,
      hasError,
      handleFavoriteStock,
      loadStocks,
    }),
    [
      favoritesStocks,
      hasError,
      isLoading,
      stocks,
      loadStocks,
      handleFavoriteStock,
    ],
  );

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};

export default StockProvider;
