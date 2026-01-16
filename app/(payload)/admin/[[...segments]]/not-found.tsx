import type { Metadata } from 'next'

import config from '../../../../payload.config'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments?: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

export const generateMetadata = async ({ params, searchParams }: Args): Promise<Metadata> => {
  return generatePageMetadata({
    config,
    params: await params,
    searchParams: await searchParams,
  })
}

export default async function NotFound({ params, searchParams }: Args) {
  return NotFoundPage({
    config,
    params: await params,
    searchParams: await searchParams,
    importMap,
  })
}
