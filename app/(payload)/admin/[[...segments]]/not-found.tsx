import type { Metadata } from 'next'

import config from '../../../../payload.config'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type PageProps = {
  params: { segments?: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = ({ params, searchParams }: PageProps): Promise<Metadata> =>
  generatePageMetadata({
    config,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(searchParams),
  })

export default function Page({ params, searchParams }: PageProps) {
  return NotFoundPage({
    config,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(searchParams),
    importMap,
  })
}
