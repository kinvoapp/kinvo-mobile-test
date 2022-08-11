import { useState } from 'react';
import { NoAbortCanceled, NoNetworkError } from '~config/exceptions';

import { isCancel } from '~services/api';
import * as device from '~utils';

export function useNetwork() {
  const [loading, setLoading] = useState<boolean>(false);

  async function execute(callback: () => Promise<any>) {
    setLoading(false);
    try {
      if (await device.isConnectedNetwork()) {
        await callback();
      } else {
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

  return { execute, loading };
}
