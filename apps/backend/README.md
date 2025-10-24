## Backend (Hono + OpenAPI)

This app serves the API and OpenAPI docs that back the frontend.

### Prerequisites
- [Bun](https://bun.sh) runtime installed locally (used to run the server and scripts).

### Install dependencies
From the repository root run:

```sh
pnpm install
```

### Run the API

```sh
pnpm --filter @hono-openapi-testing/backend dev
```

The API runs on http://localhost:3000 and the Scalar reference UI is available at http://localhost:3000/docs.

### Generate OpenAPI specification

```sh
pnpm --filter @hono-openapi-testing/backend docs:gen
```
