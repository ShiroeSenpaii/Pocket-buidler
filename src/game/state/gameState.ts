import { BUILDINGS } from '../../data/buildings';

export interface BuildingState { level: number; automated: boolean; }
export interface QuestState { completed: boolean; claimed: boolean; progress: number; }

export interface GameState {
  coins: number;
  totalUpgrades: number;
  lastSave: number;
  buildings: Record<string, BuildingState>;
  stats: Record<string, number>;
  quests: Record<string, QuestState>;
  lastQuestDay: string;
}

export const createInitialState = (): GameState => ({
  coins: 35,
  totalUpgrades: 0,
  lastSave: Date.now(),
  buildings: Object.fromEntries(BUILDINGS.map((b) => [b.id, { level: 0, automated: false }])),
  stats: { population: 0, energy: 0, materials: 0, food: 0, happiness: 0, traffic: 0 },
  quests: {},
  lastQuestDay: ''
});
