import React from 'react'
import DealsSection from './_components/BestDeal'
import BestSelling from './_components/BestSelling'
import Footer from './_components/Footer/Footer'
import HeroSection from './_components/Hero'
import PromotionalBanner from './_components/PromotionBanner'

const page: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <PromotionalBanner />
      <DealsSection />
      <BestSelling />
      <Footer />
    </div>
  )
}

export default page
