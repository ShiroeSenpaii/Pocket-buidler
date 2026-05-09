import type { GameState } from '../state/gameState';

const KEY = 'pocket_districts_save_v1';

export const saveGame = (state: GameState): void => {
  localStorage.setItem(KEY, JSON.stringify({ ...state, lastSave: Date.now() }));
};

export const loadGame = (): GameState | null => {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as GameState; } catch { return null; }
};

export const clearSave = (): void => localStorage.removeItem(KEY);
