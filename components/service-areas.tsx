import Image from "next/image"
import { MapPin } from "lucide-react"

const areas = ["Nassau County", "Suffolk County", "Queens", "Brooklyn", "Manhattan", "The Hamptons"]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800">
                <span>Service Areas</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl">
                Serving Long Island and NYC Boroughs
              </h2>
              <p className="text-gray-600 md:text-xl">
                Tomcon Restorations provides fast, reliable flood damage restoration services throughout Long Island and
                the surrounding areas.
              </p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {areas.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-700" />
                  <span className="text-gray-700">{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              Don't see your area listed? Contact us to confirm service availability in your location.
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src="/servicearea.webp"
              alt="Map of Long Island and NYC service areas"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
