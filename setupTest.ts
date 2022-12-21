import '@testing-library/react-native';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('react-native-iphone-x-helper');

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

// jest.mock('@react-navigation/stack');
