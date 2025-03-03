"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Download } from "lucide-react"

interface Transaction {
  id: string
  type: string
  description: string
  amount: string
  status: "success" | "pending" | "failed"
  date: string
}

const mockTransactions: Transaction[] = [
  {
    id: "TX123456",
    type: "Airtime",
    description: "MTN Airtime Recharge",
    amount: "₦1,000.00",
    status: "success",
    date: "Today, 10:30 AM",
  },
  {
    id: "TX123457",
    type: "Data",
    description: "Airtel Data Bundle",
    amount: "₦2,500.00",
    status: "success",
    date: "Yesterday, 3:15 PM",
  },
  {
    id: "TX123458",
    type: "Cable TV",
    description: "DSTV Premium Subscription",
    amount: "₦24,500.00",
    status: "pending",
    date: "Yesterday, 1:20 PM",
  },
  {
    id: "TX123459",
    type: "Electricity",
    description: "EKEDC Prepaid Meter",
    amount: "₦5,000.00",
    status: "success",
    date: "Mar 12, 2023",
  },
  {
    id: "TX123460",
    type: "Wallet",
    description: "Wallet Funding",
    amount: "₦10,000.00",
    status: "success",
    date: "Mar 10, 2023",
  },
]

interface RecentTransactionsProps {
  limit?: number
}

export function RecentTransactions({ limit = 5 }: RecentTransactionsProps) {
  const [expanded, setExpanded] = useState(false)

  const displayTransactions = expanded ? mockTransactions : mockTransactions.slice(0, limit)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your recent payment activities</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground">
            <div>Type</div>
            <div className="col-span-2">Description</div>
            <div className="text-right">Amount</div>
            <div className="text-right">Status</div>
          </div>
          <div className="space-y-4">
            {displayTransactions.map((transaction) => (
              <div key={transaction.id} className="grid grid-cols-5 items-center text-sm">
                <div>{transaction.type}</div>
                <div className="col-span-2">
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-xs text-muted-foreground">{transaction.date}</div>
                </div>
                <div className="text-right font-medium">{transaction.amount}</div>
                <div className="text-right">
                  <Badge
                    variant={
                      transaction.status === "success"
                        ? "default"
                        : transaction.status === "pending"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          {mockTransactions.length > limit && (
            <Button variant="ghost" className="w-full" onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <>
                  <ChevronUp className="mr-2 h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Show More
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

