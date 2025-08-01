'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Phone, Calendar, Clock, Award, Shield, ChevronRight, ArrowRight, Check, PlayCircle, Sparkles } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { getImagePath } from '../utils/imagePath'

export function HeroSectionPro() {
  const [yearsInBusiness, setYearsInBusiness] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Parallax mouse effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Smooth counter animation
    if (!isVisible) return
    
    const targetYear = new Date().getFullYear() - 1997
    const duration = 2000
    const steps = 60
    const increment = targetYear / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= targetYear) {
        setYearsInBusiness(targetYear)
        clearInterval(timer)
      } else {
        setYearsInBusiness(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Advanced Background Layers */}
      <div className="absolute inset-0">
        {/* Parallax Image */}
        <div 
          className="absolute inset-0 scale-110"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Image
            src={getImagePath("/images/hero/main-hero.jpg")}
            alt="Rohnert Park Transmission Auto Repair Shop"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-rohnert-yellow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rohnert-red/10 rounded-full blur-3xl animate-float animation-delay-1000" />
      </div>

      {/* Premium Trust Badges */}
      <div className={`absolute top-8 right-8 hidden xl:flex flex-col gap-4 z-20 ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rohnert-yellow to-yellow-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative glass-premium rounded-xl p-6 hover-lift cursor-pointer">
            <Image src={getImagePath("/images/ase-certified.png")} alt="ASE Certified" width={120} height={120} className="w-full h-auto" />
            <div className="mt-3 text-center">
              <div className="text-xs font-semibold text-white/80">Master Certified</div>
              <div className="text-xs text-white/60">Since 1997</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container">
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <div className={`inline-flex items-center gap-3 mb-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 glass-premium rounded-full pl-2 pr-6 py-2">
              <div className="p-2 bg-rohnert-yellow rounded-full">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <span className="text-sm font-semibold text-white">Trusted by 10,000+ Drivers</span>
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-400 border-2 border-gray-900" />
                ))}
                <div className="w-8 h-8 rounded-full bg-rohnert-yellow flex items-center justify-center text-xs font-bold text-black border-2 border-gray-900">
                  +
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline with Animation */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <span className="block mb-2">Expert Auto Care</span>
            <span className="block relative">
              <span className="relative z-10 gradient-text-premium">You Can Trust</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="20" viewBox="0 0 400 20">
                <path
                  d="M0,10 Q100,5 200,10 T400,10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-rohnert-yellow"
                />
              </svg>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mt-8 mb-10 leading-relaxed max-w-3xl ${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
            ASE Master Technicians • {yearsInBusiness}+ Years of Excellence • 
            <span className="text-rohnert-yellow font-semibold"> 2-Year Warranty</span>
          </p>

          {/* Social Proof Bar */}
          <div className={`flex flex-wrap items-center gap-8 mb-12 ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
            {/* Rating */}
            <div className="glass-premium rounded-2xl px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex text-rohnert-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9/5.0</div>
                  <div className="text-sm text-gray-400">127 Verified Reviews</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rohnert-yellow animate-pulse-glow">OPEN</div>
                <div className="text-sm text-gray-400">Now Serving</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15K+</div>
                <div className="text-sm text-gray-400">Cars Serviced</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`flex flex-col lg:flex-row gap-4 mb-12 ${isVisible ? 'animate-slide-up animation-delay-600' : 'opacity-0'}`}>
            <a
              href="tel:7075847727"
              className="group relative inline-flex items-center justify-center gap-3 btn-xl btn-primary overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transition-transform duration-300 group-hover:scale-110" />
              <Phone className="relative z-10 w-6 h-6 animate-pulse" />
              <span className="relative z-10 font-bold">(707) 584-7727</span>
              <ArrowRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <Link
              href="/book-service"
              className="group btn-xl btn-accent"
            >
              <Calendar className="w-6 h-6" />
              <span className="font-bold">Book Service Online</span>
              <span className="badge badge-primary ml-2">Save 10%</span>
            </Link>

            <button className="group btn-xl btn-ghost text-white border-2 border-white/30 hover:border-white">
              <PlayCircle className="w-6 h-6" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Trust Points */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible ? 'animate-slide-up animation-delay-800' : 'opacity-0'}`}>
            {[
              'Same Day Service',
              'Free Diagnostics',
              'Certified Experts',
              'Guaranteed Work'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                <div className="p-1 rounded-full bg-rohnert-yellow/20">
                  <Check className="w-4 h-4 text-rohnert-yellow" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full glass-premium">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-4 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white">
          <path d="M0,40 C480,110 960,0 1440,70 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}