import type { Metadata } from 'next'

import config from '../../../../payload.config'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type PageProps = {
  params: { segments?: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = ({ params, searchParams }: PageProps): Promise<Metadata> => {
  return generatePageMetadata({ config, params, searchParams })
}

export default function NotFound({ params, searchParams }: PageProps) {
  return NotFoundPage({ config, params, searchParams, importMap })
}
