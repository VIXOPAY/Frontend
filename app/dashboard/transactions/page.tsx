"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Download } from "lucide-react"

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
  // ... more transactions
]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredTransactions = mockTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || transaction.type.toLowerCase() === filterType
    const matchesStatus = filterStatus === "all" || transaction.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link href="/dashboard" className="mr-2">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </Link>
        <h1 className="text-lg font-semibold">Transaction History</h1>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Download className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-4">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="airtime">Airtime</SelectItem>
              <SelectItem value="data">Data</SelectItem>
              <SelectItem value="tv">Cable TV</SelectItem>
              <SelectItem value="electricity">Electricity</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredTransactions.map((transaction) => (
          <Card key={transaction.id} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.id}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-red-500">{transaction.amount}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Badge
                variant={
                  transaction.status === "success"
                    ? "default"
                    : transaction.status === "pending"
                      ? "outline"
                      : "destructive"
                }
                className={transaction.status === "success" ? "bg-green-100 text-green-800 border-green-200" : ""}
              >
                {transaction.status}
              </Badge>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Share
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Receipt
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

