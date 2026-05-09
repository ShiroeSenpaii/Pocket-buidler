# Pocket Districts

## 1) Project overview
Pocket Districts is a mobile-first incremental city builder MVP. Build cosy district structures, grow passive Coins income, unlock new buildings, complete daily quests, and automate districts.

## 2) Game loop
Build → earn → upgrade → automate.

## 3) Tech stack
- Vite
- TypeScript
- Phaser 3
- Vitest (pure logic tests)

## 4) Setup commands
```bash
npm install
```

## 5) Development commands
```bash
npm run dev
```

## 6) Build commands
```bash
npm run build
```

## 7) Preview commands
```bash
npm run preview
```

## 8) Typecheck command
```bash
npm run typecheck
```

## 9) Test command
```bash
npm run test:run
```
Tests are pure-logic only (economy/offline/save formatting), not Phaser scene rendering tests.

## 10) Mobile testing instructions
1. Start dev server.
2. Open browser devtools.
3. Use portrait mobile viewport (e.g., 390x844).
4. Verify the bottom sheet actions are easy to tap.

## 11) Key files to edit for balancing
- `src/data/buildings.ts`
- `src/data/economy.ts`
- `src/game/systems/economySystem.ts`
- `src/data/unlocks.ts`

## 12) Known limitations
- Art uses placeholders/emoji.
- Secondary systems are lightweight and mainly display/economy modifiers.
- No backend or cloud save.

## 13) Suggested next improvements
- Add building placement interactions on map tiles.
- Add prestige district layers.
- Add event cards and richer automation rules.
- Improve icon pack and animation polish.
