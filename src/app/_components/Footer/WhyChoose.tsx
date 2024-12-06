const features = [
  {
    icon: '💰',
    title: 'Competitive Rates, Best Price Guarantee',
    description:
      'As one of the leading printing service providers in India, we offer highly competitive rates. Our "Best Price Guarantee" ensures that you receive top-quality prints at the most affordable prices.',
  },
  {
    icon: '👨‍💼',
    title: 'Dedicated Support for Our Valued Customers',
    description:
      'Our dedicated customer care team is always ready to assist you. Reach us at +91 27729 38392 or email us at info@veteranmedias.com for any inquiries or support.',
  },
  {
    icon: '🖨️',
    title: 'Durable, High-Quality Prints',
    description:
      'We use original inks for our canvas prints, guaranteeing a lifespan of over 75 years. Our prints are waterproof, ensuring they remain vibrant and intact for generations. Always ask for our waterproof canvas prints!',
  },
  {
    icon: '🚚',
    title: 'Speedy Delivery Across India',
    description:
      'At Veteran Medias LLP, we pride ourselves on our quick and reliable shipping. Partnering with leading carriers like FEDEX, we ensure that your products are delivered swiftly and safely anywhere in India.',
  },
  {
    icon: '🥇',
    title: 'Top-Grade, Imported Materials',
    description:
      'We use only the finest materials, mostly imported, for our canvas, poster, and vinyl prints. Rest assured, the quality of our products is unparalleled, providing you with the best prints possible.',
  },
  {
    icon: '🖼️',
    title: 'Superior Frames for Lasting Art',
    description:
      'Our canvas frames are made from imported pine wood, ensuring durability and elegance. Automated machines stretch the canvas perfectly onto the frames.',
  },
]

export default function WhyChoose() {
  return (
    <div>
      <div
        className={`w-full  h-[115px] bg-purple-100 bg-opacity-50 flex flex-col justify-center items-center p-4 border border-purple-200`}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Why Choose{' '}
          <span className="bg-gradient-to-r from-red-700 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Shell & Soul
          </span>
          ?
        </h1>
        <p className="text-sm text-gray-600 text-center max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Mi aliquam purus fermentum et
          nec. Mauris augue quisque libero tempus turpis a aliquam sed. Tempus
          libero urna eget et egestas dictum enim odio. Hendrerit cursus lectus
          faucibus in orci a non porta.
        </p>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-purple-50`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
