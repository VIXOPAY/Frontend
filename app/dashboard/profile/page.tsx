"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight, User, Settings, Moon, HeadphonesIcon, Book, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export default function ProfilePage() {
  const { theme, setTheme } = useTheme()
  const [userId] = useState("A200231") // In real app, fetch from user context

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-lg font-semibold">Profile</h1>
        </div>
        <Link href="/dashboard/profile/edit">
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5 text-green-500" />
          </Button>
        </Link>
      </header>

      <main className="p-4 space-y-6">
        {/* Profile Info */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">Manage your VixoPay account from here</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative mx-auto">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">johndoe@gmail.com</p>
          <p className="text-xs text-gray-400 mt-1">ID: {userId}</p>
        </div>

        {/* Settings List */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500">General settings</h3>

          {/* Personal Information */}
          <Link href="/dashboard/profile/edit" className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <User className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Personal Information</p>
                <p className="text-xs text-gray-500">Edit your information</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          {/* Settings */}
          <Link href="/dashboard/settings" className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Settings className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Settings</p>
                <p className="text-xs text-gray-500">Security, Notification</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Moon className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-xs text-gray-500">Use the toggle to turn on/off</p>
              </div>
            </div>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          {/* Support */}
          <Link href="/support" className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <HeadphonesIcon className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Support</p>
                <p className="text-xs text-gray-500">Contact Us</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          {/* Legal */}
          <Link href="/legal" className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Book className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Legal</p>
                <p className="text-xs text-gray-500">Application rules, legal and policies</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>

        {/* Logout Button */}
        <Link href="/auth/logout" className="flex items-center gap-3 p-3 text-red-500 bg-white rounded-lg mt-8">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </main>
    </div>
  )
}

