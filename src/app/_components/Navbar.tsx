import { Phone, ShoppingCart, Truck, User } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="bg-gradient-to-r from-custom-purple via-purple-500 to-custom-pink text-white py-1 px-4 flex items-center justify-center">
        <Truck className="w-4 h-4 mr-2" />
        <p className="text-sm">
          With FREESHIPPING, orders of ₹5000+ get free shipping
        </p>
      </div>

      <nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/assets/logo2.png"
                alt="VETERAN MEDIA SOLUTIONS LLP"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/personalize-prints"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Personalize Prints
              </Link>
              <Link
                href="/artwork-print"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Artwork Print
              </Link>
              <Link
                href="/other-printing"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Other Printing
              </Link>
              <Link
                href="/design-services"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Design Services
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex items-center text-gray-500">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-sm">+91 93729 38392</span>
              </div>
              <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <span className="sr-only">View user account</span>
                <User className="h-6 w-6" />
              </button>
              <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <span className="sr-only">View shopping cart</span>
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="sm:hidden"
          id="mobile-menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/personalize-prints"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Personalize Prints
            </Link>
            <Link
              href="/artwork-print"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Artwork Print
            </Link>
            <Link
              href="/other-printing"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Other Printing
            </Link>
            <Link
              href="/design-services"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Design Services
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  User Account
                </div>
                <div className="text-sm font-medium text-gray-500">
                  user@example.com
                </div>
              </div>
              <button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <span className="sr-only">View notifications</span>
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
