"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { updateNotificationSettings } from "@/lib/actions/settings"

export default function NotificationSettingsPage() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
  })

  const handleToggle = async (key: keyof typeof settings, value: boolean) => {
    try {
      await updateNotificationSettings({ [key]: value })
      setSettings((prev) => ({ ...prev, [key]: value }))
      toast({
        title: "Settings Updated",
        description: "Your notification preferences have been saved.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center">
        <Link href="/dashboard/settings">
          <ArrowLeft className="h-5 w-5 text-gray-500 mr-3" />
        </Link>
        <h1 className="text-lg font-semibold">Notification</h1>
      </header>

      <main className="p-4 space-y-6">
        <div className="space-y-4">
          {/* Push Notifications */}
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-xs text-gray-500">Receive push notifications</p>
            </div>
            <Switch
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => handleToggle("pushNotifications", checked)}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-xs text-gray-500">Receive email notifications</p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => handleToggle("emailNotifications", checked)}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

