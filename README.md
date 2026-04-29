# D-DanceShared

Shared contract package for the Dance Institute frontend and backend.

## Purpose

This repo replaces the monorepo `packages/shared` folder from the original sprint document.

- Shared Zod schemas
- Shared role constants
- Shared API response types

## Local development

Frontend and backend consume this package through a local file dependency during development.

If shared types change:

1. run `pnpm install`
2. run `pnpm build`
3. reinstall dependencies in `D-DanceFE` and `D-DanceBE` if needed

## Publish strategy

For GitHub-hosted separate repos, this package should later be published privately or moved to its own installable repository workflow.

## Workspace docs

Use the workspace agent entry document for project-wide workflow:

- [ENTRYPOINT.md](/home/vishnu/Projects/Dance%20Web%20App/docs/agent-dev/ENTRYPOINT.md)
