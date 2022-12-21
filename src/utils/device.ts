import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native';

export async function isConnectedNetwork() {
  const connected = await NetInfo.fetch();

  return connected.isConnected;
}

export function getOS() {
  return Platform.OS;
}
