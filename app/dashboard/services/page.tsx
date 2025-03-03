"use client"

import Link from "next/link"
import { ArrowLeft, Phone, Database, Zap, GraduationCap, Tv, Receipt, Building2, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Phone,
    name: "Airtime",
    description: "Buy airtime for any network",
    href: "/dashboard/services/airtime",
    color: "text-red-600 bg-red-100",
  },
  {
    icon: Database,
    name: "Data",
    description: "Purchase data bundles",
    href: "/dashboard/services/data",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Zap,
    name: "Electricity",
    description: "Pay electricity bills",
    href: "/dashboard/services/electricity",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Pay school fees",
    href: "/dashboard/services/education",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Tv,
    name: "Cable TV",
    description: "Subscribe to TV packages",
    href: "/dashboard/services/cable",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Receipt,
    name: "Betting",
    description: "Fund betting wallets",
    href: "/dashboard/services/betting",
    color: "text-orange-600 bg-orange-100",
  },
  {
    icon: Building2,
    name: "Insurance",
    description: "Buy insurance policies",
    href: "/dashboard/services/insurance",
    color: "text-indigo-600 bg-indigo-100",
  },
  {
    icon: Plane,
    name: "Travel",
    description: "Book flights & hotels",
    href: "/dashboard/services/travel",
    color: "text-pink-600 bg-pink-100",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center">
        <Link href="/dashboard">
          <ArrowLeft className="h-5 w-5 text-gray-500 mr-3" />
        </Link>
        <h1 className="text-lg font-semibold">Services</h1>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <Link key={service.name} href={service.href}>
              <Card className="p-4 h-full hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-xs text-gray-500">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

