# Contributing to UCMail

## Workflow
1. Fork → branch off **`develop`** (never `main`).
2. Conventional Commits (`feat(tab-filter): ...`). AI-assisted code must be tagged `@ai-generated` in the commit body.
3. `pnpm typecheck && pnpm test` must pass.
4. Open the PR against `develop`.

## Ground rules
- TypeScript `strict` — no `any`, no `@ts-ignore` without a linked issue.
- Content scripts must register a `cleanup()` for every observer/listener (no memory leaks).
- Behavior-level acceptance scenarios (Given/When/Then) accompany every feature change.
