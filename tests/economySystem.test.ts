import { describe, expect, it } from 'vitest';
import { getBuildingCost, getBuildingOutput } from '../src/game/systems/economySystem';
it('scales cost up by level', ()=> expect(getBuildingCost(100,2)).toBeGreaterThan(100));
it('automation boosts output', ()=> expect(getBuildingOutput(2,5,true)).toBeGreaterThan(getBuildingOutput(2,5,false)));
