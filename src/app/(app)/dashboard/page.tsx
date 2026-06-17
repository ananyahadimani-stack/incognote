'use client'
import MessageCard from '@/components/MessageCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Message, User } from '@/models/User'
import { acceptMessageSchema } from '@/schemas/acceptMessageSchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Loader2, RefreshCcw } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'sonner'

const DashboardPage = () => {
const [messages, setMessages] = useState<Message[]>([])
const [isLoading, setIsLoading] = useState(false)
const [isSwitchLoading, setIsSwitchLoading] = useState(false)

const handleDeleteMessage = (messageId: string) => {
setMessages(messages.filter((message) => message._id !== messageId))
}

const { data: session } = useSession()

const form = useForm({
resolver: zodResolver(acceptMessageSchema),
defaultValues: {
acceptMessage: true,
},
})

const { setValue } = form

const fetchAcceptMessage = useCallback(async () => {
setIsSwitchLoading(true)

```
try {
  const response = await axios.get('/api/accept-messages')

  setValue(
    'acceptMessage',
    response.data.isAcceptingMessage
  )
} catch {
  toast('Failed to fetch message settings.')
} finally {
  setIsSwitchLoading(false)
}
```

}, [setValue])

const fetchMessages = useCallback(async () => {
setIsLoading(true)

```
try {
  const response =
    await axios.get<ApiResponse>('/api/get-messages')

  setMessages(response.data.messages || [])
} catch {
  toast('Failed to fetch messages.')
} finally {
  setIsLoading(false)
}
```

}, [])

useEffect(() => {
if (!session?.user) return

```
fetchMessages()
fetchAcceptMessage()
```

}, [session, fetchMessages, fetchAcceptMessage])

if (!session?.user) {
return <div>Please login</div>
}

const { username } = session.user as User

const profileUrl =
  typeof window !== "undefined"
    ? `${window.location.origin}/u/${username}`
    : ""

const copyToClipboard = () => {
navigator.clipboard.writeText(profileUrl)
toast('Profile link copied successfully.')
}

return ( <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl"> <h1 className="text-4xl font-bold mb-4">
Your Dashboard </h1>

  <div className="mb-4">
    <h2 className="text-lg font-semibold mb-2">
      Copy Your Unique Link
    </h2>

    <div className="flex items-center">
      <input
        type="text"
        value={profileUrl}
        disabled
        className="input input-bordered w-full p-2 mr-2"
      />

      <Button onClick={copyToClipboard}>
        Copy
      </Button>
    </div>
  </div>

  <div className="mb-4">
    <Controller
      name="acceptMessage"
      control={form.control}
      render={({ field }) => (
        <div className="flex items-center">
          <Switch
            checked={field.value}
            onCheckedChange={async (newValue) => {
              field.onChange(newValue)

              try {
                const response =
                  await axios.post<ApiResponse>(
                    '/api/accept-messages',
                    {
                      acceptMessages: newValue,
                    }
                  )

                toast(response.data.message)
              } catch {
                toast('Failed to update settings.')
              }
            }}
            disabled={isSwitchLoading}
          />

          <span className="ml-2">
            Accept Messages:{' '}
            {field.value ? 'On' : 'Off'}
          </span>
        </div>
      )}
    />
  </div>

  <Separator />

  <Button
    className="mt-4"
    variant="outline"
    onClick={(e) => {
      e.preventDefault()
      fetchMessages()
    }}
  >
    {isLoading ? (
      <Loader2 className="h-4 w-4 animate-spin" />
    ) : (
      <RefreshCcw className="h-4 w-4" />
    )}
  </Button>

  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
    {messages.length > 0 ? (
  messages.map((message) => (
    <div
      key={message._id}
      className="border rounded p-4">
      {message.content}
    </div>
  ))
) : (
    
      <p className="text-muted-foreground">
        No messages yet. Share your public link to start
        receiving anonymous feedback.
      </p>
    )}
  </div>
</div>

)
}

export default DashboardPage
