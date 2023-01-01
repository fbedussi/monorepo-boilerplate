import fastify from 'fastify'
import { double } from 'helpers'

import type { Test } from 'model'

const server = fastify({ logger: true })

server.get('/:num', async (req, reply) => {
  const a: Test = {
    message: {
      text: 'hello'
    }
  }
  return { multiplication: double((req.params as any).num) + a.message.text }
})

const start = async () => {
  try {
    await server.listen({ port: 5000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
