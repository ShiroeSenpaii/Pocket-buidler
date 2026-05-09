export type SecondaryStats = 'population' | 'energy' | 'materials' | 'food' | 'happiness' | 'traffic';

export interface BuildingDef {
  id: string;
  icon: string;
  name: string;
  description: string;
  baseCost: number;
  baseCps: number;
  unlockCoins: number;
  statEffects?: Partial<Record<SecondaryStats, number>>;
}

export const BUILDINGS: BuildingDef[] = [
  { id: 'house', icon: '🏠', name: 'House', description: 'Tiny home for new residents.', baseCost: 15, baseCps: 0.8, unlockCoins: 0, statEffects: { population: 5 } },
  { id: 'corner_shop', icon: '🏪', name: 'Corner Shop', description: 'Sells quick essentials.', baseCost: 60, baseCps: 2.2, unlockCoins: 50, statEffects: { food: 2 } },
  { id: 'power_kiosk', icon: '⚡', name: 'Power Kiosk', description: 'Keeps district lights on.', baseCost: 120, baseCps: 3.4, unlockCoins: 90, statEffects: { energy: 8 } },
  { id: 'workshop', icon: '🛠️', name: 'Workshop', description: 'Crafts local materials.', baseCost: 220, baseCps: 5.2, unlockCoins: 180, statEffects: { materials: 6 } },
  { id: 'park', icon: '🌳', name: 'Park', description: 'A calm green pocket.', baseCost: 350, baseCps: 6.3, unlockCoins: 280, statEffects: { happiness: 5 } },
  { id: 'apartment_block', icon: '🏢', name: 'Apartment Block', description: 'Dense living towers.', baseCost: 580, baseCps: 10.5, unlockCoins: 450, statEffects: { population: 16, traffic: 4 } },
  { id: 'market', icon: '🧺', name: 'Market', description: 'Bustling district commerce.', baseCost: 950, baseCps: 16.8, unlockCoins: 720, statEffects: { food: 6 } },
  { id: 'transit_stop', icon: '🚏', name: 'Transit Stop', description: 'Eases city movement.', baseCost: 1400, baseCps: 22, unlockCoins: 1000, statEffects: { traffic: -6 } }
];
