import Image from 'next/image'

export default function ClientsAndFeatures() {
  const clients = [
    { name: 'Legrand', logo: '/placeholder.svg?height=50&width=100' },
    { name: 'Wipro', logo: '/placeholder.svg?height=50&width=100' },
    { name: 'Harisons', logo: '/placeholder.svg?height=50&width=100' },
    {
      name: 'Master Light House',
      logo: '/placeholder.svg?height=50&width=100',
    },
    { name: 'Mahindra EPC', logo: '/placeholder.svg?height=50&width=100' },
    { name: 'Fillo', logo: '/placeholder.svg?height=50&width=100' },
  ]

  const features = [
    {
      title: 'Vibrant Colors',
      description:
        'Our inks produce rich, vivid colors that make your prints stand out.',
    },
    {
      title: 'Long-Lasting',
      description:
        'Enjoy prints that maintain their quality for years to come.',
    },
    {
      title: 'Eco-Friendly',
      description:
        'Our inks are environmentally conscious, reducing your carbon footprint.',
    },
    {
      title: 'Accurate Representation',
      description:
        'True-to-life colors ensure your designs are perfectly reproduced.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Major Clients
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-32 h-20 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={50}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">
          Ink Features
        </h3>
        <h2 className="text-3xl font-bold text-center mb-4">
          Experience Vibrant, Long-Lasting, and Eco-Friendly Prints
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Our high-quality inks deliver vibrant colors that bring your prints to
          life. Each shade is accurately represented, ensuring your images are
          vivid and true to their original appearance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
