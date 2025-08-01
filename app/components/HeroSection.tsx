'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Phone, Calendar, Clock, Award, Shield, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getImagePath } from '../utils/imagePath'

export function HeroSection() {
  const [yearsInBusiness, setYearsInBusiness] = useState(0)

  useEffect(() => {
    // Animate years counter
    const targetYear = new Date().getFullYear() - 1997
    const increment = targetYear / 30
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= targetYear) {
        setYearsInBusiness(targetYear)
        clearInterval(timer)
      } else {
        setYearsInBusiness(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] bg-gray-900 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src={getImagePath("/images/hero/main-hero.jpg")}
          alt="Rohnert Park Transmission Auto Repair Shop"
          fill
          className="object-cover scale-110 motion-safe:animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Trust Badges Overlay */}
      <div className="absolute top-8 right-8 hidden lg:flex flex-col gap-4 z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <Image src={getImagePath("/images/ase-certified.png")} alt="ASE Certified" width={100} height={100} className="opacity-90" />
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <Image src={getImagePath("/images/atra.png")} alt="ATRA Member" width={100} height={100} className="opacity-90" />
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <Image src={getImagePath("/images/repairpal.png")} alt="RepairPal Certified" width={100} height={100} className="opacity-90" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full min-h-[700px] lg:min-h-[800px] flex items-center">
        <div className="max-w-4xl py-20">
          {/* Trust Indicator */}
          <div className="inline-flex items-center gap-2 bg-rohnert-yellow/20 backdrop-blur-sm border border-rohnert-yellow/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-rohnert-yellow" />
            <span className="text-sm font-semibold text-rohnert-yellow">Trusted Since 1997 • Family Owned</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Expert Auto Repair
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rohnert-red to-rohnert-yellow mt-2">
              You Can Trust
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            ASE certified technicians delivering honest, reliable service to 
            Sonoma County for over <span className="font-bold text-rohnert-yellow">{yearsInBusiness} years</span>.
          </p>

          {/* Reviews & Stats */}
          <div className="flex flex-wrap items-center gap-8 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="flex text-rohnert-yellow mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div>
                <span className="text-white font-bold text-lg">4.8/5.0</span>
                <span className="text-gray-300 text-sm ml-2">127+ Reviews</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rohnert-yellow">10K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rohnert-yellow">2 Year</div>
                <div className="text-sm text-gray-300">Warranty</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:7075847727"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-rohnert-red hover:bg-red-700 text-white font-bold text-lg rounded-md transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>Call (707) 584-7727</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link
              href="/book-service"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg rounded-md transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Online</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/get-quote"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-lg rounded-md transition-all duration-200"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4 text-rohnert-yellow" />
              <span>Same Day Service Available</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Award className="w-4 h-4 text-rohnert-yellow" />
              <span>ASE Certified Technicians</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rohnert-red via-rohnert-yellow to-rohnert-red animate-gradient-x"></div>
    </section>
  )
}