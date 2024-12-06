'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

// Product data
const productData: Product[] = [
  {
    id: 1,
    title: 'Canvas Print',
    price: 5000,
    image: '/Canvas-Print.png',
  },
  {
    id: 2,
    title: 'Panoramic Canvas Printing',
    price: 5000,
    image: '/Panoramic-Canvas-Printing.png',
  },
  {
    id: 3,
    title: 'Sticker Label Print',
    price: 5000,
    image: '/sticker-label-printing.png',
  },
  {
    id: 4,
    title: 'Sun Board Print',
    price: 5000,
    image: '/Sun-Board-Print.png',
  },
  {
    id: 5,
    title: 'One-way vision',
    price: 5000,
    image: '/one-way-vision.png',
  },
  {
    id: 6,
    title: 'Backlit Vinyl Print',
    price: 5000,
    image: '/Backlit-Vinyl-Print.png',
  },
  {
    id: 7,
    title: 'Frosted Film Prints',
    price: 5000,
    image: '/Frosted-Film-Prints2.png',
  },
  {
    id: 8,
    title: 'Decal Prints',
    price: 5000,
    image: '/decal-prints.png',
  },
  {
    id: 9,
    title: 'Vinyl Print',
    price: 5000,
    image: '/Vinyl-Print.png',
  },
  {
    id: 10,
    title: 'Fabric Print',
    price: 5000,
    image: '/Fabric-Print.png',
  },
  {
    id: 11,
    title: 'Customized Wallpaper',
    price: 5000,
    image: '/Customized-Wallpaper.png',
  },
  {
    id: 12,
    title: 'Personalised Canvas Prints',
    price: 5000,
    image: '/Personalised-Canvas-Prints.png',
  },
]

export default function BestSelling() {
  const [productList, setProductList] = useState<Product[]>([])

  useEffect(() => {
    setProductList(productData)
  }, [])

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
        <p className="text-muted-foreground">
          Lorem ipsum is simply dummy text
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        {productList.map((product) => (
          <Card
            key={product.id}
            className="transition-transform hover:scale-105 hover:border-blue-600 hover:shadow-lg border border-transparent rounded-lg bg-[#F8FBFF] overflow-hidden"
          >
            <CardContent className="p-4 flex flex-col justify-between">
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg object-cover w-full h-full"
                  width={500}
                  height={500}
                  onError={() => {
                    console.log('Error loading image')
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-bold mb-4">
                  ₹{product.price}/-
                </p>
                <button className="bg-blue-600 text-white py-2 px-5 rounded">
                  Add to Cart
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-[#F8FBFF] rounded-2xl p-8">
        <div className="space-y-4">
          <h3 className="text-blue-600 font-semibold text-lg">
            Artwork & Digital Illustrations
          </h3>
          <h2 className="text-2xl font-bold">
            Create prints for every special moment in space
          </h2>
          <p className="text-muted-foreground">
            Transform your cherished memories and creative visions into stunning
            prints. Our premium printing services ensure that every detail of
            your artwork is captured with precision and vibrancy. Whether
            it&#39;s a family portrait, artistic creation, or professional
            display, we bring your ideas to life with exceptional quality and
            care.
          </p>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-4 bg-white rounded-2xl shadow-lg">
            <Image
              src="/create-special-momonent.png"
              alt="Showcase prints and designs"
              className="w-full h-full object-cover rounded-2xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
