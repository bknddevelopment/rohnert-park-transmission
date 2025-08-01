import { Star } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { TestimonialSkeleton } from './LoadingStates'

const testimonials = [
  {
    name: 'Erika Diaz Ramirez',
    rating: 5,
    text: "More than 5 stars or more than that I wanted to give in this company especially to David & in his team. We are struggling with our 2013 mini about the transmission but David helped us alot. They treated the customer as their own family. Thank you so much Rohnert Park Transmission family. Highly recommend 👌 ..."
  },
  {
    name: 'Cha San Andres',
    rating: 5,
    text: "They were amazing! They were able to squeeze me in when my gear shift started to act funky! Highly recommend for honest mechanics and getting cared for like family! Usually my dad does any repair my car needs, but he wasn't able to for this, so David and his team were able to accommodate me into their schedule and get my car out ASAP and perfect!"
  }
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      {/* Stars */}
      <div className="flex text-rohnert-yellow mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

      {/* Reviewer Name */}
      <p className="font-bold text-gray-900">{testimonial.name}</p>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section 
      className="section section-padding bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/images/shop/shop-exterior.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HEAR WHAT OUR SATISFIED CUSTOMERS HAVE TO SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Suspense fallback={<TestimonialSkeleton />}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Suspense>
        </div>

        <div className="text-center mt-12">
          <Link href="/reviews" className="btn-primary">
            SEE ALL REVIEWS
          </Link>
        </div>
      </div>
    </section>
  )
}