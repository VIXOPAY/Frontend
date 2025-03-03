"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const networks = [
  { id: "mtn", name: "MTN", logo: "/networks/mtn.png", color: "bg-yellow-400" },
  { id: "airtel", name: "Airtel", logo: "/networks/airtel.png", color: "bg-red-500" },
  { id: "glo", name: "Glo", logo: "/networks/glo.png", color: "bg-green-500" },
  { id: "9mobile", name: "9mobile", logo: "/networks/9mobile.png", color: "bg-green-400" },
]

const amounts = ["100", "200", "500", "1000", "2000", "5000"]

export default function AirtimePage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState("")
  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedNetwork) {
      toast({
        title: "Select Network",
        description: "Please select a network provider",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      // In real app, make API call to process airtime purchase
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call

      toast({
        title: "Purchase Successful",
        description: `Successfully purchased ${formData.amount} airtime for ${formData.phoneNumber}`,
      })

      // Reset form
      setSelectedNetwork("")
      setFormData({ phoneNumber: "", amount: "" })
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "Unable to complete purchase. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center">
        <Link href="/dashboard/services">
          <ArrowLeft className="h-5 w-5 text-gray-500 mr-3" />
        </Link>
        <h1 className="text-lg font-semibold">Airtime</h1>
      </header>

      <main className="p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Network Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Network</label>
            <div className="grid grid-cols-4 gap-4">
              {networks.map((network) => (
                <Card
                  key={network.id}
                  className={`p-2 cursor-pointer hover:shadow-md transition-shadow ${
                    selectedNetwork === network.id ? "ring-2 ring-green-500" : ""
                  }`}
                  onClick={() => setSelectedNetwork(network.id)}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-10 h-10 rounded-full ${network.color} flex items-center justify-center`}>
                      <Image
                        src={network.logo || "/placeholder.svg"}
                        alt={network.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-xs">{network.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              required
            />
          </div>

          {/* Amount Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <div className="grid grid-cols-3 gap-2">
              {amounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  className={formData.amount === amount ? "ring-2 ring-green-500" : ""}
                  onClick={() => setFormData({ ...formData, amount })}
                >
                  ₦{amount}
                </Button>
              ))}
            </div>
            <Input
              type="number"
              placeholder="Enter custom amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="mt-2"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={isLoading || !selectedNetwork || !formData.phoneNumber || !formData.amount}
          >
            {isLoading ? "Processing..." : `Buy ₦${formData.amount} Airtime`}
          </Button>
        </form>
      </main>
    </div>
  )
}

