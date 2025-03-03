import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Users, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">About VIXOPAY</h1>
                <p className="text-lg text-gray-600 mb-8">
                  VIXOPAY is a leading telecom service aggregator in Nigeria, providing seamless digital solutions for
                  airtime, data, cable TV subscriptions, and utility payments.
                </p>
                <Button asChild className="bg-green-500 hover:bg-green-600">
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="About VIXOPAY"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6">
                <Shield className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-600">
                  Your transactions and data are protected with industry-standard security measures.
                </p>
              </Card>
              <Card className="p-6">
                <Users className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600">We prioritize our customers' needs and provide excellent support.</p>
              </Card>
              <Card className="p-6">
                <Target className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Continuously improving our services to meet evolving needs.</p>
              </Card>
              <Card className="p-6">
                <Award className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Committed to delivering the highest quality service.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To simplify digital transactions and provide accessible, reliable telecom services to millions of
                Nigerians through innovative technology solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-4xl font-bold text-green-500 mb-2">1M+</h3>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-green-500 mb-2">5M+</h3>
                  <p className="text-gray-600">Transactions</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-green-500 mb-2">99.9%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Team Member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                    <p className="text-gray-600 mb-4">Chief Executive Officer</p>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

