'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session } = useSession()

  if (!session?.user) {
    return <div>Please login</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Dashboard Working
      </h1>

      <p className="mt-4">
        Logged in as:
      </p>

      <pre className="mt-2">
        {JSON.stringify(session.user, null, 2)}
      </pre>
    </div>
  )
}