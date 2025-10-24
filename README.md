# hono-openapi-testing Monorepo

This repository is a lightweight pnpm workspace with two applications:
- `@hono-openapi-testing/backend`: Hono API with OpenAPI docs powered by Bun.
- `@hono-openapi-testing/frontend`: React + Vite client bootstrapped with the official template.

There is intentionally no orchestration layer; run each app with its own command.

## Prerequisites
- [Node.js](https://nodejs.org) (to use pnpm)
- [pnpm](https://pnpm.io) (v10.15.1 or newer)
- [Bun](https://bun.sh) (required for the backend runtime)

## Install Dependencies

```sh
pnpm install
```

## Run Applications

- Backend API: `pnpm --filter @hono-openapi-testing/backend dev`
- Frontend client: `pnpm --filter @hono-openapi-testing/frontend dev`

Visit http://localhost:3000 for the API (and http://localhost:3000/docs for Scalar), and http://localhost:5173 for the frontend during development.

## Generate OpenAPI Spec

```sh
pnpm --filter @hono-openapi-testing/backend docs:gen
```

The generated document is stored at `apps/backend/openapi/openapi.json`.
