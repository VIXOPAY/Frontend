import type React from "react"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/sidebar"
import { verifyAdminSession } from "@/lib/auth"

/**
 * Admin Layout Component
 *
 * Protected layout for admin dashboard that:
 * 1. Verifies admin authentication
 * 2. Provides consistent layout with sidebar
 * 3. Handles responsive design for mobile/desktop
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Verify admin session on server side
  const isAdmin = await verifyAdminSession()
  if (!isAdmin) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Admin Sidebar - Hidden on mobile, shown on desktop */}
        <AdminSidebar className="hidden md:flex" />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

