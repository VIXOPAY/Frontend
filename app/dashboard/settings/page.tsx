"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Shield, Bell, Smartphone } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center">
        <Link href="/dashboard/profile">
          <ArrowLeft className="h-5 w-5 text-gray-500 mr-3" />
        </Link>
        <h1 className="text-lg font-semibold">Settings</h1>
      </header>

      <main className="p-4 space-y-6">
        {/* Account Security */}
        <Link href="/dashboard/settings/security" className="flex items-center justify-between p-3 bg-white rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Account Security</p>
              <p className="text-xs text-gray-500">Password, PIN, Biometrics</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Notifications */}
        <Link
          href="/dashboard/settings/notifications"
          className="flex items-center justify-between p-3 bg-white rounded-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Bell className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Notifications</p>
              <p className="text-xs text-gray-500">Push, Email notifications</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        {/* Device/Desktop */}
        <Link href="/dashboard/settings/devices" className="flex items-center justify-between p-3 bg-white rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Smartphone className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Device/Desktop</p>
              <p className="text-xs text-gray-500">Manage your connected devices</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>
      </main>
    </div>
  )
}

