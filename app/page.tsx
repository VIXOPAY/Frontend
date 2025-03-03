import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneIcon, Wifi, Tv, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="gradient-bg py-16 md:py-24">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                VIXOPAY <span className="text-4xl font-light">—</span>
                <br />
                Stay connected!
              </h1>
              <p className="text-lg text-gray-700 max-w-md">
                Buy airtime, data, pay bills, and convert airtime to cash effortlessly. Your seamless telecom experience
                begins here. Enjoy!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://apps.apple.com/app/vixopay" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vixopay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/vixopay-landingpage-image-1.png?height=500&width=400"
                alt="VIXOPAY App"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <PhoneIcon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Airtime</h3>
                <p className="text-gray-600">Purchase airtime for all networks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Bundles</h3>
                <p className="text-gray-600">Buy data plans for all networks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Tv className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cable TV</h3>
                <p className="text-gray-600">Pay for DSTV, GOTV & more</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Electricity</h3>
                <p className="text-gray-600">Pay electricity bills instantly</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust VIXOPAY for their telecom needs.
            </p>
            <Link href="/auth/register">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Create Free Account
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

