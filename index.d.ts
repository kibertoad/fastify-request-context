import Fastify, { FastifyPlugin, FastifyRequest } from 'fastify'

export type RequestContext = {
  get: <T>(key: string) => T | undefined
  set: <T>(key: string, value: T) => void
}

export type Hook =
  | 'onRequest'
  | 'preParsing'
  | 'preValidation'
  | 'preHandler'
  | 'preSerialization'
  | 'onSend'
  | 'onResponse'
  | 'onTimeout'
  | 'onError'
  | 'onRoute'
  | 'onRegister'
  | 'onReady'
  | 'onClose'

export type RequestContextOptions = {
  defaultStoreValues?: Record<string, any>
  hook?: Hook | Hook[]
}

declare module 'fastify' {
  interface FastifyRequest {
    requestContext: RequestContext
  }

  interface FastifyInstance {
    requestContext: RequestContext
  }
}

declare const fastifyRequestContext: FastifyPlugin<RequestContextOptions>
export default fastifyRequestContext
