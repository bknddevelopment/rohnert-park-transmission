import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Clock, MapPin, CheckCircle, Car, Navigation, Star } from 'lucide-react'

interface OldLocationContent {
  city: string
  intro: string
  whyChoose: string
  services: Array<{
    name: string
    description: string
  }>
  journey: string
  choose: string
  cta: string
  distance: string
  driveTime: string
}

export function LocationPageTemplate({ content }: { content: OldLocationContent }) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {content.city} Auto Repair Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Professional Transmission & Auto Repair • {content.distance} from {content.city}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-service" className="btn-primary">
                Book Service Online
              </Link>
              <a href="tel:7075847727" className="btn-secondary">
                Call (707) 584-7727
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Expert Auto Repair Near {content.city}
            </h2>
            <div className="prose prose-lg max-w-none">
              {content.intro.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why {content.city} Drivers Choose Us
            </h2>
            <div className="prose prose-lg max-w-none mb-12">
              {content.whyChoose.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-rohnert-red" />
                    {service.name}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Easy Drive from {content.city}
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <Navigation className="w-12 h-12 text-rohnert-red mx-auto mb-2" />
                  <p className="font-bold text-2xl">{content.distance}</p>
                  <p className="text-gray-600">Distance</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-rohnert-red mx-auto mb-2" />
                  <p className="font-bold text-2xl">{content.driveTime}</p>
                  <p className="text-gray-600">Drive Time</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                {content.journey.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              The Trusted Choice for {content.city} Residents
            </h2>
            <div className="prose prose-lg max-w-none">
              {content.choose.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding bg-gradient-to-br from-rohnert-red to-red-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Experience Better Auto Care?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              {content.cta.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-white mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-service" className="btn-accent">
                Schedule Your Service
              </Link>
              <a href="tel:7075847727" className="btn-secondary">
                <Phone className="w-5 h-5" />
                Call (707) 584-7727
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}