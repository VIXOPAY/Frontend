"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function FundAccountPage() {
  const { toast } = useToast()
  const [copied, setCopied] = useState<string | null>(null)

  const bankAccounts = [
    {
      id: "moniepoint",
      name: "Moniepoint",
      accountNumber: "1234567890",
    },
    {
      id: "wema",
      name: "Wema Bank",
      accountNumber: "1234567890",
    },
    {
      id: "fidelity",
      name: "Fidelity bank",
      accountNumber: "1234567890",
    },
  ]

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    toast({
      title: "Copied to clipboard",
      description: `Account number ${text} has been copied`,
    })

    setTimeout(() => {
      setCopied(null)
    }, 2000)
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <Link href="/dashboard" className="mr-2">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </Link>
        <h1 className="text-lg font-semibold">Fund Account</h1>
        <Button variant="ghost" size="icon" className="ml-auto text-green-500">
          <CheckCircle className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Transfer to one of the account below to fund your VIXOPAY wallet.
          <br />
          Account name: <span className="font-medium">VixoPay John</span>
        </p>
      </div>

      <div className="space-y-4">
        {bankAccounts.map((account) => (
          <Card key={account.id} className="bg-green-500 text-white p-4 rounded-xl">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium">{account.name}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-white p-0 h-auto"
                onClick={() => copyToClipboard(account.accountNumber, account.id)}
              >
                {copied === account.id ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
            <p className="text-xl font-bold">{account.accountNumber}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-500 mb-4">
          Note: Funds will be credited to your wallet automatically once payment is confirmed. This typically takes 1-5
          minutes.
        </p>

        <Button variant="outline" className="w-full" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  )
}

