import { economyConfig } from '../../data/economy';

export const calculateOfflineSeconds = (lastSave: number, now: number): number =>
  Math.max(0, Math.min(Math.floor((now - lastSave) / 1000), economyConfig.offlineCapSeconds));

export const calculateOfflineCoins = (incomePerSecond: number, seconds: number): number =>
  incomePerSecond * seconds;
