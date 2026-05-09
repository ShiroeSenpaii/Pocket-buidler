# Testing Notes

## Failed command
`npm install`

## Error
403 Forbidden from npm registry (`https://registry.npmjs.org/...`).

## Suspected reason
This execution environment appears to block package registry access or enforce a security policy.

## How to run locally
On your machine with npm registry access:
1. `npm install`
2. `npm run typecheck`
3. `npm run test:run`
4. `npm run build`
5. `npm run dev`
