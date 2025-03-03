"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { DateRangePicker } from "@react-types/date-range-picker"

export const DatePickerWithRange = ({
  dateRange,
  setDateRange,
}: {
  dateRange: { from: Date | null; to: Date | null }
  setDateRange: (range: { from: Date | null; to: Date | null }) => void
}) => {
  return (
    <DateRangePicker.Root
      value={dateRange}
      onValueChange={setDateRange}
      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
    >
      <DateRangePicker.Trigger className="relative flex items-center justify-center w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        <Calendar className="mr-2 h-4 w-4" />
        <span>Select Date Range</span>
      </DateRangePicker.Trigger>
      <DateRangePicker.Content className="absolute top-full left-0 z-10 w-full max-w-xs rounded-md bg-white shadow-lg">
        <DateRangePicker.Calendar />
        <DateRangePicker.Footer className="flex items-center justify-between p-2">
          <Button variant="ghost" onClick={() => setDateRange({ from: null, to: null })}>
            Clear
          </Button>
          <Button>Apply</Button>
        </DateRangePicker.Footer>
      </DateRangePicker.Content>
    </DateRangePicker.Root>
  )
}

