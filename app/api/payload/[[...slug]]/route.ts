import { getPayload } from 'payload'
import config from '../../../../payload.config'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'

const payload = await getPayload({ config })

export async function GET(req: NextRequest) {
  return payload.handle(req)
}

export async function POST(req: NextRequest) {
  return payload.handle(req)
}

export async function PUT(req: NextRequest) {
  return payload.handle(req)
}

export async function PATCH(req: NextRequest) {
  return payload.handle(req)
}

export async function DELETE(req: NextRequest) {
  return payload.handle(req)
}
