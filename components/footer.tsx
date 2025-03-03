import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/vixopay-logo.png?height=32&width=32" alt="VIXOPAY Logo" width={150} height={32} />
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500">
                  Airtime
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500">
                  Cable TV
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500">
                  Data
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500">
                  Airtime2Cash
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-600 hover:text-green-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-green-500">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-500">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-green-500">
                  Security
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-600 text-sm">
                Okigwe Road Owerri,
                <br />
                Imo State, Nigeria
              </p>
              <p className="text-gray-600 text-sm mt-2">contact@vixopay.com</p>
              <p className="text-gray-600 text-sm">+234 806 509 6213</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          <p>Copyright ©VIXOPAY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

