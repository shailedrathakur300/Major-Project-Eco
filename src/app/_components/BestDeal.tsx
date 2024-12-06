'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Types for our deals
interface Deal {
  id: number
  title: string
  price: number
  image: string
  category: string
}

// Sample deals data
const deals: Deal[] = [
  {
    id: 1,
    title: 'Sticker Label Printing',
    price: 150,
    image: '/sticker-label-printing.png',
    category: 'OTHER PRINTING',
  },
  {
    id: 2,
    title: 'Frosted Film Prints',
    price: 1999,
    image: '/Frosted-Film-Prints.png',
    category: 'GIFTING PRINTING',
  },
  {
    id: 3,
    title: 'Fabric Printing',
    price: 1499,
    image: '/Fabric-Printing-Fabric-Printing.png',
    category: 'CANVAS PRINTING',
  },
  {
    id: 4,
    title: 'Personalised Acrylic Photo Prints',
    price: 5000,
    image: '/Personalised-Acrylic-Photo-Prints.png',
    category: 'OTHER PRINTING',
  },
]

export default function DealsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    hours: 28,
    minutes: 15,
    seconds: 5,
  })

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 28, minutes: 15, seconds: 5 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    setCurrentIndex((prev) => {
      if (direction === 'left') {
        return prev === 0 ? deals.length - 2 : prev - 1
      } else {
        return prev === deals.length - 2 ? 0 : prev + 1
      }
    })
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Today&apos;s best deals</h2>
          <div className="flex gap-2 text-sm">
            <span className="bg-pink-100 rounded-full px-3 py-1">
              {timeLeft.hours}h
            </span>
            <span className="bg-pink-100 rounded-full px-3 py-1">
              {timeLeft.minutes}m
            </span>
            <span className="bg-pink-100 rounded-full px-3 py-1">
              {timeLeft.seconds}s
            </span>
          </div>
        </div>
        <Button variant="outline">See All Deals</Button>
      </div>

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {deals.map((deal) => (
              <Card
                key={deal.id}
                className="min-w-[300px] flex-1"
              >
                <CardContent className="p-4">
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      className="rounded-lg object-cover"
                      width={300}
                      height={300}
                      placeholder="blur"
                      blurDataURL="/placeholder.png"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{deal.title}</h3>
                  <p className="text-blue-600 font-bold">₹{deal.price}/-</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
