import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rohnertparktransmission.com'
  
  // Service pages
  const services = [
    'transmission-service',
    'brake-and-rotor-repair',
    'engine-tune-up',
    'maintenance-schedule',
    'check-engine-light',
    'water-pump-service',
    'ac-and-heat-repair',
    'tire-services',
    'fuel-system-service',
    'transfer-case-repair',
    'differential-service-and-repair'
  ]

  // Vehicle brand pages
  const vehicles = [
    'acura', 'audi', 'bmw', 'cadillac', 'chevrolet', 'chrysler', 'dodge', 'fiat',
    'ford', 'gmc', 'honda', 'hyundai', 'infiniti', 'jeep', 'kia', 'lexus',
    'lincoln', 'mazda', 'mercedes-benz', 'mercury', 'mini', 'mitsubishi',
    'nissan', 'oldsmobile', 'pontiac', 'ram', 'saab', 'saturn', 'scion',
    'subaru', 'suzuki', 'toyota', 'volkswagen', 'volvo'
  ]

  // Static pages
  const staticPages = [
    '',
    'services',
    'vehicles',
    'financing',
    'warranty',
    'coupons',
    'reviews',
    'blog',
    'shop-details',
    'privacy',
    'image-credits',
    'book-service'
  ]

  // Blog posts
  const blogPosts = [
    'why-brake-and-rotor-repair-is-crucial-for-safe-driving',
    'the-importance-of-transmission-service-for-your-vehicle',
    'how-to-stay-safe-on-rainy-roads',
    'oil-changes-and-how-to-stay-on-schedule',
    'stay-cool-this-summer-why-your-vehicle-s-cooling-system-needs-attention'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add static pages
  staticPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page ? `/${page}` : ''}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1 : 0.8
    })
  })

  // Add service pages
  services.forEach(service => {
    sitemap.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    })
  })

  // Add vehicle pages
  vehicles.forEach(vehicle => {
    sitemap.push({
      url: `${baseUrl}/vehicles/${vehicle}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    })
  })

  // Add blog posts
  blogPosts.forEach(post => {
    sitemap.push({
      url: `${baseUrl}/${post}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6
    })
  })

  return sitemap
}