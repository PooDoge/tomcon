"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const reviews = [
  {
    name: "John D.",
    location: "Smithtown, NY",
    rating: 5,
    text: "Tomcon Restorations saved our home after a major flood. Their team arrived within an hour of our call and worked tirelessly to extract the water and dry our home. Highly recommend their services!",
  },
  {
    name: "Sarah M.",
    location: "Garden City, NY",
    rating: 5,
    text: "After a pipe burst in our basement, we called Tomcon. They were professional, thorough, and kept us informed throughout the entire restoration process. Our basement looks better than before!",
  },
  {
    name: "Robert L.",
    location: "Smithtown, NY",
    rating: 5,
    text: "When we discovered mold in our bathroom, Tomcon Restorations handled the remediation quickly and effectively. Their knowledge and attention to detail were impressive.",
  },
  {
    name: "Jennifer K.",
    location: "Massapequa, NY",
    rating: 5,
    text: "The Tomcon team responded immediately after our home was damaged during a storm. They were compassionate, professional, and did exceptional work restoring our property.",
  },
  {
    name: "Michael B.",
    location: "Syosset, NY",
    rating: 5,
    text: "As a business owner, I needed quick restoration after water damage to minimize downtime. Tomcon worked around our schedule and got us back up and running faster than expected.",
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleReviews = 3
  const maxIndex = reviews.length - visibleReviews

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="reviews" className="bg-blue-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-800">
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Don't just take our word for it. See what homeowners and businesses throughout Long Island have to say
              about our restoration services.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="min-w-[100%] flex-shrink-0 px-2 sm:min-w-[50%] md:min-w-[33.333%]">
                  <div className="h-full rounded-lg bg-white p-6 shadow-sm">
                    <div className="mb-4 flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 text-gray-600">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute -left-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white",
              currentIndex === 0 ? "invisible opacity-0" : "visible opacity-100",
            )}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous reviews</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute -right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white",
              currentIndex >= maxIndex ? "invisible opacity-0" : "visible opacity-100",
            )}
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next reviews</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
