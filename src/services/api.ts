import axios from 'axios';
import { NoNetworkError } from '~config/exceptions';
import * as device from '~utils';

const baseURL = '6266f62263e0f382568936e4';

const defaultConfig = {
  baseURL: `https://${baseURL}.mockapi.io/`,
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
