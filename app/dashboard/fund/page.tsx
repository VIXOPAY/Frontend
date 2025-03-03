"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { generateVirtualAccount } from "@/lib/actions/payments"

export default function FundAccountPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [accounts, setAccounts] = useState<any>(null)
  const { toast } = useToast()

  const handleGenerateAccount = async () => {
    setIsGenerating(true)
    try {
      const virtualAccounts = await generateVirtualAccount()
      setAccounts(virtualAccounts)
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to generate account numbers. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Account number copied to clipboard",
    })
  }

  if (!accounts) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-500">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold">Fund Account</h1>
            <p className="text-sm text-gray-500">Generate Your Unique Bank Account</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Click the button below to generate your unique bank account on our app.
            </p>

            <Button
              onClick={handleGenerateAccount}
              className="w-full bg-green-500 hover:bg-green-600"
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Bank Account"}
            </Button>

            <div className="space-y-3 text-sm text-green-600">
              <p>✓ Easily save and send money to your unique account within your bank app.</p>
              <p>✓ No additional charges for depositing funds into your unique account.</p>
              <p>✓ Simplified tracking and management of transactions specific to your unique account.</p>
              <p>✓ Enhanced security and privacy for your financial activities.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mb-6">
        <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-500">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold">Fund Account</h1>
          <p className="text-sm text-gray-500">Transfer from any of the account numbers below to fund your account.</p>
          <p className="text-sm text-gray-500">Account name: VixePay John</p>
        </div>

        <div className="space-y-4">
          {/* Moniepoint */}
          <Card className="p-4 bg-green-500 text-white">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm opacity-75">Moniepoint</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/90"
                onClick={() => copyToClipboard(accounts.moniepoint)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-lg font-medium">{accounts.moniepoint}</p>
          </Card>

          {/* Wema Bank */}
          <Card className="p-4 bg-green-600 text-white">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm opacity-75">Wema Bank</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/90"
                onClick={() => copyToClipboard(accounts.wema)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-lg font-medium">{accounts.wema}</p>
          </Card>

          {/* Fidelity Bank */}
          <Card className="p-4 bg-green-500 text-white">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm opacity-75">Fidelity Bank</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/90"
                onClick={() => copyToClipboard(accounts.fidelity)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-lg font-medium">{accounts.fidelity}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

