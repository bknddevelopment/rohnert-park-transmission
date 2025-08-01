'use client'

import { useEffect, useState } from 'react'
import { Award, Users, Wrench, Star, Shield, Clock } from 'lucide-react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ end, duration, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const currentValue = Math.floor(progress * (end - startValue) + startValue)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('trust-indicators')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function TrustIndicators() {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - 1997

  return (
    <section id="trust-indicators" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Shield className="w-5 h-5 text-rohnert-yellow" />
            <span className="text-sm font-bold uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-white mb-6">
            Trusted by Thousands of
            <span className="block gradient-text-yellow">Sonoma County Drivers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our numbers speak for themselves. With decades of experience and thousands of satisfied customers, 
            we're the auto repair shop you can trust.
          </p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Years in Business */}
          <div className="text-center group hover-lift">
            <div className="inline-flex p-4 rounded-2xl bg-rohnert-yellow/20 backdrop-blur-sm mb-4 group-hover:bg-rohnert-yellow/30 transition-colors">
              <Clock className="w-8 h-8 text-rohnert-yellow" />
            </div>
            <div className="text-4xl font-black text-rohnert-yellow mb-2">
              <AnimatedCounter end={yearsInBusiness} duration={2000} suffix="+" />
            </div>
            <div className="text-sm font-medium text-gray-300">Years in Business</div>
          </div>

          {/* Happy Customers */}
          <div className="text-center group hover-lift">
            <div className="inline-flex p-4 rounded-2xl bg-rohnert-yellow/20 backdrop-blur-sm mb-4 group-hover:bg-rohnert-yellow/30 transition-colors">
              <Users className="w-8 h-8 text-rohnert-yellow" />
            </div>
            <div className="text-4xl font-black text-rohnert-yellow mb-2">
              <AnimatedCounter end={10} duration={2000} suffix="K+" />
            </div>
            <div className="text-sm font-medium text-gray-300">Happy Customers</div>
          </div>

          {/* Cars Serviced */}
          <div className="text-center group hover-lift">
            <div className="inline-flex p-4 rounded-2xl bg-rohnert-yellow/20 backdrop-blur-sm mb-4 group-hover:bg-rohnert-yellow/30 transition-colors">
              <Wrench className="w-8 h-8 text-rohnert-yellow" />
            </div>
            <div className="text-4xl font-black text-rohnert-yellow mb-2">
              <AnimatedCounter end={15} duration={2000} suffix="K+" />
            </div>
            <div className="text-sm font-medium text-gray-300">Cars Serviced</div>
          </div>

          {/* 5-Star Reviews */}
          <div className="text-center group hover-lift">
            <div className="inline-flex p-4 rounded-2xl bg-rohnert-yellow/20 backdrop-blur-sm mb-4 group-hover:bg-rohnert-yellow/30 transition-colors">
              <Star className="w-8 h-8 text-rohnert-yellow fill-current" />
            </div>
            <div className="text-4xl font-black text-rohnert-yellow mb-2">
              <AnimatedCounter end={127} duration={2000} suffix="+" />
            </div>
            <div className="text-sm font-medium text-gray-300">5-Star Reviews</div>
          </div>

          {/* ASE Certified */}
          <div className="text-center group hover-lift">
            <div className="inline-flex p-4 rounded-2xl bg-rohnert-yellow/20 backdrop-blur-sm mb-4 group-hover:bg-rohnert-yellow/30 transition-colors">
              <Award className="w-8 h-8 text-rohnert-yellow" />
            </div>
            <div className="text-4xl font-black text-rohnert-yellow mb-2">
              <AnimatedCounter end={100} duration={2000} suffix="%" />
            </div>
            <div className="text-sm font-medium text-gray-300">ASE Certified</div>
          </div>

          {/* Warranty */}
          <div className="text-center group hover-lift">
            <div className="inline-flex p-4 rounded-2xl bg-rohnert-yellow/20 backdrop-blur-sm mb-4 group-hover:bg-rohnert-yellow/30 transition-colors">
              <Shield className="w-8 h-8 text-rohnert-yellow" />
            </div>
            <div className="text-4xl font-black text-rohnert-yellow mb-2">
              <AnimatedCounter end={2} duration={1000} suffix=" Year" />
            </div>
            <div className="text-sm font-medium text-gray-300">Warranty</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-2">Certified by</div>
            <div className="flex gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-rohnert-yellow font-bold">ASE</div>
                <div className="text-xs text-gray-300">Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-rohnert-yellow font-bold">ATRA</div>
                <div className="text-xs text-gray-300">Member</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-rohnert-yellow font-bold">AAA</div>
                <div className="text-xs text-gray-300">Approved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                <div className="text-rohnert-yellow font-bold">RepairPal</div>
                <div className="text-xs text-gray-300">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}