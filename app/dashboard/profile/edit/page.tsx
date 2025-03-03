"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { updateProfile } from "@/lib/actions/profile"

export default function EditProfilePage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "0801 234 5678",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await updateProfile(formData)
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center">
        <Link href="/dashboard/profile">
          <ArrowLeft className="h-5 w-5 text-gray-500 mr-3" />
        </Link>
        <h1 className="text-lg font-semibold">Edit Profile</h1>
      </header>

      <main className="p-4 max-w-md mx-auto">
        {/* Profile Photo */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">View photo</p>
          <p className="text-sm text-green-600">Upload photo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
            {isLoading ? "Updating..." : "Confirm"}
          </Button>
        </form>
      </main>
    </div>
  )
}

