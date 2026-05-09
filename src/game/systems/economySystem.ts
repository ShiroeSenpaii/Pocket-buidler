import { BUILDINGS } from '../../data/buildings';
import { economyConfig } from '../../data/economy';
import type { GameState } from '../state/gameState';

export const getBuildingCost = (baseCost: number, level: number): number =>
  Math.floor(baseCost * Math.pow(economyConfig.costScale, level));

export const getBuildingOutput = (baseCps: number, level: number, automated: boolean): number => {
  const scaled = baseCps * Math.pow(economyConfig.outputScale, Math.max(0, level - 1)) * level;
  return automated ? scaled * (1 + economyConfig.automationBoost) : scaled;
};

export const getIncomePerSecond = (state: GameState): number => {
  const base = BUILDINGS.reduce((sum, b) => sum + getBuildingOutput(b.baseCps, state.buildings[b.id].level, state.buildings[b.id].automated), 0);
  const happinessMult = 1 + state.stats.happiness * economyConfig.happinessIncomePerPoint;
  return base * happinessMult;
};
