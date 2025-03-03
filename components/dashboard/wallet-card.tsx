"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Plus } from "lucide-react"

export function WalletCard() {
  const [showBalance, setShowBalance] = useState(false)

  return (
    <Card className="bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
        <CardDescription>Your available funds</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">{showBalance ? "₦15,750.00" : "₦•••••••"}</div>
          <Button variant="ghost" size="icon" onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="sm">
          <Plus className="mr-2 h-4 w-4" /> Fund Wallet
        </Button>
      </CardFooter>
    </Card>
  )
}

