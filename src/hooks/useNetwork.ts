import { useRef, useState } from 'react';
import { NoAbortCanceled, NoNetworkError } from '~config/exceptions';

import { isCancel } from '~services/api';
import * as device from '~utils';

export function useNetwork() {
  const [loading, setLoading] = useState<boolean>(false);
  const isErrorNetwork = useRef<boolean>(false);

  async function execute(callback: () => Promise<any>) {
    setLoading(true);
    try {
      if (await device.isConnectedNetwork()) {
        await callback();

        isErrorNetwork.current = false;
      } else {
        isErrorNetwork.current = true;
        throw new NoNetworkError();
      }
    } catch (error) {
      if (isCancel(error)) {
        throw new NoAbortCanceled();
      }
    } finally {
      setLoading(false);
    }
  }

  return { execute, loading, isErrorNetwork };
}
