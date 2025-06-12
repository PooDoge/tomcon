import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Droplets, Waves, Sprout, Flame, CloudLightning } from "lucide-react"

const services = [
  {
    title: "Flood Restoration",
    description:
      "Professional flood damage restoration services for homes and businesses in Long Island. We extract water, dry structures, and restore your property to pre-loss condition.",
    icon: Waves,
    image: "/flood.webp",
  },
  {
    title: "Water Extraction",
    description:
      "Fast water removal and extraction services using industrial-grade equipment. We remove standing water and moisture to prevent further damage and mold growth.",
    icon: Droplets,
    image: "/water.webp",
  },
  {
    title: "Mold Remediation",
    description:
      "Complete mold removal and remediation services in Long Island. We identify and eliminate mold at its source, ensuring your property is safe and healthy.",
    icon: Sprout,
    image: "/mold.webp",
  },
  {
    title: "Fire Damage Repair",
    description:
      "Comprehensive fire damage restoration services. We clean soot, remove smoke odor, and restore your property after fire damage in Nassau and Suffolk County.",
    icon: Flame,
    image: "/fire.webp",
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "Emergency storm damage cleanup and restoration services for Long Island properties. We handle fallen trees, structural damage, flooding, and more.",
    icon: CloudLightning,
    image: "/storm.webp",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800">
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
              Comprehensive Restoration Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Tomcon Restorations provides expert damage restoration services throughout Long Island and the NYC area.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                </div>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Button asChild variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50">
                  <a href="#contact">Learn More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
