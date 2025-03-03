"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function AirtimePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    network: "mtn",
    phoneNumber: "",
    amount: "",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNetworkChange = (value: string) => {
    setFormData((prev) => ({ ...prev, network: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Airtime Purchase Successful",
        description: `You have successfully purchased ₦${formData.amount} airtime for ${formData.phoneNumber}`,
      })

      // Reset form
      setFormData((prev) => ({ ...prev, phoneNumber: "", amount: "" }))
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Purchase Failed",
        description: "There was an error processing your request. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <Link href="/dashboard" className="mr-2">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </Link>
        <h1 className="text-lg font-semibold">Buy Airtime</h1>
        <Button variant="ghost" size="icon" className="ml-auto text-green-500">
          <CheckCircle className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Select Network</Label>
          <RadioGroup value={formData.network} onValueChange={handleNetworkChange} className="grid grid-cols-4 gap-4">
            <div>
              <RadioGroupItem value="mtn" id="mtn" className="peer sr-only" />
              <Label
                htmlFor="mtn"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-yellow-400 w-8 h-8"></div>
                <span className="text-xs">MTN</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="airtel" id="airtel" className="peer sr-only" />
              <Label
                htmlFor="airtel"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-red-500 w-8 h-8"></div>
                <span className="text-xs">Airtel</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="glo" id="glo" className="peer sr-only" />
              <Label
                htmlFor="glo"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-green-600 w-8 h-8"></div>
                <span className="text-xs">Glo</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="9mobile" id="9mobile" className="peer sr-only" />
              <Label
                htmlFor="9mobile"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-green-400 w-8 h-8"></div>
                <span className="text-xs">9mobile</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount (₦)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            min="50"
            max="50000"
            required
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
          <p className="text-xs text-gray-500">Min: ₦50, Max: ₦50,000</p>
        </div>

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
          {isLoading ? "Processing..." : "Purchase Airtime"}
        </Button>
      </form>

      <div className="mt-6">
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

