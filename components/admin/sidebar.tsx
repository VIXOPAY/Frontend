"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Users, CreditCard, Settings, Phone, Zap, GraduationCap, LogOut } from "lucide-react"

const menuItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Transactions",
    href: "/admin/transactions",
    icon: CreditCard,
  },
  {
    title: "Services",
    href: "/admin/services",
    icon: Phone,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

const serviceItems = [
  {
    title: "Airtime & Data",
    href: "/admin/services/airtime-data",
    icon: Phone,
  },
  {
    title: "Electricity",
    href: "/admin/services/electricity",
    icon: Zap,
  },
  {
    title: "Education",
    href: "/admin/services/education",
    icon: GraduationCap,
  },
]

export function AdminSidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <div className={cn("w-64 bg-white border-r flex flex-col")}>
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold">VixoPay Admin</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-6">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href ? "bg-green-50 text-green-600" : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>

        {/* Services Section */}
        <div>
          <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</h2>
          <div className="mt-2 space-y-1">
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href ? "bg-green-50 text-green-600" : "text-gray-600 hover:bg-gray-50",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  )
}

