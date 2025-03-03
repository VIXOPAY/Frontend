"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function Airtime2CashPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    network: "mtn",
    phoneNumber: "",
    amount: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNetworkChange = (value: string) => {
    setFormData((prev) => ({ ...prev, network: value }))
  }

  const handleBankChange = (value: string) => {
    setFormData((prev) => ({ ...prev, bankName: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Request Submitted Successfully",
        description: `Your airtime to cash conversion request has been submitted. You will receive ₦${Number.parseInt(formData.amount) * 0.7} in your bank account.`,
      })

      // Reset form
      setFormData({
        network: "mtn",
        phoneNumber: "",
        amount: "",
        bankName: "",
        accountNumber: "",
        accountName: "",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Request Failed",
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
        <h1 className="text-lg font-semibold">Airtime to Cash</h1>
        <Button variant="ghost" size="icon" className="ml-auto text-green-500">
          <CheckCircle className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-6">
        <Card className="bg-yellow-50 p-3 border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> You will receive 70% of the airtime value. Minimum amount is ₦500 and maximum is
            ₦10,000.
          </p>
        </Card>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Select Network</Label>
          <RadioGroup value={formData.network} onValueChange={handleNetworkChange} className="grid grid-cols-4 gap-4">
            <div>
              <RadioGroupItem value="mtn" id="mtn-a2c" className="peer sr-only" />
              <Label
                htmlFor="mtn-a2c"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-yellow-400 w-8 h-8"></div>
                <span className="text-xs">MTN</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="airtel" id="airtel-a2c" className="peer sr-only" />
              <Label
                htmlFor="airtel-a2c"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-red-500 w-8 h-8"></div>
                <span className="text-xs">Airtel</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="glo" id="glo-a2c" className="peer sr-only" />
              <Label
                htmlFor="glo-a2c"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500"
              >
                <div className="mb-2 rounded-full bg-green-600 w-8 h-8"></div>
                <span className="text-xs">Glo</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="9mobile" id="9mobile-a2c" className="peer sr-only" />
              <Label
                htmlFor="9mobile-a2c"
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
            placeholder="Enter phone number with airtime"
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
            min="500"
            max="10000"
            required
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Min: ₦500</span>
            <span>Max: ₦10,000</span>
          </div>
          {formData.amount && (
            <div className="mt-2 p-2 bg-gray-50 rounded-md">
              <p className="text-sm">
                You will receive:{" "}
                <span className="font-bold text-green-600">₦{Number.parseInt(formData.amount || "0") * 0.7}</span>
              </p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="bankName">Bank Name</Label>
          <Select value={formData.bankName} onValueChange={handleBankChange} required>
            <SelectTrigger className="border-gray-300 focus:border-green-500 focus:ring-green-500">
              <SelectValue placeholder="Select your bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="access">Access Bank</SelectItem>
              <SelectItem value="firstbank">First Bank</SelectItem>
              <SelectItem value="gtb">GTBank</SelectItem>
              <SelectItem value="uba">UBA</SelectItem>
              <SelectItem value="zenith">Zenith Bank</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="accountNumber">Account Number</Label>
          <Input
            id="accountNumber"
            name="accountNumber"
            placeholder="Enter account number"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="accountName">Account Name</Label>
          <Input
            id="accountName"
            name="accountName"
            placeholder="Enter account name"
            value={formData.accountName}
            onChange={handleChange}
            required
            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
          {isLoading ? "Processing..." : "Submit Request"}
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

