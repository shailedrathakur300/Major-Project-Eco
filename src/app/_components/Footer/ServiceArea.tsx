'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ServiceArea() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Service Areas
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Nunc in at diam pulvinar.
              Faucibus quisque elit vestibulum ulputris id. Nulla pretium
              viverra libero
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 inline-flex items-center gap-2">
            <MapPin className="text-blue-600" />
            <span>We are providing our services throughout India.</span>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Find Us on Google Map</h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 relative">
              <Image
                src="/map/map.png"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <Card className="shadow-none border-2">
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <p className="text-sm text-gray-500">You can reach us anytime</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input
                type="email"
                placeholder="Your Email"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
              />
              <Textarea
                placeholder="How can we help?"
                className="min-h-[120px]"
              />
              <Button className="w-full bg-red-800 hover:bg-red-900">
                Submit
              </Button>
              <p className="text-xs text-gray-500 text-center">
                By Contacting us you agree to our{' '}
                <a
                  href="#"
                  className="underline"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="underline"
                >
                  Privacy Policy
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
