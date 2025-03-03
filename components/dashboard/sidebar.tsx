"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Wifi, Tv, Zap, BookOpen, Wallet, History, Settings, HelpCircle, LogOut } from "lucide-react"

interface SidebarProps {
  mobile?: boolean
}

export function Sidebar({ mobile = false }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Airtime",
      icon: Wifi,
      href: "/dashboard/airtime",
      active: pathname === "/dashboard/airtime",
    },
    {
      label: "Data",
      icon: Wifi,
      href: "/dashboard/data",
      active: pathname === "/dashboard/data",
    },
    {
      label: "Cable TV",
      icon: Tv,
      href: "/dashboard/cable-tv",
      active: pathname === "/dashboard/cable-tv",
    },
    {
      label: "Electricity",
      icon: Zap,
      href: "/dashboard/electricity",
      active: pathname === "/dashboard/electricity",
    },
    {
      label: "Education",
      icon: BookOpen,
      href: "/dashboard/education",
      active: pathname === "/dashboard/education",
    },
    {
      label: "Wallet",
      icon: Wallet,
      href: "/dashboard/wallet",
      active: pathname === "/dashboard/wallet",
    },
    {
      label: "Transactions",
      icon: History,
      href: "/dashboard/transactions",
      active: pathname === "/dashboard/transactions",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
    {
      label: "Help & Support",
      icon: HelpCircle,
      href: "/dashboard/support",
      active: pathname === "/dashboard/support",
    },
  ]

  return (
    <aside
      className={cn(
        "hidden md:flex h-screen w-64 flex-col fixed inset-y-0 z-50 bg-background border-r",
        mobile && "hidden",
      )}
    >
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={route.active ? "secondary" : "ghost"}
              className={cn("justify-start", route.active && "bg-primary/10 font-medium text-primary")}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-5 w-5" />
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>

      {!mobile && (
        <div className="mt-auto border-t p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:bg-red-500/10 hover:text-red-500"
            asChild
          >
            <Link href="/auth/logout">
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Link>
          </Button>
        </div>
      )}
    </aside>
  )
}

