'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, X } from 'lucide-react'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Show floating contact after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 lg:hidden">
        {isExpanded && (
          <>
            {/* SMS Button */}
            <a
              href="sms:+17075847727"
              className="animate-fadeIn bg-rohnert-blue text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              style={{ animationDelay: '0.1s' }}
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            
            {/* Call Button */}
            <a
              href="tel:+17075847727"
              className="animate-fadeIn bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              style={{ animationDelay: '0.2s' }}
            >
              <Phone className="w-6 h-6" />
            </a>
          </>
        )}
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${
            isExpanded ? 'bg-gray-600' : 'bg-rohnert-red animate-pulse'
          } text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200`}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Phone className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Desktop Floating Widget */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Need Help?</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Our experts are ready to help you with any auto repair needs.
          </p>
          
          <div className="space-y-3">
            <a
              href="tel:+17075847727"
              className="flex items-center gap-3 bg-rohnert-red text-white rounded-lg px-4 py-3 hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="font-bold">(707) 584-7727</div>
                <div className="text-xs opacity-90">Call Now</div>
              </div>
            </a>
            
            <a
              href="/book-service"
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-900 rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors font-semibold"
            >
              Book Service Online
            </a>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Business Hours</span>
              <span className="font-semibold text-green-600">Open Now</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Mon-Fri: 8:00 AM - 5:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}