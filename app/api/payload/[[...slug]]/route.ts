import { payloadHandler } from '@payloadcms/next/handlers'
import config from '../../../../payload.config'

export const runtime = 'nodejs'

export const { GET, POST, PUT, PATCH, DELETE } = payloadHandler({
  config,
})
