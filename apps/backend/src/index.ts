import { Scalar } from '@scalar/hono-api-reference'
import { Context, Hono } from 'hono'
import type { GenerateSpecOptions } from 'hono-openapi'
import { describeRoute, openAPIRouteHandler, resolver, validator } from 'hono-openapi'
import { z } from 'zod'

const greetQuerySchema = z.object({
  name: z.string().min(1).optional()
})

const userSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1),
  email: z.email()
})

const createUserBodySchema = z.object({
  name: z.string().min(1),
  email: z.email()
})

export const openApiDocumentation = {
  info: {
    title: 'Hono API',
    version: '1.0.0',
    description: 'Example API documented with Scalar.'
  },
  servers: [{ url: 'http://localhost:3000' }]
}

export const openApiGenerateSpecOptions: Partial<GenerateSpecOptions> = {
  documentation: openApiDocumentation,
  exclude: [/^\/docs/]
}

const app = new Hono()

app.get(
  '/docs',
  describeRoute({ hide: true }),
  Scalar((c: Context) => ({
    theme: 'kepler',
    layout: 'modern',
    defaultHttpClient: { targetKey: 'js', clientKey: 'axios' },
    spec: {
      url: new URL('/docs/open-api', c.req.url).toString()
    }
  }))
)

app.get('/docs/open-api', describeRoute({ hide: true }), openAPIRouteHandler(app, openApiGenerateSpecOptions))

app.get('/', c => c.text('OK'))

app.get(
  '/hello',
  describeRoute({
    description: 'Greet a user',
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'text/plain': { schema: resolver(z.string()) }
        }
      }
    }
  }),
  validator('query', greetQuerySchema),
  c => {
    const query = c.req.valid('query')
    return c.text(`Hello ${query?.name ?? 'Hono'}!`)
  }
)

app.post(
  '/users',
  describeRoute({
    description: 'Create a user',
    responses: {
      201: {
        description: 'User created',
        content: {
          'application/json': { schema: resolver(userSchema) }
        }
      }
    }
  }),
  validator('json', createUserBodySchema),
  async c => {
    const body = c.req.valid('json')
    const user = { id: crypto.randomUUID(), ...body }
    return c.json(user, 201)
  }
)

app.get(
  '/users/:id',
  describeRoute({
    description: 'Get a user by id',
    responses: {
      200: {
        description: 'User fetched',
        content: {
          'application/json': { schema: resolver(userSchema) }
        }
      },
      404: { description: 'User not found' }
    }
  }),
  validator('param', z.object({ id: z.uuid() })),
  c => {
    const { id } = c.req.valid('param')
    const user = { id, name: 'Jane Doe', email: 'jane@example.com' }
    return c.json(user)
  }
)

export default app
export type AppType = typeof app
