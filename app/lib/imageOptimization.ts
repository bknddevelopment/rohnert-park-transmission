export const imageConfig = {
  // Image quality settings
  quality: 85,
  
  // Responsive image sizes
  sizes: {
    thumbnail: { width: 300, height: 200 },
    small: { width: 640, height: 480 },
    medium: { width: 1024, height: 768 },
    large: { width: 1920, height: 1080 },
    hero: { width: 2560, height: 1440 }
  },
  
  // Blur placeholder for better loading experience
  placeholder: 'blur' as const,
  
  // Format preferences
  formats: ['image/webp', 'image/jpeg']
}

// Helper function to generate responsive image props
export function getResponsiveImageProps(src: string, alt: string) {
  return {
    src,
    alt,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    quality: imageConfig.quality,
    placeholder: imageConfig.placeholder
  }
}