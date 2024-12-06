'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

// FAQ data for artist marketplace
const faqs = [
  {
    id: 1,
    question: 'How do I start selling my artwork on the platform?',
    answer:
      'Getting started is easy! Simply create an account, verify your identity, set up your artist profile, and upload high-quality images of your artwork. Our platform supports various digital art formats and printing options.',
  },
  {
    id: 2,
    question: 'What commission does the platform charge?',
    answer:
      'We charge a competitive 15% commission on each sale, which covers payment processing, customer service, and platform maintenance. This allows us to provide you with quality printing services and marketing support.',
  },
  {
    id: 3,
    question: 'How is the printing quality assured?',
    answer:
      'We partner with professional printing services that use high-quality materials and advanced printing technology. Each print is carefully inspected before shipping, and we offer a satisfaction guarantee to customers.',
  },
  {
    id: 4,
    question: 'What file formats are accepted for artwork?',
    answer:
      'We accept high-resolution files in PNG, JPEG, PDF, and AI formats. For best printing results, we recommend uploading files with at least 300 DPI resolution and in the CMYK color profile.',
  },
  {
    id: 5,
    question: 'How are payments processed and when do I get paid?',
    answer:
      'Payments are processed securely through our platform. Artists receive payments every 14 days for all completed orders, with funds transferred directly to your registered bank account.',
  },
  {
    id: 6,
    question: 'Can I set my own prices for artwork?',
    answer:
      'Yes! You have full control over pricing your artwork. Our platform provides pricing guidelines based on market data, but the final price decision is yours.',
  },
  {
    id: 7,
    question: 'How do you handle shipping and packaging?',
    answer:
      'We handle all shipping and packaging logistics. Your artwork is carefully packaged using protective materials to ensure it reaches customers in perfect condition. We ship worldwide with tracking provided.',
  },
  {
    id: 8,
    question: 'What marketing support do you provide?',
    answer:
      "We promote artists through our platform's featured sections, social media, email newsletters, and SEO optimization. We also provide tools for you to share your work and track performance metrics.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const midPoint = Math.ceil(faqs.length / 2)
  const leftColumnFaqs = faqs.slice(0, midPoint)
  const rightColumnFaqs = faqs.slice(midPoint)

  const FAQItem = ({ faq }: { faq: (typeof faqs)[0] }) => {
    const isOpen = openItems.includes(faq.id)

    return (
      <div className="mb-4">
        <button
          onClick={() => toggleItem(faq.id)}
          className="w-full bg-gray-100 rounded-full p-4 flex items-center justify-between hover:bg-gray-200 transition-colors"
        >
          <span className="text-left font-medium">{faq.question}</span>
          {isOpen ? (
            <Minus className="h-5 w-5 flex-shrink-0 text-gray-500" />
          ) : (
            <Plus className="h-5 w-5 flex-shrink-0 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="mt-2 px-4 text-gray-600">
            <p className="py-3">{faq.answer}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently ask questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about selling your artwork, printing
          services, and platform features. If you need additional support, our
          team is here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-2">
          {leftColumnFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          {rightColumnFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
