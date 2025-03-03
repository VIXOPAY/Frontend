import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-green-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Have questions? We're here to help. Reach out to our team through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="p-6">
                <Phone className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+234 806 509 6213</p>
                <p className="text-gray-600">+234 906 509 6213</p>
              </Card>
              <Card className="p-6">
                <Mail className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">support@vixopay.com</p>
                <p className="text-gray-600">info@vixopay.com</p>
              </Card>
              <Card className="p-6">
                <MapPin className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Office</h3>
                <p className="text-gray-600">
                  Okigwe Road
                  <br />
                  Owerri, Imo State
                  <br />
                  Nigeria
                </p>
              </Card>
              <Card className="p-6">
                <Clock className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">
                  24/7 Support
                  <br />
                  Always Available
                </p>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[150px] border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Live Chat Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-gray-600 mb-8">
                Our live chat support is available 24/7. Get instant help from our friendly team.
              </p>
              <Button className="bg-green-500 hover:bg-green-600">Start Live Chat</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

