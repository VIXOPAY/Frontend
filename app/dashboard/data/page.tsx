"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, CheckCircle } from "lucide-react"

const dataBundles = {
  mtn: [
    { id: "mtn1", name: "1GB (24 Hours)", price: "300" },
    { id: "mtn2", name: "2GB (7 Days)", price: "500" },
    { id: "mtn3", name: "5GB (30 Days)", price: "1,500" },
    { id: "mtn4", name: "10GB (30 Days)", price: "2,500" },
  ],
  airtel: [
    { id: "airtel1", name: "1.5GB (30 Days)", price: "1,000" },
    { id: "airtel2", name: "3GB (30 Days)", price: "1,500" },
    { id: "airtel3", name: "6GB (30 Days)", price: "2,500" },
    { id: "airtel4", name: "10GB (30 Days)", price: "3,000" },
  ],
  glo: [
    { id: "glo1", name: "1.8GB (14 Days)", price: "500" },
    { id: "glo2", name: "4.5GB (30 Days)", price: "1,000" },
    { id: "glo3", name: "7.2GB (30 Days)", price: "1,500" },
    { id: "glo4", name: "9.2GB (30 Days)", price: "2,000" },
  ],
  "9mobile": [
    { id: "9mobile1", name: "1GB (30 Days)", price: "1,000" },
    { id: "9mobile2", name: "2.5GB (30 Days)", price: "2,000" },
    { id: "9mobile3", name: "4GB (30 Days)", price: "3,000" },
    { id: "9mobile4", name: "11GB (30 Days)", price: "4,000" },
  ],
}

export default function DataPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    network: "mtn",
    phoneNumber: "",
    bundle: "",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNetworkChange = (value: string) => {
    setFormData((prev) => ({ ...prev, network: value, bundle: "" }))
  }

  const handleBundleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, bundle: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const selectedBundle = dataBundles[formData.network as keyof typeof dataBundles].find(
        (bundle) => bundle.id === formData.bundle,
      )

      toast({
        title: "Data Purchase Successful",
        description: `You have successfully purchased ${selectedBundle?.name} for ${formData.phoneNumber}`,
      })

      // Reset form
      setFormData((prev) => ({ ...prev, phoneNumber: "", bundle: "" }))
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
        <h1 className="text-lg font-semibold">Buy Data</h1>
        <Button variant="ghost" size="icon" className="ml-auto text-green-500">
          <CheckCircle className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Select Network</Label>
          <RadioGroup value={formData.network} onValueChange={handleNetworkChange} className="grid grid-cols-4 gap-4">
            <div>
              <RadioGroupItem value="mtn" id="mtn-data" className="peer sr-only" />
              <Label
                htmlFor="mtn-data"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-yellow-400 w-8 h-8"></div>
                <span className="text-xs">MTN</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="airtel" id="airtel-data" className="peer sr-only" />
              <Label
                htmlFor="airtel-data"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-red-500 w-8 h-8"></div>
                <span className="text-xs">Airtel</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="glo" id="glo-data" className="peer sr-only" />
              <Label
                htmlFor="glo-data"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-green-600 w-8 h-8"></div>
                <span className="text-xs">Glo</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="9mobile" id="9mobile-data" className="peer sr-only" />
              <Label
                htmlFor="9mobile-data"
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
          <Label htmlFor="bundle">Select Data Bundle</Label>
          <Select value={formData.bundle} onValueChange={handleBundleChange} required>
            <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring-green-500">
              <SelectValue placeholder="Select a data bundle" />
            </SelectTrigger>
            <SelectContent>
              {dataBundles[formData.network as keyof typeof dataBundles].map((bundle) => (
                <SelectItem key={bundle.id} value={bundle.id}>
                  {bundle.name} - ₦{bundle.price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
          {isLoading ? "Processing..." : "Purchase Data"}
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

