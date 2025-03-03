"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, CheckCircle } from "lucide-react"

const electricityProviders = [
  { id: "aedc", name: "Abuja Electricity (AEDC)" },
  { id: "ekedc", name: "Eko Electricity (EKEDC)" },
  { id: "ikedc", name: "Ikeja Electricity (IKEDC)" },
  { id: "phedc", name: "Port Harcourt Electricity (PHEDC)" },
]

export default function ElectricityPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    provider: "",
    meterNumber: "",
    amount: "",
    phone: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: "Payment Successful",
        description: `Your electricity token will be sent to ${formData.phone}`,
      })
      setFormData({ provider: "", meterNumber: "", amount: "", phone: "" })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "Please check your details and try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/dashboard" className="mr-2">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </Link>
        <h1 className="text-lg font-semibold">Pay Electricity Bill</h1>
        <Button variant="ghost" size="icon" className="ml-auto text-green-500">
          <CheckCircle className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Select Provider</Label>
          <Select
            value={formData.provider}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, provider: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select electricity provider" />
            </SelectTrigger>
            <SelectContent>
              {electricityProviders.map((provider) => (
                <SelectItem key={provider.id} value={provider.id}>
                  {provider.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="meterNumber">Meter Number</Label>
          <Input
            id="meterNumber"
            placeholder="Enter meter number"
            value={formData.meterNumber}
            onChange={(e) => setFormData((prev) => ({ ...prev, meterNumber: e.target.value }))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount (₦)</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
            required
            min="100"
          />
          <p className="text-xs text-gray-500">Minimum amount: ₦100</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            required
          />
          <p className="text-xs text-gray-500">Token will be sent to this number</p>
        </div>

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
          {isLoading ? "Processing..." : "Make Payment"}
        </Button>
      </form>
    </div>
  )
}

