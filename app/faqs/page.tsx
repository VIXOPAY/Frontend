import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "How do I create an account on VIXOPAY?",
    answer:
      "Creating an account is simple. Click on the 'Create Account' button, fill in your details including name, email, and phone number, then verify your account through the SMS code sent to your phone.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including bank transfers, debit cards, and USSD. You can also fund your wallet through any of our partner banks.",
  },
  {
    question: "How long does it take to process transactions?",
    answer:
      "Most transactions are processed instantly. However, some services might take up to 5 minutes depending on network conditions and service provider response time.",
  },
  {
    question: "Is my money safe on VIXOPAY?",
    answer:
      "Yes, your money is safe. We use industry-standard security measures and are regulated by relevant authorities. All transactions are encrypted and monitored 24/7.",
  },
  {
    question: "What should I do if my transaction fails?",
    answer:
      "If your transaction fails, the amount will be automatically reversed to your wallet. If you don't see the reversal within 24 hours, please contact our support team.",
  },
  {
    question: "How does Airtime2Cash work?",
    answer:
      "Airtime2Cash allows you to convert your airtime to cash. Select the amount you want to convert, choose your bank details, and we'll transfer the cash value (minus service charge) to your account.",
  },
  {
    question: "What are the transaction limits?",
    answer:
      "Transaction limits vary by service. For airtime and data, the minimum is ₦50 and maximum is ₦50,000. For bill payments, limits may vary based on the service provider.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through multiple channels including in-app chat, email at support@vixopay.com, or phone at +234 806 509 6213. We're available 24/7.",
  },
]

const categories = ["Account & Security", "Payments & Wallet", "Services", "Technical Issues"]

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-green-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-600 mb-8">
                Find answers to common questions about VIXOPAY services and features.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild className="bg-green-500 hover:bg-green-600">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card key={category} className="p-4 text-center hover:bg-gray-50 cursor-pointer">
                  <h3 className="font-medium">{category}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Please chat with our friendly team.
              </p>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

