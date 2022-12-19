import '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  const restNativigation = jest.requireActual('@react-navigation/native');
  return {
    ...restNativigation,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
