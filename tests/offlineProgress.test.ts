import { expect, it } from 'vitest';
import { calculateOfflineCoins, calculateOfflineSeconds } from '../src/game/systems/offlineProgress';
it('caps offline time', ()=> expect(calculateOfflineSeconds(Date.now()-999999999, Date.now())).toBeLessThanOrEqual(14400));
it('computes offline coins', ()=> expect(calculateOfflineCoins(2,60)).toBe(120));
