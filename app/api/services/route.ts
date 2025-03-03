import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, you would fetch this data from your database or external API
  const services = [
    {
      id: "airtime",
      name: "Airtime",
      description: "Buy airtime for all networks",
      icon: "Wifi",
    },
    {
      id: "data",
      name: "Data",
      description: "Purchase data bundles",
      icon: "Wifi",
    },
    {
      id: "cable-tv",
      name: "Cable TV",
      description: "Pay for DSTV, GOTV & more",
      icon: "Tv",
    },
    {
      id: "electricity",
      name: "Electricity",
      description: "Pay electricity bills",
      icon: "Zap",
    },
    {
      id: "education",
      name: "Education",
      description: "Purchase WAEC, JAMB pins",
      icon: "BookOpen",
    },
  ]

  return NextResponse.json(services)
}

