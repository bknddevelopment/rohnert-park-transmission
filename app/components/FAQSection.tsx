'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'WHAT ARE YOUR BUSINESS HOURS?',
    answer: 'We are open Monday through Thursday from 7:30am to 5:00pm, and Friday from 7:00am to 4:00pm. We are closed on weekends to allow our team to rest and spend time with their families.'
  },
  {
    question: 'WHERE ARE YOU LOCATED?',
    answer: 'We are conveniently located at 305 Laguna Dr, Rohnert Park, CA 94928. We\'re easily accessible from Highway 101 and serve the entire North Bay area.'
  },
  {
    question: 'WHAT TYPES OF VEHICLES DO YOU WORK ON?',
    answer: 'We service all makes and models including domestic, European, and Asian vehicles. Our ASE-certified technicians are trained to work on cars, trucks, SUVs, and vans from all major manufacturers.'
  },
  {
    question: 'CAN I BOOK AN APPOINTMENT ONLINE?',
    answer: 'Yes! You can easily book an appointment through our website by clicking the "BOOK SERVICE" button. You can also call us at (707) 584-7727 to schedule your appointment.'
  },
  {
    question: 'ARE YOUR SERVICES COST-EFFECTIVE?',
    answer: 'We offer competitive pricing and transparent estimates. As a RepairPal Certified shop, we guarantee fair pricing. We also offer financing options through Synchrony and EasyPay to help manage repair costs.'
  },
  {
    question: 'DO YOU OFFER ANY DISCOUNTS?',
    answer: 'Yes! We offer a 10% discount for Sonoma State students with valid ID. We also regularly feature special offers and coupons on our website. Check our Coupons page for current deals.'
  },
  {
    question: 'CAN I CHECK ON THE STATUS OF MY CAR AT THE SHOP?',
    answer: 'Absolutely! We believe in transparent communication. You can call us anytime during business hours for updates on your vehicle. We\'ll also contact you before performing any additional work beyond the initial estimate.'
  },
  {
    question: 'ARE YOU HIRING?',
    answer: 'We\'re always looking for talented technicians to join our team. If you\'re an experienced automotive professional who shares our commitment to quality and customer service, please contact us to learn about current opportunities.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section section-padding bg-black text-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            COMMON QUESTIONS ABOUT OUR AUTO REPAIR SERVICES
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/book-service" className="btn-secondary bg-white text-black hover:bg-gray-100">
            BOOK YOUR VISIT
          </Link>
        </div>
      </div>
    </section>
  )
}