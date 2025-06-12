import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-50 py-16 md:py-24">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
                Flood Damage & Restoration Services in Long Island, NY
              </h1>
              <p className="text-xl text-gray-600 md:text-2xl">
                Fast, Reliable, and Trusted Flood & Water Damage Experts Near You
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <a href="tel:+16318315117" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now for 24/7 Emergency Service
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <div className="absolute">
<div className="absolute dropdiv drop left-[calc(50%-100px)] top-[calc(50%-100px)]"></div>
<div className="absolute dropdiv wave left-[calc(50%-100px)] top-[calc(50%-100px)]"></div>
</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                Available 24/7
              </span>
              <span>Emergency Response Within 60 Minutes</span>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-full">
            <Image
              src="/hero.webp"
              alt="Water damage restoration team working in a flooded home"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
