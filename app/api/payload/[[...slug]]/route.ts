import { getPayload } from 'payload'
import config from '../../../../payload.config'
import type { NextRequest } from 'next/server'

export const runtime = 'nodejs'

let payloadPromise: ReturnType<typeof getPayload> | null = null

function getPayloadClient() {
  if (!payloadPromise) payloadPromise = getPayload({ config })
  return payloadPromise
}

async function handler(req: NextRequest) {
  const payload = await getPayloadClient()
  return payload.handle(req)
}

export async function GET(req: NextRequest) {
  return handler(req)
}

export async function POST(req: NextRequest) {
  return handler(req)
}

export async function PUT(req: NextRequest) {
  return handler(req)
}

export async function PATCH(req: NextRequest) {
  return handler(req)
}

export async function DELETE(req: NextRequest) {
  return handler(req)
}
