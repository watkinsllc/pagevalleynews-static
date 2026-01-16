import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>
}
