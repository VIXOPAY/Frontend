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

const educationServices = [
  { id: "waec", name: "WAEC Result Checker" },
  { id: "jamb", name: "JAMB Registration" },
  { id: "neco", name: "NECO Result Checker" },
  { id: "nabteb", name: "NABTEB Registration" },
]

export default function EducationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    service: "",
    quantity: "1",
    email: "",
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
        title: "Purchase Successful",
        description: `Your PIN will be sent to ${formData.email}`,
      })
      setFormData({ service: "", quantity: "1", email: "", phone: "" })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Purchase Failed",
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
        <h1 className="text-lg font-semibold">Education Services</h1>
        <Button variant="ghost" size="icon" className="ml-auto text-green-500">
          <CheckCircle className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Select Service</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select education service" />
            </SelectTrigger>
            <SelectContent>
              {educationServices.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Select
            value={formData.quantity}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, quantity: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
          <p className="text-xs text-gray-500">PIN will be sent to this email</p>
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
        </div>

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
          {isLoading ? "Processing..." : "Purchase PIN"}
        </Button>
      </form>
    </div>
  )
}

