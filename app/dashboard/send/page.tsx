"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { sendMoney, verifyVixepayID } from "@/lib/actions/payments"

export default function SendMoneyPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    vixepayId: "",
    amount: "",
  })
  const [recipientName, setRecipientName] = useState("")

  const handleVixepayIdChange = async (value: string) => {
    setFormData((prev) => ({ ...prev, vixepayId: value }))
    if (value.length === 6) {
      try {
        const user = await verifyVixepayID(value)
        setRecipientName(user.name)
        toast({
          title: "Recipient Found",
          description: `Sending to ${user.name}`,
        })
      } catch (error) {
        setRecipientName("")
        toast({
          title: "Invalid ID",
          description: "Please check the VixePay ID and try again",
          variant: "destructive",
        })
      }
    } else {
      setRecipientName("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!recipientName) {
      toast({
        title: "Invalid Recipient",
        description: "Please enter a valid VixePay ID",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      await sendMoney(formData.vixepayId, Number.parseFloat(formData.amount))
      toast({
        title: "Transfer Successful",
        description: `Successfully sent ₦${formData.amount} to ${recipientName}`,
      })
      setFormData({ vixepayId: "", amount: "" })
      setRecipientName("")
    } catch (error) {
      toast({
        title: "Transfer Failed",
        description: "Unable to complete transfer. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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
          <h1 className="text-xl font-semibold">Send</h1>
          <p className="text-sm text-gray-500">Transfer funds to another user on VixePay</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">VixePay ID</label>
            <Input
              type="text"
              maxLength={6}
              className="text-center text-xl tracking-widest"
              value={formData.vixepayId}
              onChange={(e) => handleVixepayIdChange(e.target.value)}
              placeholder="• • • • • •"
            />
            {recipientName && <p className="text-sm text-green-600 text-center">Sending to {recipientName}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
              <Input
                type="number"
                className="pl-7"
                value={formData.amount}
                onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
                placeholder="0.00"
                min="100"
                step="100"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={isLoading || !formData.vixepayId || !formData.amount || !recipientName}
          >
            {isLoading ? "Processing..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  )
}

