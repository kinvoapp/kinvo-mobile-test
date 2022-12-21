import { renderHook, act, waitFor } from '@testing-library/react-native';
import { useNetwork } from './useNetwork';
import { NoNetworkError } from '~config/exceptions';

jest.mock('react-native', () => ({
  NetInfo: {
    isConnected: {
      fetch: jest.fn(),
    },
  },
}));

// console.log(NetInfo);
test('realizar chamada bem sucedidas', async () => {
  const mockCallback = jest.fn(() => Promise.resolve(true));
  const { result } = renderHook(() => useNetwork());

  expect(result.current.loading).toBeFalsy();

  act(() => {
    result.current.execute(mockCallback);
  });

  expect(result.current.loading).toBeTruthy();

  await waitFor(() => {
    expect(mockCallback).toBeCalled();
  });

  expect(result.current.loading).toBeFalsy();
});

test('realizar chamada mal sucedidas', async () => {
  const mockCallback = jest.fn(() =>
    Promise.reject({
      exception: NoNetworkError,
    }),
  );
  const { result } = renderHook(() => useNetwork());

  expect(result.current.loading).toBeFalsy();

  act(() => {
    result.current.execute(mockCallback);
  });

  expect(result.current.loading).toBeTruthy();

  await waitFor(() => {
    expect(mockCallback).toBeCalledWith();
  });

  expect(result.current.loading).toBeFalsy();
});
