import { ArrowLeftRight, HeadphonesIcon, Package, Tag } from 'lucide-react'
import Image from 'next/image'

export default function PromotionalBanner() {
  return (
    <div className="w-full bg-white">
      {/* Service highlights */}
      <div className="flex py-4 px-10 text-sm bg-blue-200 w-1920 h-30 m-6 ml-20 rounded justify-between">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <Package className="w-4 h-4" />
          <span>Free delivery on up to ₹5000+</span>
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <ArrowLeftRight className="w-4 h-4" />
          <span>15 Day money-back policy</span>
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <HeadphonesIcon className="w-4 h-4" />
          <span>Top-notch Support</span>
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <Tag className="w-4 h-4" />
          <span>Low price guarantee</span>
        </div>
      </div>

      {/* Main promotional banners */}
      <div className="flex flex-wrap justify-center gap-4 m-10">
        {/* Gift Packaging Banner */}
        <div className="relative overflow-hidden rounded-lg bg-[#FFE8E8] p-6">
          <div className="max-w-[50%]">
            <p className="text-sm mb-2">Save upto</p>
            <h3 className="text-3xl font-bold mb-2">10% off</h3>
            <h4 className="text-xl font-semibold mb-2">Gift Packaging</h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
            <Image
              src="/gift/card.png"
              alt="Gift box with ribbon"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Canvas Printing Banner */}
        <div className="relative overflow-hidden rounded-lg bg-[#FFF5EB] p-6 ">
          <div className="max-w-[50%]">
            <h4 className="text-xl font-semibold mb-2">Canvas Printing</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="space-y-1">
              <p className="text-sm">Starts from</p>
              <p className="text-2xl font-bold text-orange-600">₹999 only</p>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
            <Image
              src="/gift/family.png"
              alt="Canvas print example"
              width={500}
              height={500}
              className="object-contain "
            />
          </div>
        </div>
      </div>

      {/* Shipping notification */}
      <div className="bg-pink-50 w-full rounded-lg p-4 text-center text-sm border border-dashed border-black">
        <span className="inline-flex items-center gap-2">
          <span>
            <Image
              src="/trusk.png"
              alt="shipping"
              width={50}
              height={50}
            />
          </span>{' '}
          Over{' '}
          <span className="font-semibold text-[#7000FF]">1.5 thousands</span>{' '}
          items shipped every month! Veteran makes them a reality.
        </span>
      </div>
    </div>
  )
}
