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

## CI and releases

Pull requests to `env/dev` and `main`, plus direct pushes to those branches,
run typechecking, linting, and a production build. Frontend and backend pin a
specific shared commit, so shared changes must be merged first and each
consumer's dependency must then be deliberately updated and validated.

## Workspace docs

Use the workspace agent entry document for project-wide workflow:

- `../docs/agent-dev/ENTRYPOINT.md` in the local workspace
