import { BUILDINGS } from '../data/buildings';
import { dailyQuests } from '../data/unlocks';
import { createInitialState, type GameState } from '../game/state/gameState';
import { getBuildingCost, getBuildingOutput, getIncomePerSecond } from '../game/systems/economySystem';
import { calculateOfflineCoins, calculateOfflineSeconds } from '../game/systems/offlineProgress';
import { formatNumber } from '../game/systems/numberFormat';
import { clearSave, loadGame, saveGame } from '../game/systems/saveSystem';
import { economyConfig } from '../data/economy';

export const mountOverlay = (onPulse: (i: number) => void) => {
  const root = document.getElementById('app')!;
  let state: GameState = loadGame() ?? createInitialState();
  const today = new Date().toISOString().slice(0,10);
  if(state.lastQuestDay !== today){
    state.quests = Object.fromEntries(dailyQuests.map((q)=>[q.id,{completed:false,claimed:false,progress:0}]));
    state.lastQuestDay = today;
  }
  const offlineSeconds = calculateOfflineSeconds(state.lastSave, Date.now());
  const offlineCoins = calculateOfflineCoins(getIncomePerSecond(state), offlineSeconds);
  state.coins += offlineCoins;

  const overlay = document.createElement('div'); overlay.className='overlay'; root.appendChild(overlay);
  const tick = () => { state.coins += getIncomePerSecond(state) / 5; evaluateState(); render(); };
  setInterval(tick, 200); setInterval(() => saveGame(state), economyConfig.saveThrottleMs);

  const evaluateState = () => {
    state.stats = { population:0,energy:0,materials:0,food:0,happiness:0,traffic:0 };
    for (const b of BUILDINGS){
      const level = state.buildings[b.id].level;
      Object.entries(b.statEffects ?? {}).forEach(([k,v]) => state.stats[k] += (v ?? 0) * level);
    }
    for (const q of dailyQuests){
      const qs = state.quests[q.id];
      qs.progress = q.metric==='upgrades'?state.totalUpgrades:q.metric==='coins'?state.coins:Object.values(state.buildings).filter((b)=>b.level>0).length;
      qs.completed = qs.progress >= q.goal;
    }
  };

  const buy = (id:string, i:number) => { const d=BUILDINGS.find((b)=>b.id===id)!; const bs=state.buildings[id]; const cost=getBuildingCost(d.baseCost, bs.level); if(state.coins<cost) return; state.coins-=cost; bs.level++; state.totalUpgrades++; if(bs.level>=economyConfig.automationUnlockLevel) bs.automated=true; onPulse(i); evaluateState(); render(); };
  const claimQuest = (id:string) => { const q = dailyQuests.find((x)=>x.id===id)!; const s = state.quests[id]; if(!s.completed || s.claimed) return; s.claimed=true; state.coins += q.rewardCoins; render(); };

  const render = () => {
    overlay.innerHTML = `<header class='header'><div>🪙 ${formatNumber(state.coins)}</div><div>+${formatNumber(getIncomePerSecond(state))}/s</div></header>
    ${offlineSeconds>0?`<div class='offline'>Welcome back! +${formatNumber(offlineCoins)} coins from ${Math.floor(offlineSeconds/60)}m away.</div>`:''}
    <section class='stats'>${Object.entries(state.stats).map(([k,v])=>`<span>${k}: ${formatNumber(v)}</span>`).join('')}</section>
    <section class='sheet'>${BUILDINGS.map((b,i)=>{ const bs=state.buildings[b.id]; const unlocked=state.coins>=b.unlockCoins || bs.level>0; const cost=getBuildingCost(b.baseCost, bs.level); return `<article class='card ${unlocked?'':'locked'}'><h3>${b.icon} ${b.name} L${bs.level}</h3><p>${b.description}</p><p>${formatNumber(getBuildingOutput(b.baseCps, Math.max(bs.level,1), bs.automated))}/s</p><button data-id='${b.id}' data-i='${i}' ${unlocked?'':'disabled'}>${unlocked?`Upgrade ${formatNumber(cost)}`:`Unlock @ ${formatNumber(b.unlockCoins)} coins`}</button>${bs.automated?'<small>Automation active</small>':''}</article>`; }).join('')}</section>
    <section class='quests'><h3>Daily Quests</h3>${dailyQuests.map((q)=>{const s=state.quests[q.id]; return `<div class='quest'><span>${q.title} (${Math.floor(s.progress)}/${q.goal})</span><button data-q='${q.id}' ${(!s.completed || s.claimed)?'disabled':''}>${s.claimed?'Claimed':`Claim ${q.rewardCoins}`}</button></div>`}).join('')}</section>
    <button id='reset'>Reset Save</button>`;

    overlay.querySelectorAll('button[data-id]').forEach((btn)=>btn.addEventListener('click',(e)=>{ const t=e.target as HTMLButtonElement; buy(t.dataset.id!, Number(t.dataset.i)); t.classList.add('tap'); setTimeout(()=>t.classList.remove('tap'),120); }));
    overlay.querySelectorAll('button[data-q]').forEach((btn)=>btn.addEventListener('click',(e)=>claimQuest((e.target as HTMLButtonElement).dataset.q!)));
    overlay.querySelector('#reset')?.addEventListener('click',()=>{ if(confirm('Reset Pocket Districts save?')){ clearSave(); state=createInitialState(); render(); }});
  };
  evaluateState(); render();
};
