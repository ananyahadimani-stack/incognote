'use client'

import React from 'react'
import { Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import messages from '@/messages.json'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <section className="text-center mb-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Share Your Link.
            <br />
            Receive Honest Anonymous Feedback.
          </h1>

          <p className="mt-5 text-base md:text-xl text-gray-300">
            Create a profile, share your personal link, and collect honest
            anonymous messages from anyone.
          </p>
        </section>

        <Carousel
          plugins={[Autoplay({ delay: 2500 })]}
          className="w-full max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex items-start space-x-4">
                    <Mail className="flex-shrink-0 mt-1" />

                    <div>
                      <p>{message.content}</p>

                      <p className="text-xs text-muted-foreground mt-2">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>

      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2026 Incognote. All rights reserved.
      </footer>
    </>
  )
}

export default Home