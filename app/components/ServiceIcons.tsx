import { 
  Wrench, 
  Car, 
  Gauge, 
  Calendar, 
  AlertCircle, 
  Droplet,
  Thermometer,
  CircleDot,
  Fuel,
  Settings,
  Cog,
  Battery,
  Wind,
  Zap,
  Shield,
  Activity,
  Hammer,
  Truck,
  FileCheck,
  Sparkles
} from 'lucide-react'

export const serviceIcons = {
  'transmission-service': {
    icon: Cog,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  'brake-and-rotor-repair': {
    icon: CircleDot,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  'engine-tune-up': {
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  'maintenance-schedule': {
    icon: Calendar,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  'check-engine-light': {
    icon: AlertCircle,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  'water-pump-service': {
    icon: Droplet,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  'ac-and-heat-repair': {
    icon: Thermometer,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  'tire-services': {
    icon: Car,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50'
  },
  'fuel-system-service': {
    icon: Fuel,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  'transfer-case-repair': {
    icon: Settings,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  'differential-service-and-repair': {
    icon: Wrench,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  'battery-service': {
    icon: Battery,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  'exhaust-system': {
    icon: Wind,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50'
  },
  'electrical-repair': {
    icon: Activity,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
  },
  'diagnostic-service': {
    icon: FileCheck,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50'
  },
  'preventive-maintenance': {
    icon: Shield,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  'general-repair': {
    icon: Hammer,
    color: 'text-stone-600',
    bgColor: 'bg-stone-50'
  },
  'fleet-service': {
    icon: Truck,
    color: 'text-zinc-600',
    bgColor: 'bg-zinc-50'
  },
  'premium-service': {
    icon: Sparkles,
    color: 'text-rohnert-yellow',
    bgColor: 'bg-yellow-50'
  }
}

export type ServiceIconKey = keyof typeof serviceIcons