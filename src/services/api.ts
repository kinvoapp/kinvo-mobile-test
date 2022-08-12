import axios from 'axios';
import { NoNetworkError } from '~config/exceptions';
import { BASE_URL } from '@env';
import * as device from '~utils';

console.log({ BASE_URL });
const defaultConfig = {
  baseURL: `https://${BASE_URL}.mockapi.io/`,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const client = axios.create(defaultConfig);

export function isCancel(exception: any) {
  return axios.isCancel(exception) || exception instanceof AbortSignal;
}

client.interceptors.request.use(async config => {
  if (await device.isConnectedNetwork()) {
    return config;
  }

  throw new NoNetworkError();
});
