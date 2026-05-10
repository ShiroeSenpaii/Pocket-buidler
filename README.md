# Pocket Districts

## Project overview
Pocket Districts is a mobile-first incremental city builder MVP. It now supports Android APK generation through Capacitor.

## Game loop
Build → earn → upgrade → automate.

## Tech stack
- Vite
- TypeScript
- Phaser 3
- Capacitor (Android packaging)
- Vitest (pure logic tests)

## Setup
```bash
npm install
```

## Development
```bash
npm run dev
```

## Build web
```bash
npm run build
npm run preview
```

## Typecheck
```bash
npm run typecheck
```

## Tests (pure logic only)
```bash
npm run test:run
```

## Build Android APK (local)
1. Build web assets:
```bash
npm run build
```
2. Add Android once:
```bash
npm run cap:add:android
```
3. Sync web build into Android:
```bash
npm run cap:sync
```
4. Build debug APK:
```bash
npm run apk:debug
```
5. Install APK from:
`android/app/build/outputs/apk/debug/app-debug.apk`

## Build Android APK (GitHub)
- Go to **Actions** → **Android APK**.
- Tap **Run workflow** (manual trigger only).
- Open the completed run and download artifact `pocket-districts-debug-apk`.
- Extract and install `app-debug.apk` on your phone.

## Mobile testing instructions
- Install debug APK on Android device.
- Launch app and verify coins tick up, building upgrades work, save/reload works, and offline earnings appear.

## Key files to edit for balancing
- `src/data/buildings.ts`
- `src/data/economy.ts`
- `src/game/systems/economySystem.ts`
- `src/data/unlocks.ts`

## Known limitations
- Placeholder art/icons.
- Secondary systems are intentionally light.
- Debug APK is unsigned release-quality.

## Suggested next improvements
- Signed release APK workflow.
- Better isometric tile depth/placement.
- More quest variety and automation layers.
