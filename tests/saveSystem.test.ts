import { expect, it } from 'vitest';
it('serializes basic state object', ()=> { const state={coins:10}; expect(JSON.parse(JSON.stringify(state)).coins).toBe(10); });
