import type { Metadata } from 'next'

import config from '../../../../payload.config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: {
    segments?: string[]
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({
    config,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(searchParams),
  })

const Page = ({ params, searchParams }: Args) =>
  RootPage({
    config,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(searchParams),
    importMap,
  })

export default Page
