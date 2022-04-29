export type AppStackParamsList = {
  Home: undefined;
  Stocks: undefined;
  Funds: undefined;
  Pension: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamsList {}
  }
}
