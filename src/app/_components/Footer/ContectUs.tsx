import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function ContactUs() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">
                Say Hello
              </h2>
              <div className="max-w-sm space-y-4">
                <p className="text-gray-600">Stay updated on news</p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Your Email"
                    type="email"
                  />
                  <Button className="bg-red-800 hover:bg-red-900">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                © 2024 Veteran Medias LLP. All Rights Reserved
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Business Info */}
            <div className="space-y-6">
              <div className="flex-col">
                <h3 className="font-semibold mb-3">For Business</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>info@veteranmedias.com</p>
                  <p>veteranmedias@gmail.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="hover:text-red-800"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-red-800"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-red-800"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Legal</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <a
                      href="#"
                      className="hover:text-red-800"
                    >
                      Cookie Policy
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="hover:text-red-800"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Payment */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Contact</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    Office 1, Second Floor Indira, Gangapur Rd, Near Pramod
                    Mahajan Garden, Old Gangapur Naka, Nashik, Maharashtra
                    422005
                  </p>
                  <p>+91 93729 38392</p>
                  <p>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline"
                    >
                      See on Map
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Visa"
                    width={40}
                    height={30}
                    className="h-8"
                  />
                  <Image
                    src="/placeholder.svg"
                    alt="Mastercard"
                    width={40}
                    height={30}
                    className="h-8"
                  />
                  <Image
                    src="/placeholder.svg"
                    alt="Google Pay"
                    width={40}
                    height={30}
                    className="h-8"
                  />
                  <Image
                    src="/placeholder.svg"
                    alt="RuPay"
                    width={40}
                    height={30}
                    className="h-8"
                  />
                  <Image
                    src="/placeholder.svg"
                    alt="PayPal"
                    width={40}
                    height={30}
                    className="h-8"
                  />
                </div>
                <Image
                  src="/placeholder.svg"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
