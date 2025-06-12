import { Clock, Home, Shield, Star } from "lucide-react"

const reasons = [
  {
    title: "24/7 Emergency Response",
    description: "We're available around the clock to respond to your emergency restoration needs in Long Island.",
    icon: Clock,
  },
  {
    title: "Locally Owned & Operated",
    description: "As a local Long Island business, we understand the unique challenges of water damage in our area.",
    icon: Home,
  },
  {
    title: "Fully Licensed & Insured",
    description: "Our team is fully licensed, insured, and certified to handle all types of restoration projects.",
    icon: Shield,
  },
  {
    title: "5-Star Customer Reviews",
    description:
      "We're proud of our reputation for excellence and customer satisfaction throughout Nassau and Suffolk County.",
    icon: Star,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-blue-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-800">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
              The Trusted Choice for Restoration in Long Island
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              When disaster strikes, you need a restoration company you can trust. Here's why homeowners and businesses
              choose Tomcon Restorations.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-700">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
