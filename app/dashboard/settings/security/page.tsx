"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Key, AlertTriangle, Fingerprint } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { updateSecuritySettings } from "@/lib/actions/settings"

export default function SecuritySettingsPage() {
  const { toast } = useToast()
  const [biometrics, setBiometrics] = useState(false)

  const handleBiometricsToggle = async (checked: boolean) => {
    try {
      await updateSecuritySettings({ biometrics: checked })
      setBiometrics(checked)
      toast({
        title: "Settings Updated",
        description: "Biometric authentication has been " + (checked ? "enabled" : "disabled"),
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
        <h1 className="text-lg font-semibold">Account Security</h1>
      </header>

      <main className="p-4 space-y-6">
        <div className="space-y-4">
          {/* Reset Password */}
          <Link
            href="/dashboard/settings/security/password"
            className="flex items-center justify-between p-3 bg-white rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Key className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Reset Password</p>
                <p className="text-xs text-gray-500">Change your password</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          {/* Report ID */}
          <Link
            href="/dashboard/settings/security/report"
            className="flex items-center justify-between p-3 bg-white rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Report ID</p>
                <p className="text-xs text-gray-500">Report stolen or compromised ID</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          {/* Biometrics */}
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Fingerprint className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Biometrics</p>
                <p className="text-xs text-gray-500">Enable fingerprint/face authentication</p>
              </div>
            </div>
            <Switch
              checked={biometrics}
              onCheckedChange={handleBiometricsToggle}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

