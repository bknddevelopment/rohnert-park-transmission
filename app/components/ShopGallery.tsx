'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  title: string
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/shop/shop-exterior.jpg",
    alt: "Rohnert Park Transmission shop exterior",
    title: "Our Modern Facility"
  },
  {
    src: "/images/shop/shop-classic-cars.jpg",
    alt: "Classic cars at Rohnert Park Transmission",
    title: "Classic Car Specialists"
  },
  {
    src: "/images/gallery/thumbnail_IMG_7122.jpg",
    alt: "Shop interior view",
    title: "State-of-the-Art Equipment"
  }
]

export function ShopGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % galleryImages.length
      : (selectedImage - 1 + galleryImages.length) % galleryImages.length
    
    setSelectedImage(newIndex)
  }

  return (
    <>
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Shop & Facility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern equipment and a clean, professional environment for all your auto repair needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage]?.src || ''}
              alt={galleryImages[selectedImage]?.alt || ''}
              width={1200}
              height={800}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage]?.title}
            </p>
          </div>
        </div>
      )}
    </>
  )
}