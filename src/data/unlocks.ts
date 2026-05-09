export interface QuestDef {
  id: string;
  title: string;
  goal: number;
  rewardCoins: number;
  metric: 'upgrades' | 'coins' | 'types';
}

export const dailyQuests: QuestDef[] = [
  { id: 'upgrade_3', title: 'Upgrade any building 3 times', goal: 3, rewardCoins: 120, metric: 'upgrades' },
  { id: 'reach_500', title: 'Reach 500 Coins', goal: 500, rewardCoins: 200, metric: 'coins' },
  { id: 'unlock_2', title: 'Own 2 building types', goal: 2, rewardCoins: 180, metric: 'types' }
];
