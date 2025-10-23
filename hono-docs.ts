import { defineConfig } from '@rcmade/hono-docs'

export default defineConfig({
  tsConfigPath: './tsconfig.json',
  openApi: {
    openapi: '3.0.0',
    info: { title: 'Hono API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000' }]
  },
  outputs: {
    openApiJson: './openapi/openapi.json'
  },
  apis: [
    {
      name: 'Main App',
      apiPrefix: '/',
      api: [
        // You can enrich specific endpoints here if desired
      ],
      appTypePath: 'src/index.ts'
    }
  ]
})
