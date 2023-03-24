type LockingType = {
  defaultInstanceBrowseName: string;
  locked: boolean;
  lockingClient: string;
  lockingUser: string;
  remainingLockTime: number;
  // TODO: define parameters
  initLock: () => void;
  renewLock: () => void;
  exitLock: () => void;
  breakLock: () => void;
};
