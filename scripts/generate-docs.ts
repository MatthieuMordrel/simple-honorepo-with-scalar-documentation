import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import app, { openApiGenerateSpecOptions } from '../src/index'
import { generateSpecs } from 'hono-openapi'

const OUTPUT_PATH = resolve(process.cwd(), 'openapi', 'openapi.json')

async function main() {
  const specs = await generateSpecs(app, openApiGenerateSpecOptions)

  await mkdir(resolve(process.cwd(), 'openapi'), { recursive: true })
  await writeFile(OUTPUT_PATH, JSON.stringify(specs, null, 2))

  console.log(`OpenAPI specification written to ${OUTPUT_PATH}`)
}

main().catch(err => {
  console.error('Failed to generate OpenAPI specification:', err)
  process.exit(1)
})
