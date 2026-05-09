# Testing Notes

## Failed command
`npm install`

## Error
403 Forbidden from npm registry (`https://registry.npmjs.org/...`).

## Suspected reason
This execution environment blocks npm registry package download.

## Local validation steps
1. `npm install`
2. `npm run typecheck`
3. `npm run test:run`
4. `npm run build`
5. `npm run cap:add:android` (once)
6. `npm run cap:sync`
7. `npm run apk:debug`
