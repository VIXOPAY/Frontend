"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  Send,
  Wallet,
  Phone,
  Database,
  Repeat2,
  MoreHorizontal,
  Home,
  History,
  Settings,
  LayoutGrid,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Consistent 16px padding */}
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm">Good morning 👋</p>
            </div>
            <h2 className="font-semibold">John Doe</h2>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Bell className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content - Consistent 16px padding */}
      <main className="flex-1 px-4 py-6 space-y-6">
        {/* Balance Card */}
        <Card className="bg-green-500 text-white p-6 rounded-2xl">
          <p className="text-sm font-medium mb-2">Account Balance</p>
          <h1 className="text-3xl font-bold mb-4">₦1,000,000</h1>
          <div className="flex gap-3">
            <Button className="flex-1 bg-green-400 hover:bg-green-600 text-white" size="lg">
              <Send className="h-4 w-4 mr-2" /> Send
            </Button>
            <Button className="flex-1 bg-green-400 hover:bg-green-600 text-white" size="lg">
              <Wallet className="h-4 w-4 mr-2" /> Fund Account
            </Button>
          </div>
        </Card>

        {/* Quick Access */}
        <div>
          <h3 className="text-sm font-medium mb-3">Quick Access</h3>
          <div className="grid grid-cols-4 gap-4">
            <Link href="/dashboard/airtime" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xs text-center">Airtime</span>
            </Link>
            <Link href="/dashboard/data" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                <Database className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xs text-center">Data</span>
            </Link>
            <Link href="/dashboard/airtime2cash" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                <Repeat2 className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xs text-center">Airtime2cash</span>
            </Link>
            <Link href="/dashboard/more" className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                <MoreHorizontal className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xs text-center">More</span>
            </Link>
          </div>
        </div>

        {/* Promo Banner */}
        <Card className="overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Promotional Banner"
            width={400}
            height={200}
            className="w-full h-auto"
          />
        </Card>

        {/* Transaction History */}
        <div>
          <h3 className="text-sm font-medium mb-3">History</h3>
          <div className="space-y-3">
            {/* Sample Transaction */}
            <Card className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">MTN Recharge</p>
                  <p className="text-xs text-gray-500">Today, 10:00 AM</p>
                </div>
              </div>
              <p className="font-medium text-red-500">-₦1,000</p>
            </Card>
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden sticky bottom-0 bg-white border-t">
        <div className="flex justify-around py-2">
          <Link href="/dashboard" className="flex flex-col items-center text-green-600">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/dashboard/services" className="flex flex-col items-center text-gray-400">
            <LayoutGrid className="h-5 w-5" />
            <span className="text-xs">Services</span>
          </Link>
          <Link href="/dashboard/history" className="flex flex-col items-center text-gray-400">
            <History className="h-5 w-5" />
            <span className="text-xs">History</span>
          </Link>
          <Link href="/dashboard/settings" className="flex flex-col items-center text-gray-400">
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

