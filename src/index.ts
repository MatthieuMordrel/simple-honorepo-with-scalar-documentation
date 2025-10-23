import { Hono } from 'hono'
import { describeRoute, openAPIRouteHandler, resolver, validator } from 'hono-openapi'
import { z } from 'zod'

const app = new Hono()

// Schemas
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

// Root
app.get('/', c => {
  return c.text('OK')
})

// GET /hello -> text/plain
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

// POST /users -> application/json
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

// GET /users/:id -> application/json
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
    // Example: return a mock user
    const user = { id, name: 'Jane Doe', email: 'jane@example.com' }
    return c.json(user)
  }
)

// OpenAPI document
app.get(
  '/openapi',
  openAPIRouteHandler(app, {
    documentation: {
      info: {
        title: 'Hono API',
        version: '1.0.0',
        description: 'Demo API with Zod validation and hono-openapi'
      },
      servers: [{ url: 'http://localhost:3000', description: 'Local Server' }]
    }
  })
)

export default app
