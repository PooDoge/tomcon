import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "5 Things to Do Immediately After a Flood in Long Island",
    excerpt:
      "Learn the critical first steps to take after experiencing flooding in your Long Island home to minimize damage and start the recovery process.",
    image: "/flood.webp",
    date: "May 15, 2023",
  },
  {
    title: "How to Spot Hidden Water Damage in Your Home",
    excerpt:
      "Discover the subtle signs of water damage that homeowners often miss and why early detection is crucial for preventing costly repairs.",
    image: "/water.webp",
    date: "June 22, 2023",
  },
  {
    title: "Why You Shouldn't Delay Mold Remediation",
    excerpt:
      "Understanding the health risks and structural damage associated with mold growth and the importance of professional remediation services.",
    image: "/mold.webp",
    date: "July 8, 2023",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800">
              <span>Our Blog</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
              Restoration Resources & Tips
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Expert advice and information to help Long Island homeowners prevent and address water damage, flooding,
              and mold issues.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href="#"
              className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/mold.webp"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">{post.date}</p>
                <h3 className="mb-2 text-xl font-bold text-blue-900 group-hover:text-blue-700">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center text-blue-700">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
