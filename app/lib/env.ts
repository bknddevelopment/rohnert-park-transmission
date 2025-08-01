import { z } from 'zod'

const envSchema = z.object({
  // Required environment variables
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // Public environment variables (available in browser)
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://www.rohnertparktransmission.com'),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().optional(),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_BUSINESS_PHONE: z.string().default('+17075847727'),
  NEXT_PUBLIC_BUSINESS_ADDRESS: z.string().default('5901 Commerce Blvd, Rohnert Park, CA 94928'),
  NEXT_PUBLIC_BUSINESS_HOURS_WEEKDAY: z.string().default('8:00 AM - 5:00 PM'),
  NEXT_PUBLIC_BUSINESS_HOURS_WEEKEND: z.string().default('Closed'),
  
  // Server-only environment variables
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  CONTACT_EMAIL: z.string().email().default('info@rohnertparktransmission.com'),
  DATABASE_URL: z.string().optional(),
  RECAPTCHA_SECRET_KEY: z.string().optional(),
})

// Parse and validate environment variables
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data

// Type-safe environment variable access
export type Env = z.infer<typeof envSchema>